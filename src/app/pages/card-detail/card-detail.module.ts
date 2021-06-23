import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardDetailPageRoutingModule } from './card-detail-routing.module';

import { CardDetailPage } from './card-detail.page';
import { ModalMessagePageModule } from '../modal-message/modal-message.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardDetailPageRoutingModule,
    ModalMessagePageModule,
  ],
  declarations: [CardDetailPage]
})
export class CardDetailPageModule {}
