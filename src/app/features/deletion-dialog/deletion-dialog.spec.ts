import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletionDialog } from './deletion-dialog';

describe('DeletionDialog', () => {
  let component: DeletionDialog;
  let fixture: ComponentFixture<DeletionDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeletionDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletionDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
