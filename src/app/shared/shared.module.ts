import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import { TextLabelComponent } from './components/text-label/text-label.component';



@NgModule({
  declarations: [
    NavbarComponent,
    TextLabelComponent
  ],
  exports: [
    NavbarComponent,
    TextLabelComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    RouterLink
  ]
})
export class SharedModule { }
