import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CardService } from 'src/app/services/card/card.service';
import { ModalMessagePage } from '../modal-message/modal-message.page';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.page.html',
  styleUrls: ['./card-detail.page.scss'],
})
export class CardDetailPage implements OnInit {

  card: any;
  type: string;

  show = false;  

  constructor(private route: ActivatedRoute,
    private cardService: CardService,
    private modalCtrl: ModalController) {
    this.route.queryParams.subscribe(params => {
      this.card = params["card"];
    });
  }

  ngOnInit() {
    this.type = 'RD';
  }

  async pay() {
    this.show = true;
    const modal = await this.modalCtrl.create({
      component: ModalMessagePage,
      cssClass: 'modal-message'
    });
    this.cardService.payCard({"productNumber": this.card.productNumber, "amount": 0})
      .subscribe(res => {
        setTimeout (async () => {
          this.show = false;
          await modal.present()
        }, 3000 );
      })
  }

}
