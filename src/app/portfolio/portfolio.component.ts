import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {LanguageService} from '../language.service';

declare var data : any;

@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.component.html',
    changeDetection: ChangeDetectionStrategy.Default,
    styleUrls: ['./portfolio.component.css'],
    standalone: false
})
export class PortfolioComponent implements OnInit {
	public portfolioData = data['Portfolio'];

	constructor(private changeDetectorRef: ChangeDetectorRef, public language: LanguageService) {}

	ngOnInit(): void {
		this.changeDetectorRef.detectChanges();
	}

}
