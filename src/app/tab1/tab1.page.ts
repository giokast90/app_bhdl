import { Component } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { CardService } from '../services/card/card.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  sliderConfig = {
    slidesPerView: 1.6,
    spaceBetween: 10,
    centeredSlides: true
  };

  cards: any[];

  transactions: any[];

  constructor(private cardService: CardService,
    private navCtrl: NavController) {
    this.loadCards();
  }

  private loadCards() {
    this.cardService.getCards()
      .subscribe(
        res => {
          this.cards = res;
          if (this.cards.length > 0) {
            this.loadTransactions(this.cards[0].productNumber);
          }
        });
  }

  private loadTransactions(productNumber: string) {
    this.cardService.getTransactions(productNumber)
      .subscribe(
        res => {
          this.transactions = res;
        });
  }

  detail(card: any) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "card": card
      }
    };
    this.navCtrl.navigateForward('card-detail', navigationExtras);
  }

  getNumberCard(numberCard: string): string {
    const regex = /.{1,12}/;
    const subst = '*';

    return numberCard.replace(regex, (m) => subst.repeat(m.length - 6))
  }
}
