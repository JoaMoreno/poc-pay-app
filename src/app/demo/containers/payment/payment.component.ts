import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  @Output() emitStatus = new EventEmitter();

  user: User = {
    username: "Victor Robles",
    creditCards:[{
      name:"Naranja",
      headline: "Victor Robles",
      number:123123123,
      expiration:"12/12/2020"
    },
    {
      name:"Visa",
      headline: "Victor Robles",
      number:321321321,
      expiration:"10/12/2020"
    },
    ],
    debts:[
      {
        name: "Netflix",
        description: {
          referenceNumber: 3541512321,
          billingMonth: "13/06/2020",
          mail:"victorroblex@udemy.com"
        },
        amount: 764
      },
      {
        name: "Spotify",
        description: {
          referenceNumber: 4152634152,
          billingMonth: "13/06/2020",
          mail:"victorroblex@udemy.com"
        },
        amount: 345
      },
      {
        name: "MercadoLibre",
        description: {
          referenceNumber: 4758695241,
          billingMonth: "13/06/2020",
          mail:"victorroblex@udemy.com"
        },
        amount: 985
      }
    ]
  }

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

  emitSelect2(event){
    this.emitStatus.emit(event)
  }

}
