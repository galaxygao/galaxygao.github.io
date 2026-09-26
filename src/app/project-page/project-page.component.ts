import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

interface ProjectMetric {
  value: string;
  label: string;
}

interface ProjectBlock {
  slug: string;
  title: string;
  category: string;
  period: string;
  affiliation: string;
  summary: string;
  image: string;
  imageAlt: string;
  tools: string[];
  metrics: ProjectMetric[];
  description: string[];
}

@Component({
  selector: 'app-project-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent {
  public readonly projectBlocks: ProjectBlock[] = [
    {
      slug: 'data-driven-turbulence',
      title: 'Data-Driven Turbulence Research',
      category: 'Turbulence · HPC',
      period: '2026 – Present',
      affiliation: 'University of Pittsburgh',
      summary: 'A scalable research workflow for investigating subfilter energy transfer in high-resolution isotropic turbulence.',
      image: 'assets/images/projects/data-driven-turbulence.png',
      imageAlt: 'Orthogonal slices of a turbulent subfilter-transfer field',
      tools: ['Python', 'JHTDB', 'Zarr', 'FFT', 'Streamlit', 'HPC'],
      metrics: [
        { value: '1024³', label: 'field resolution' },
        { value: '5', label: 'filter scales' },
        { value: '16', label: 'HPC workers' }
      ],
      description: [
        'Built a resumable pipeline assembling full 1024³ JHTDB velocity fields from chunked requests, with checksum tiles, retry/backoff, and compressed Zarr output at 9.3 GB per frame.',
        'Ran slab-streamed FFT filtering and spectral derivatives at five scales on 16 workers, with a 92 GiB peak memory footprint.',
        'Derived subfilter-transfer fields over a six-regime partition and quantified forward transfer versus backscatter in each regime.',
        'Added quality gates for divergence, energy identity, and regime closure, plus a read-only Streamlit viewer.'
      ]
    },
    {
      slug: 'physics-informed-transformer',
      title: 'Physics-Informed Transformer for 2D Navier–Stokes',
      category: 'Scientific ML · PDEs',
      period: '2025',
      affiliation: 'University of Southern California · AME-505',
      summary: 'A Transformer surrogate that combines sparse flow observations with momentum, continuity, and boundary-condition constraints.',
      image: 'assets/images/projects/physics-informed-transformer.gif',
      imageAlt: 'Animated comparison of true and predicted velocity fields',
      tools: ['PyTorch', 'Transformers', 'PDEBench', 'HDF5', 'CUDA'],
      metrics: [
        { value: '204,800', label: 'training samples' },
        { value: '4', label: 'Transformer layers' },
        { value: '~10 ms', label: 'inference time' }
      ],
      description: [
        'Built a PDEBench data pipeline for 512 × 512 velocity and forcing fields, using 200 frames and 204,800 samples from 1,024 sensors.',
        'Reduced roughly 50 million space-time points to a stride-16 grid plus 4,096 random collocation points for training on one RTX 3090.',
        'Implemented a four-layer, four-head encoder-only Transformer with Fourier positional encoding and weighted data, momentum, continuity, and boundary-condition losses.',
        'Reached 0.03–0.06 relative L2 error at approximately 10 ms inference.'
      ]
    },
    {
      slug: 'cell-biomechanics',
      title: 'Computational Cell Biomechanics',
      category: 'Finite Elements · Biomechanics',
      period: '2024 – Present',
      affiliation: 'Shanghai Jiao Tong University',
      summary: 'Finite-element modeling of AFM indentation to connect cytoskeletal reorganization with measured neuronal-cell stiffness.',
      image: 'assets/images/projects/bio.png',
      imageAlt: 'Computational cell biomechanics model and measurements',
      tools: ['Abaqus/CAE', 'Finite Elements', 'Neo-Hookean Model', 'AFM'],
      metrics: [
        { value: '2D', label: 'nonlinear FE model' },
        { value: '4–14%', label: 'modulus decrease' },
        { value: 'PNAS', label: 'under review' }
      ],
      description: [
        'Built 2D Neo-Hookean finite-element models of AFM indentation in Abaqus/CAE with explicit actin, microtubules, and Aβ42 pores.',
        'Reproduced the measured 4–14% modulus decrease from simulated force-displacement curves.',
        'The resulting manuscript is under review at Proceedings of the National Academy of Sciences.'
      ]
    },
    {
      slug: 'multiphase-flow',
      title: 'Computational Multiphase Flow',
      category: 'CFD · Multiphase Flow',
      period: '2022 – 2023',
      affiliation: 'Shanghai Jiao Tong University',
      summary: 'Three-phase CFD and analytical modeling of gas loss in the shear layer of ventilated supercavitating flows.',
      image: 'assets/images/projects/pof_1.png',
      imageAlt: 'Computational multiphase-flow simulation of a ventilated supercavity',
      tools: ['ANSYS', 'Multifluid CFD', 'SST k–ω', 'Experimental Validation'],
      metrics: [
        { value: '3', label: 'fluid phases' },
        { value: '20 / 140', label: 'flow speeds, m/s' },
        { value: 'PoF', label: 'journal publication' }
      ],
      description: [
        'Ran gas-vapor-water multi-fluid CFD of ventilated supercavitating flows at 20 and 140 m/s, spanning gravity-dominated and gravity-negligible regimes.',
        'Established radial distribution laws of velocity, volume fraction, and superficial velocity for all three phases.',
        'Derived a shear-layer gas-loss model and validated it against water-whirling-arm and water-tunnel experiments; published in Physics of Fluids.'
      ]
    }
  ];

  public activeProject: ProjectBlock = this.projectBlocks[0];

  constructor(route: ActivatedRoute) {
    route.queryParamMap.subscribe(params => {
      const requestedProject = params.get('project');
      this.activeProject = this.projectBlocks.find(project =>
        project.title === requestedProject || project.slug === requestedProject
      ) || this.projectBlocks[0];
    });
  }
}
