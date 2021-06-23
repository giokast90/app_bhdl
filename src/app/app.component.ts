import { Component } from '@angular/core';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  inicioMenuList = [
    {
      title: 'Sucursales',
      url: '#',
      icon: 'location-outline'
    },
    {
      title: 'Contactanos',
      url: '#',
      icon: 'call-outline'
    },
    {
      title: 'Divisas',
      url: '#',
      icon: 'analytics-outline'
    }
  ];
  
  constructor(private authService: AuthService) { }

  ngAfterViewInit() {
    setTimeout(() => {
      if (document.querySelector('.menu-content').shadowRoot) {
        if (document.querySelector('.menu-content').shadowRoot.querySelector('ion-backdrop')) {
          let ionBackdrop = document.querySelector('.menu-content').shadowRoot.querySelector('ion-backdrop') as HTMLElement;
          ionBackdrop.setAttribute('style', 'background: var(--ion-color-primary-tint);');
          let ionMenuInner = document.querySelector('.menu-content').shadowRoot.querySelector('.menu-inner');
          ionMenuInner.setAttribute('style', 'border-radius: 0px 30px 30px 0px;');
        }
      }
    }, 2000);
  }
}
