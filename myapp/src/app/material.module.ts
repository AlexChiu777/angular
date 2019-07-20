import { NgModule } from '@angular/core';

//nav
import { MatSidenavModule, MatToolbarModule, MatListModule, MatIconModule, MatMenuModule } from '@angular/material';

//content
import { MatCardModule } from '@angular/material';


@NgModule({
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
  ],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule
  ]
})
export class MaterialModule { }
