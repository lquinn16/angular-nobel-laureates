import { Component } from '@angular/core';

import { winners } from '../winners';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {
  winners = winners;

  share() {
    window.alert('The category winners have been shared!');
  }
}