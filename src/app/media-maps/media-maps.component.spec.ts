import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaMapsComponent } from './media-maps.component';

describe('MediaMapsComponent', () => {
  let component: MediaMapsComponent;
  let fixture: ComponentFixture<MediaMapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaMapsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MediaMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
