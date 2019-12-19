import { Component } from '@angular/core';

import { winners } from '../winners';
import { countries } from '../countries';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent {
  winners = winners;
  countries = countries;

  share() {
    window.alert('The country winners have been shared!');
  }
}