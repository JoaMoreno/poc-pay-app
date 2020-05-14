export interface User {
    username: string;
    debts:[{
        name: string;
        description:{
            referenceNumber:number;
            mail:string;
            billingMonth: string;
        }
    }],
    creditCards:[{
        name: string;
        number: number;
        headline: string;
        expiration: string;
    }
    ]
}
