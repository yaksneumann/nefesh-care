import { Directive, ElementRef, HostListener, Renderer2, NgZone } from '@angular/core';

@Directive({
  selector: '[appParallaxBg]',
  standalone: true
})
export class ParallaxBgDirective {
  private lastScrollTop = 0;
  private ticking = false;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private ngZone: NgZone
  ) {}

  @HostListener('window:scroll')
  onWindowScroll() {
    this.lastScrollTop = window.pageYOffset || document.documentElement.scrollTop || 0;
    
    if (!this.ticking) {
      this.ticking = true;
      
      // Use requestAnimationFrame for smooth animations
      this.ngZone.runOutsideAngular(() => {
        window.requestAnimationFrame(() => {
          this.updateParallax();
          this.ticking = false;
        });
      });
    }
  }
  
  private updateParallax() {
    const scrollPosition = this.lastScrollTop;
    
    // Responsive speed - slower on mobile
    const isMobile = window.innerWidth < 768;
    const speedDivisor = isMobile ? 12 : 8;
    
    // Calculate parallax values
    const yPos = -(scrollPosition / speedDivisor);
    const xPos = -(scrollPosition / (speedDivisor * 2));
    
    // Apply the transform
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'transform',
      `translate3d(${xPos}px, ${yPos}px, 0) scale(1.1)`
    );
  }
  
  // Check reduced motion preference when component initializes
  ngOnInit() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.renderer.setStyle(this.elementRef.nativeElement, 'transform', 'none');
    }
  }
}
