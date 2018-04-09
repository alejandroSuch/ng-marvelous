import { NgModule } from "@angular/core";

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  imports: [ MatToolbarModule, MatIconModule, MatTooltipModule, MatButtonModule, MatCardModule, MatProgressSpinnerModule ],
  exports: [ MatToolbarModule, MatIconModule, MatTooltipModule, MatButtonModule, MatCardModule, MatProgressSpinnerModule ],
})
export class CustomMaterialModule{

}