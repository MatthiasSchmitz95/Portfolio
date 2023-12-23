import { Component, Renderer2 } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  sectionIds: string[] = ['about', 'portfolio', 'skills', 'contact'];
  observer: IntersectionObserver;

  constructor(private renderer: Renderer2, private myService: MyServiceService) {
    this.observer = new IntersectionObserver(this.handleIntersection.bind(this), {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    });
  }

  ngOnInit() {
    this.sectionIds.forEach((sectionId) => {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        this.observer.observe(sectionElement);
      }
    });
  }

  public scrollTo(elementId: string): void {
    this.myService.scrollTo(elementId);
    this.closeMenu();
  }

  openBurgerMenu() {
    if (this.myService.clicked) {
      this.openMenu();
    } else {
      this.closeMenu();
    }
  }

  addUnderline(spanId) {
    const spanElements = ['about', 'skills', 'portfolio', 'contact'];
    spanElements.forEach((element) => {
      const span = document.getElementById('span-' + element);
      if (span) {
        this.renderer.setStyle(span, 'display', 'none');
      }
    });
    const selectedSpan = document.getElementById('span-' + spanId);
    if (selectedSpan) {
      this.renderer.setStyle(selectedSpan, 'display', 'block');
    }
  }

  openMenu() {
    let menu = document.getElementById('hidden-menu');
    if (menu) {
      menu.classList.add('menu-position-clicked');
    }
    this.myService.clicked = false;
    this.disableScroll();
    this.myService.changeImg();
  }

  closeMenu() {
    let menu = document.getElementById('hidden-menu');
    if (menu) {
      menu.classList.remove('menu-position-clicked');
    }
    this.myService.clicked = true;
    this.enableScroll();
    this.myService.changeImg();
  }

  disableScroll() {
    this.renderer.setStyle(document.body, 'overflow', 'hidden');
  }

  enableScroll() {
    this.renderer.setStyle(document.body, 'overflowY', 'auto');
  }

  handleIntersection(entries: IntersectionObserverEntry[], observer: IntersectionObserver): void {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.id;
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
          sectionElement.style.display = 'block';
          const spanId = sectionId.replace('-', '');
          this.addUnderline(spanId);
        }
      }
    });
  }
}
