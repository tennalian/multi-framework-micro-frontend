import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

const registry = {
  mfe3: () => import('mfe3/web-components')
}

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BcComponent implements AfterViewInit {

  @ViewChild('vc', {read: ElementRef})
  vc: ElementRef;

  ngAfterViewInit(): void {
    const importFn = registry['mfe3'];
    importFn()
        .then(_ => console.debug(`element ${'mfe3-element'} loaded!`))
        .catch(err => console.error(`error loading ${'mfe3-element'}:`, err));

    const element = document.createElement('mfe3-element');
    if (this.vc?.nativeElement) {
      this.vc.nativeElement.appendChild(element);
    }
  }
}
