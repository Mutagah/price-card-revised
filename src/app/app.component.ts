import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'price_cards';

  priceCards = [
    {
      name: 'Starter',
      price: '$55',
      features: [
        '500 MAUS',
        '3 projects',
        'Unlimited guides',
        'Unlimited flows',
        'Unlimited branded themes',
        'Email support',
      ],
    },
    {
      name: 'Pro',
      price: '$99',
      rotation:'/month',
      features: [
        'All starter features, plus:',
        'Unlimited Projects',
        'Unlimited fully customizable themes',
        'A dedicated Customer Success Manager',
      ],
    },
    {
      name: 'Enterprise',
      price: "Let's Talk!",
      features: [
        'All pro features',
        'Unlimited MAUs',
        'Dedicated Environment',
        'Dedicated Enterprise account administration',
        'Premium support and services',
      ],
    },
  ];
}
