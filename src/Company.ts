import { faker } from '@faker-js/faker';
import { Mappable } from './Map';

export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'blue';

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `
      <div>
        <h3>${this.companyName}</h3>
        <h3>${this.catchPhrase}</h4>
        <div>
          lat: ${this.location.lat}
          lng: ${this.location.lng}
        </div>
      </div>
    `;
  }
}
