import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NgbTooltipModule} from "@ng-bootstrap/ng-bootstrap";

import {ApplicationComponent} from './application.component';
import {HomeComponent} from "../home/home.component";
import {NavbarComponent} from "../navbar/navbar.component";
import {AboutComponent} from "../about/about.component";
import {QuoteComponent} from "../quote/quote.component";
import {PortfolioComponent} from "../portfolio/portfolio.component";
import {PublicationComponent} from "../publication/publication.component";
import {ExperiencesComponent} from "../experiences/experiences.component";
import {ContactComponent} from "../contact/contact.component";
import {SocialComponent} from "../social/social.component";
import {FooterComponent} from "../footer/footer.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [{ path: '', component: ApplicationComponent }];

@NgModule({
	declarations: [
		ApplicationComponent,
		HomeComponent,
		NavbarComponent,
		AboutComponent,
		QuoteComponent,
		PortfolioComponent,
		PublicationComponent,
		ExperiencesComponent,
		ContactComponent,
		SocialComponent,
		FooterComponent
	],
	imports: [
		RouterModule.forChild(routes),
		CommonModule,
		NgbTooltipModule
	]
})
export class ApplicationModule { }
