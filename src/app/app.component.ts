import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { SectionData } from './models/section-data';
import { CommonModule } from '@angular/common';
import { SubSectionsComponent } from './sub-sections/sub-sections.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgbAccordionModule,CommonModule,SubSectionsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor() {
    this.sections = [
      new SectionData("Introducción", "Esta es la introducción para las actividades 1 y 2.",
        [
          new SectionData("Actividad 1", "", []),
          new SectionData("Actividad 2", "", [])
        ]),
      new SectionData(
        "Explicación", "Esta es una explicación sencilla de los ejercicios anteriores.",
        [])
    ];
  }
  onInit() {
  }
  sections: SectionData[] | undefined;
}
