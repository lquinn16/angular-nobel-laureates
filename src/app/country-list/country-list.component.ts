import { Component } from '@angular/core';

import { winners } from '../winners';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent {
  winners = winners;

  share() {
    window.alert('The country winners have been shared!');
  }
}