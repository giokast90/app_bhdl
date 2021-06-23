import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalMessagePageRoutingModule } from './modal-message-routing.module';

import { ModalMessagePage } from './modal-message.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalMessagePageRoutingModule
  ],
  declarations: [ModalMessagePage]
})
export class ModalMessagePageModule {}
