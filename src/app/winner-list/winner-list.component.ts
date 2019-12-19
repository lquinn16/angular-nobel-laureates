import { Component } from '@angular/core';

import { winners } from '../winners';

@Component({
  selector: 'app-winner-list',
  templateUrl: './winner-list.component.html',
  styleUrls: ['./winner-list.component.css']
})
export class WinnerListComponent {
  winners = winners;

  share() {
    window.alert('The winners have been shared!');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/