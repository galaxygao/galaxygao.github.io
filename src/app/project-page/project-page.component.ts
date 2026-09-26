import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';  // 
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';  
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';  


@NgModule({
  declarations: [
  
    // 其他组件
  ],
  imports: [
    BrowserModule,
    CommonModule,
    NgbModule, // ✅ Carousel 就靠它
  ],
  providers: [],

})
export class AppModule { }



@Component({
  selector: 'app-project-page',
  standalone: true,
  imports: [CommonModule, NgbCarouselModule, FormsModule],  //
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent {
  projectBlocks = [
    {
      title: 'Data-Driven Turbulence Research',
      images: ['assets/images/projects/data-driven-turbulence.png'],
      description: [
        'Built a resumable pipeline assembling full 1024³ JHTDB velocity fields from chunked requests, with checksum tiles, retry/backoff, and compressed Zarr output at 9.3 GB per frame.',
        'Ran slab-streamed FFT filtering and spectral derivatives at five scales on 16 workers, with a 92 GiB peak memory footprint.',
        'Derived subfilter-transfer fields over a six-regime partition and quantified forward transfer versus backscatter in each regime.',
        'Added quality gates for divergence, energy identity, and regime closure, plus a read-only Streamlit viewer.'
      ]
    },
    {
      title: 'Physics-Informed Transformer for 2D Navier-Stokes',
      images: ['assets/images/projects/physics-informed-transformer.gif'],
      description: [
        'Built a PDEBench data pipeline for 512 × 512 velocity and forcing fields, using 200 frames and 204,800 samples from 1,024 sensors.',
        'Reduced roughly 50 million space-time points to a stride-16 grid plus 4,096 random collocation points for training on one RTX 3090.',
        'Implemented a four-layer, four-head encoder-only Transformer with Fourier positional encoding and weighted data, momentum, continuity, and boundary-condition losses.',
        'Reached 0.03–0.06 relative L2 error at approximately 10 ms inference.'
      ]
    },
    {
      title: 'Computational Multiphase Flow',
      images: ['assets/images/projects/pof_1.png'],
      description: [
        'Ran gas-vapor-water multi-fluid CFD of ventilated supercavitating flows at 20 and 140 m/s, spanning gravity-dominated and gravity-negligible regimes.',
        'Established radial distribution laws of velocity, volume fraction, and superficial velocity for all three phases.',
        'Derived a shear-layer gas-loss model and validated it against water-whirling-arm and water-tunnel experiments; published in Physics of Fluids.'
        
      ]
    },
        {
      title: 'Cell Biomechanics Measurement',
      images: ['assets/images/projects/bio.png'],
      description: [
        'Built 2D Neo-Hookean finite-element models of AFM indentation in Abaqus/CAE with explicit actin, microtubules, and Aβ42 pores.',
        'Reproduced the measured 4–14% modulus decrease from simulated force-displacement curves.',
        'The resulting manuscript is under review at Proceedings of the National Academy of Sciences.'
      ]
    }
  ];
}

