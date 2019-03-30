import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoGithubComponent } from './repo-github.component';

describe('RepoGithubComponent', () => {
  let component: RepoGithubComponent;
  let fixture: ComponentFixture<RepoGithubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepoGithubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoGithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
