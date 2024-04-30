import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { SectionData } from './models/section-data';
import { CommonModule } from '@angular/common';
import { SubSectionsComponent } from './sub-sections/sub-sections.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgbAccordionModule, CommonModule, SubSectionsComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor() {
    this.sections = [
      new SectionData("Introducción", "Esta es la introducción para las actividades 1 y 2.",
        [
          new SectionData("Actividad 1", "", [],'maps'),
          new SectionData("Actividad 2", "", [],'questions')
        ],'none'),
      new SectionData(
        "Explicación", "Esta es una explicación sencilla de los ejercicios anteriores.",
        [],'none'),
    ];
  }
  onInit() {
  }
  sections: SectionData[] | undefined;
}
