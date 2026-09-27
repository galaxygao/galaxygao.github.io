import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LanguageService } from '../language.service';

declare var data: any;

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
  standalone: false
})
export class SkillsComponent {
  public skillsData = data['About']['skills'];

  constructor(public language: LanguageService) {}
}
