import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {LanguageService} from '../language.service';

declare var data : any

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    changeDetection: ChangeDetectionStrategy.Default,
    styleUrls: ['./footer.component.css'],
    standalone: false
})

export class FooterComponent implements OnInit {
	public footerData = data['Footer'];

	constructor(private changeDetectorRef: ChangeDetectorRef, public language: LanguageService) {}

	ngOnInit(): void {
		this.changeDetectorRef.detectChanges();
	}

}
