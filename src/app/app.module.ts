import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { WinnerListComponent } from "./winner-list/winner-list.component";
import { CategoryListComponent } from "./category-list/category-list.component";
import { CountryListComponent } from "./country-list/country-list.component";

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([{ path: "", component: WinnerListComponent }, { path: 'category', component: CategoryListComponent }, { path: 'country', component: CountryListComponent }])
  ],
  declarations: [AppComponent, TopBarComponent, WinnerListComponent, CategoryListComponent, CountryListComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
