import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'price_cards';
  isToggled: boolean = false;

  priceCards = [
    {
      name: 'Starter',
      prices: {
        monthly: '$55',
        yearly: '$550',
      },
      features: [
        '500 MAUS',
        '3 projects',
        'Unlimited guides',
        'Unlimited flows',
        'Unlimited branded themes',
        'Email support',
      ],
      buttonData:"Choose Plan"
    },
    {
      name: 'Pro',
      prices: {
        monthly: '$99',
        yearly: '$990',
      },
      rotations: {
        monthly: '/month',
        yearly: '/year',
      },
      features: [
        'All starter features, plus:',
        'Unlimited Projects',
        'Unlimited fully customizable themes',
        'A dedicated Customer Success Manager',
      ],
      buttonData:"Choose Plan"
    },
    {
      name: 'Enterprise',
      prices: {
        monthly: "Let's Talk!",
        yearly: "Let's Talk!",
      },
      features: [
        'All pro features',
        'Unlimited MAUs',
        'Dedicated Environment',
        'Dedicated Enterprise account administration',
        'Premium support and services',
      ],
      buttonData:"Contact us"
    }
  ];

  toggleBoxChange(event: any) {
    this.isToggled = event;
  }
}
