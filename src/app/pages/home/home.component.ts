import { Component, HostListener, ViewChild } from '@angular/core';
import { DxGalleryComponent } from 'devextreme-angular';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: [ './home.component.scss' ]
})

export class HomeComponent {
  @ViewChild(DxGalleryComponent) gallery: DxGalleryComponent;

  @HostListener('wheel', ['$event']) onMouseWheel(event: WheelEvent) {
    if (event.deltaY > 0) {
      this.gallery.instance.nextItem(true)
    } else {
      this.gallery.instance.prevItem(true);
    }
  }
}
