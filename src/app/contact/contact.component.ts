import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {LanguageService} from '../language.service';

declare var data : any;
declare var particlesJS : any;

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    changeDetection: ChangeDetectionStrategy.Default,
    styleUrls: ['./contact.component.css', './contact-language.component.css'],
    standalone: false
})

export class ContactComponent implements OnInit {
	public contactData = data['Contact'];

	constructor(private changeDetectorRef: ChangeDetectorRef, public language: LanguageService) {}

	ngOnInit(): void {
		particlesJS.load('particles-js2');
		this.changeDetectorRef.detectChanges();
	}
}
