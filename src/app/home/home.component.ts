import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';

declare var Typed: any;
declare var particlesJS : any;
declare var data : any;

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./home.component.css'],
    standalone: false
})

export class HomeComponent implements OnInit,AfterViewInit {
	public homeData = data['Home'];

	constructor(private changeDetectorRef: ChangeDetectorRef) {
		changeDetectorRef.detach();
	}
	ngOnInit(): void {
		particlesJS.load('particles-js');
		this.changeDetectorRef.detectChanges();
	}
	ngAfterViewInit(): void {
		new Typed("#element", {
			stringsElement: '#typed-strings',
			typeSpeed: 120,
			backSpeed: 0,
			showCursor: false,
			loop: false
		});
}

}
