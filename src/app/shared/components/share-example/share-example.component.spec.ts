import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareExampleComponent } from './share-example.component';

describe('ShareExampleComponent', () => {
  let component: ShareExampleComponent;
  let fixture: ComponentFixture<ShareExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
