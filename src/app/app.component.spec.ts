/// <reference types="jasmine" />

import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {AppComponent} from './app.component';
import {appConfig} from './app.config';
import {environment} from '../environments/environment';
import {TITLE} from './app.const';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: appConfig.providers
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize sidenav state as closed', () => {
    expect(component.isSideNavOpen()).toBeFalse();
  });

  it('should initialize app info values from environment', () => {
    expect(component.apiURL).toBe(environment.apiUrl);
    expect(component.env).toBe(environment.env);
  });

  it('should render title', () => {
    const titleElement = fixture.nativeElement.querySelector('mat-drawer h1') as HTMLHeadingElement;

    expect(component.title).toBe(TITLE);
    expect(titleElement.textContent?.trim()).toBe(TITLE);
  });
});