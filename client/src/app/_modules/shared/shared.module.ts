import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';

@NgModule({
  imports: [CommonModule, BsDropdownModule.forRoot(), NgxGalleryModule],
  exports: [BsDropdownModule, NgxGalleryModule],
  declarations: [SharedComponent],
})
export class SharedModule {}
