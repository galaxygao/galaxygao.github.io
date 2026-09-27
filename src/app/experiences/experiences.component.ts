import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {LanguageService} from '../language.service';

declare var data : any;

@Component({
    selector: 'app-experiences',
    templateUrl: './experiences.component.html',
    changeDetection: ChangeDetectionStrategy.Default,
    styleUrls: ['./experiences.component.css', './experiences-language.component.css'],
    standalone: false
})

export class ExperiencesComponent implements OnInit {
	public experiencesData  = data['Experiences'];

	constructor(private changeDetectorRef: ChangeDetectorRef, public language: LanguageService) {}

	ngOnInit(): void {
		this.changeDetectorRef.detectChanges();
	}
}
