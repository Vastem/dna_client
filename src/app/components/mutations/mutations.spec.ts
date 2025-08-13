import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mutations } from './mutations';

describe('Mutations', () => {
  let component: Mutations;
  let fixture: ComponentFixture<Mutations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mutations]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mutations);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
