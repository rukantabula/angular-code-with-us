import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],
  template: `<h1>{{name}}</h1>
                <button (click)="addressClick()">{{addressButtonName}}</button>
                <div [hidden]="isAdressVisible">
                <fieldset [style.border]=0><label>Street: {{street}}</label></fieldset>
                <fieldset [style.border]=0><label>city: {{city}}</label></fieldset>
                <fieldset  [style.border]=0><label>region: {{region}}</label></fieldset>
                </div>
             `
})
export class AppComponent {
  name = 'Alex Smith';
  image = 'favicon.ico';
  color = 'red';
  street = "Møllehatten";
  city = 'Arhus';
  region = 'midtjylland';
  isAdressVisible = false;
  addressButtonName = 'hide adress';
  dispProp = 'block';

  clicked(){
    this.color = this.color == 'red' ? 'blue' : 'red';
  }

  colorChange(color: string) {
    this.color = color;
  }

  addressClick() {
    this.addressButtonName = this.isAdressVisible ? 'show address' : 'hide address';
    this.dispProp = this.isAdressVisible  ? 'none' : 'block';
    this.isAdressVisible = !this.isAdressVisible;
  }
}
