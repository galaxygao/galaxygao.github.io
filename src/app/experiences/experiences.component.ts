import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';

declare var data : any;

@Component({
    selector: 'app-experiences',
    templateUrl: './experiences.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./experiences.component.css'],
    standalone: false
})

export class ExperiencesComponent implements OnInit {
	public experiencesData  = data['Experiences'];

	constructor(private changeDetectorRef: ChangeDetectorRef) {
		changeDetectorRef.detach();
	}

	ngOnInit(): void {
		this.changeDetectorRef.detectChanges();
	}
}
