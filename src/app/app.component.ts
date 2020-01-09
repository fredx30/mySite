import {AfterViewInit, Component, Directive, ElementRef, HostListener} from '@angular/core';

@Directive({selector: 'button[counting]'})
class CountClicks {
  numberOfClicks = 0;

  @HostListener('click', ['$event.target'])
  onClick(btn) {
    console.log('button', btn, 'number of clicks:', this.numberOfClicks++);
  }
}

@Component({
  selector: 'app-root',
  // templateUrl:'./app.component.html',
  template: `
    <app-navbar></app-navbar>
    <app-about></app-about>
  `,
  // styleUrls: ['./app.component.css']
  styles: [`
  `],
})
export class AppComponent implements AfterViewInit {
  title = 'Test application g2';

  constructor(private elementRef: ElementRef) {
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#263238';
    this.elementRef.nativeElement.ownerDocument.body.style.color = '#B0BEC5';
  }

}
