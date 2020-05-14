import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './containers/payment/payment.component';
import { CardComponent } from './presentationals/card/card.component';



@NgModule({
  declarations: [PaymentComponent, CardComponent],
  imports: [
    CommonModule
  ]
})
export class DemoModule { }
