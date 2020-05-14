import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  dataCard={
    title:"Hello",
    button:"Next"
  }

  repeticiones=[{name:"hola"},{name:"hola"},{name:"hola"}]

  constructor() { }

  ngOnInit(): void {
  }

  msg(obj, event){
    console.log("[Container]"+obj, event);
  }

}
