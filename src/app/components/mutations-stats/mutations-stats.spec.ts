import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutationsStats } from './mutations-stats';

describe('MutationsStats', () => {
  let component: MutationsStats;
  let fixture: ComponentFixture<MutationsStats>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MutationsStats]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MutationsStats);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
