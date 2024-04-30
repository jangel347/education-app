import { Component, Input } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { SectionData } from '../models/section-data';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sub-sections',
  standalone: true,
  imports: [NgbAccordionModule,CommonModule, RouterLink],
  templateUrl: './sub-sections.component.html',
  styleUrl: './sub-sections.component.css'
})
export class SubSectionsComponent {
  oninit = () => {
    console.log(this.sections);
  }
  @Input() sections!: SectionData[];
}
