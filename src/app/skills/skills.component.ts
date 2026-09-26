import { ChangeDetectionStrategy, Component } from '@angular/core';

declare var data: any;

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class SkillsComponent {
  public skillsData = data['About']['skills'];
}
