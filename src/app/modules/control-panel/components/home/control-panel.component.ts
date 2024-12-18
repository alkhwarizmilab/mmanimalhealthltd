import {Component, OnInit} from '@angular/core';
import {MenuItem, MenuItemCommandEvent} from "primeng/api";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrl: './control-panel.component.scss'
})
export class ControlPanelComponent implements OnInit {
  items: MenuItem[] | undefined;

  constructor(private router: Router, private activatedRoute: ActivatedRoute,) {
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Add Product', icon: 'pi pi-plus', command: () => {

        }
      },
      {
        label: 'Product List', icon: 'pi pi-list',
        command: () => {
          this.router.navigate(["product-list"], {relativeTo: this.activatedRoute});
        }
      },
      {
        label: 'Settings', icon: 'pi pi-cog',
        command: () => {
          this.router.navigate(["settings"], {relativeTo: this.activatedRoute});
        }
      }
    ];
  }
}
