import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publication',  
  templateUrl: './publication.component.html', 
  styleUrls: ['./publication.component.css'],   
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class PublicationComponent implements OnInit {
  public publicationData = {
    
    publicationList: [
      {
        content: `W. Zou<sup>*</sup>, T. Liu, <strong>X. Gao</strong>, Y. Shi (2023). 
          "Multiphase Flow Characteristics and Gas Loss in the Shear Layer on a Ventilated Supercavity Wall". 
          <em>Physics of Fluids</em>, <strong>35</strong>(4). 
          DOI: <a href="https://doi.org/10.1063/5.0141678" target="_blank">10.1063/5.0141678</a>.`
      }
    ],
    conferenceList: [
  {
    content: `W. Zou<sup>*</sup>, Z. Tang, H. Gan, <strong>X. Gao</strong>. 
      "Analysis of the tailed vortex tube flow of a ventilated supercavity under gravity effect". 
      <em>17th Asian Congress of Fluid Mechanics</em>, Beijing, China, Aug. 2023.`
  },
  {
    content: `W. Zou<sup>*</sup>, <strong>X. Gao</strong>, T. Liu, J. Liu. 
      "Gas flow law at the large scale gas-water interface of ventilated supercavities". 
      <em>Chinese Congress of Theoretical and Applied Mechanics</em>, Nov. 2022.`
  },
  {
    content: `W. Zou<sup>*</sup>, <strong>X. Gao</strong>, T. Liu, J. Liu. 
      "Phase distribution characteristics in the gas shear layer on a ventilated supercavity wall". 
      <em>12th National Conference on Fluid Mechanics</em>, Nov. 2022.`
  },
  {
    content: `T. Liu, W. Zou<sup>*</sup>, <strong>X. Gao</strong>, Y. Shi. 
      "Intelligent Optimization of the Overall Layout for Natural Supercavitating Vehicle". 
      <em>14th International Conference on Hydrodynamics</em>, Oct. 2022.`
  }
]

  };

  ngOnInit(): void {}
}
