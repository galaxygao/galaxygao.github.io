import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';

declare var data : any;
declare var VanillaTilt:any;

@Component({
    selector: 'app-experiences',
    templateUrl: './experiences.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./experiences.component.css'],
    standalone: false
})

export class ExperiencesComponent implements OnInit,AfterViewInit {
	public experiencesData  = data['Experiences'];
	public checkScreenSize : boolean = screen.width >= 768;

	constructor(private changeDetectorRef: ChangeDetectorRef) {
		changeDetectorRef.detach();
	}

	ngOnInit(): void {
		this.changeDetectorRef.detectChanges();
	}

	ngAfterViewInit(): void {
		if (this.checkScreenSize) {
			let box: any = document.querySelectorAll('.box');
			VanillaTilt.init(box, {
				max: 25,
				speed: 400,
				startX: 0,
				startY: 0,
				scale: 1.03
			});
		}
    }
}
