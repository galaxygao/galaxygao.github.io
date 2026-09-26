from pathlib import Path

from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
SOURCE_FILES = [
    ROOT / "source-media" / "pinn" / "pinn-sim-0.gif",
    ROOT / "source-media" / "pinn" / "pinn-sim-3-a.gif",
    ROOT / "source-media" / "pinn" / "pinn-sim-3-b.gif",
]
OUTPUT_DIR = ROOT / "src" / "assets" / "images" / "projects"
OUTPUT_GIF = OUTPUT_DIR / "physics-informed-transformer.gif"
OUTPUT_PREVIEW = OUTPUT_DIR / "physics-informed-transformer.png"

TARGET_WIDTH = 720
PANEL_GAP = 12
FRAME_STEP = 2
FRAME_DURATION_MS = 160


def main() -> None:
    animations = [Image.open(path) for path in SOURCE_FILES]
    try:
        source_frame_count = min(
            getattr(image, "n_frames", 1) for image in animations
        )
        frame_indices = range(0, source_frame_count, FRAME_STEP)
        source_width, source_height = animations[0].size
        target_height = round(source_height * TARGET_WIDTH / source_width)
        canvas_height = target_height * len(animations) + PANEL_GAP * (len(animations) - 1)

        output_frames: list[Image.Image] = []
        for frame_index in frame_indices:
            canvas = Image.new("RGB", (TARGET_WIDTH, canvas_height), "white")
            for panel_index, animation in enumerate(animations):
                animation.seek(frame_index)
                panel = animation.convert("RGB").resize(
                    (TARGET_WIDTH, target_height), Image.Resampling.LANCZOS
                )
                y = panel_index * (target_height + PANEL_GAP)
                canvas.paste(panel, (0, y))

            output_frames.append(
                canvas.quantize(colors=256, method=Image.Quantize.MEDIANCUT)
            )

        OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
        output_frames[0].convert("RGB").save(OUTPUT_PREVIEW, optimize=True)
        output_frames[0].save(
            OUTPUT_GIF,
            save_all=True,
            append_images=output_frames[1:],
            duration=FRAME_DURATION_MS,
            loop=0,
            disposal=2,
            optimize=True,
        )

        print(
            f"Created {OUTPUT_GIF} with {len(output_frames)} frames at "
            f"{TARGET_WIDTH}x{canvas_height}; preview: {OUTPUT_PREVIEW}"
        )
    finally:
        for animation in animations:
            animation.close()


if __name__ == "__main__":
    main()
