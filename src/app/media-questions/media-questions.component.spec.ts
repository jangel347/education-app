import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaQuestionsComponent } from './media-questions.component';

describe('MediaQuestionsComponent', () => {
  let component: MediaQuestionsComponent;
  let fixture: ComponentFixture<MediaQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaQuestionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MediaQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
