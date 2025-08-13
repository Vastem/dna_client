import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutationsList } from './mutations-list';

describe('MutationsList', () => {
  let component: MutationsList;
  let fixture: ComponentFixture<MutationsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MutationsList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MutationsList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
