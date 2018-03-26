import { NgModule } from "@angular/core";

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [ MatToolbarModule, MatIconModule, MatTooltipModule, MatButtonModule ],
  exports: [ MatToolbarModule, MatIconModule, MatTooltipModule, MatButtonModule ],
})
export class CustomMaterialModule{

}