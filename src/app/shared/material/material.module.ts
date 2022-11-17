import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  exports: [
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule

  ]
})
export class MaterialModule { }
