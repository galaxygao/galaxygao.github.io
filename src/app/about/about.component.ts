import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostListener,
  OnInit
} from '@angular/core';

declare var data: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./about.component.css'],
  standalone: false
})
export class AboutComponent implements OnInit, AfterViewInit {
  public aboutData = data['About'];


  public activeTab = 'education';

  public selector: any;
  public activeElements: any = {};

  constructor(public changeDetectorRef: ChangeDetectorRef) {
    changeDetectorRef.detach();
  }

  ngOnInit(): void {
    this.changeDetectorRef.detectChanges();
  }

  ngAfterViewInit() {

    for (const tab of this.aboutData['NavTabs']) {

      const element = document.getElementById(tab.id + '-tab');
      if (element) {
        this.activeElements[tab.id] = element;
        element.addEventListener('click', (event: any) => event.preventDefault());
      }
    }

    this.changeActiveTab(this.activeTab);
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.updateSelector(this.activeTab);
  }

  public changeActiveTab(tab: string) {
    this.updateSelector(tab);
    this.activeTab = tab;
    this.changeDetectorRef.detectChanges();
  }

  public updateSelector(tab: string) {
    if (!this.selector) {
      this.selector = document.getElementById('selector');
    }


    if (this.activeElements[tab]) {
      this.selector.style.width = `${this.activeElements[tab].offsetWidth}px`;
      this.selector.style.left = `${this.activeElements[tab].offsetLeft}px`;
    }
  }
}
