import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowGithubComponent } from './follow-github.component';

describe('FollowGithubComponent', () => {
  let component: FollowGithubComponent;
  let fixture: ComponentFixture<FollowGithubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowGithubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowGithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
