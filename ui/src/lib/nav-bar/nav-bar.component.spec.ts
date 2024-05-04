import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideRouter } from '@angular/router';
import { NavBarComponent } from './nav-bar.component';

describe('NavBar', () => {
  let fixture: ComponentFixture<NavBarComponent>;
  let component: NavBarComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavBarComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the navItems', () => {
    component.navItems = [
      { label: 'Home', path: '/' },
      { label: 'About', path: '/about' },
    ];
    fixture.detectChanges();
    const navItems = fixture.nativeElement.querySelectorAll('a');
    expect(navItems.length).toEqual(2);
  });

  it('should render the navItems label', () => {
    component.navItems = [
      { label: 'Home', path: '/' },
      { label: 'About', path: '/about' },
    ];
    fixture.detectChanges();
    const navItems = fixture.nativeElement.querySelectorAll('a');
    expect(navItems[0].textContent).toEqual('Home');
    expect(navItems[1].textContent).toEqual('About');
  });
});
