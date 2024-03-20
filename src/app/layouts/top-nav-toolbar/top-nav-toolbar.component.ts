import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DxTreeViewTypes } from 'devextreme-angular/ui/tree-view';
import { navigation } from 'src/app/app-navigation';

@Component({
  selector: 'app-top-nav-toolbar',
  templateUrl: './top-nav-toolbar.component.html',
  styleUrls: ['./top-nav-toolbar.component.scss']
})
export class TopNavToolbarComponent {

  private _items!: Record <string, unknown>[];
  get items() {
    if (!this._items) {
      this._items = navigation.map((item) => {
        if(item.path && !(/^\//.test(item.path))){
          item.path = `/${item.path}`;
        }
         return { ...item }
        });
    }

    return this._items;
  }

  constructor(private router: Router) {}

  onItemClick(event: any) {
    const path = (event.itemData as any).path;
    this.router.navigate([path]);
  }
}
