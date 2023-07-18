import { Component,ElementRef,HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollComponentComponent } from './scroll-component/scroll-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ScrollComponentComponent]
})
export class AppComponent {
  title = 'my-blog-app';
  
  
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event) {
    this.showScrollToTop = window.pageYOffset > 500;
  }

  showScrollToTop: boolean = false;
  constructor(private router: Router,private elementRef: ElementRef) {}

  isHomePage(): boolean {
    return this.router.url === '/';
  }
  
  redirectToSearchPage() {
    this.router.navigate(['/search']);
  }
}
