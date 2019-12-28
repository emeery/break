// modulo para importar los componentes Angular Material
import { NgModule } from '@angular/core';
import {
  MatInputModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatDialogModule,
  MatProgressBarModule,
  MatSnackBarModule,
  MatDividerModule,
  MatListModule,
  MatGridListModule,
  MatFormFieldModule,
  MatSelectModule,
  MatCheckboxModule,
  MatTableModule,
  MatSlideToggleModule,
  MatSortModule
} from '@angular/material';

@NgModule({
  exports: [
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatSnackBarModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatGridListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTableModule,
    MatSlideToggleModule,
    MatSortModule, //
  ]
})
export class AngularMaterialModule {}

