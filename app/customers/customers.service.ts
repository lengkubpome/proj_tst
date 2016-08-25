import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs/Rx';

export interface Customer {
    id: number;
    name: string;

}


let CUSTOMERS: Customer[] = [
    { id: 1, name: 'Leng' },
    { id: 2, name: 'Ying' },
    { id: 3, name: 'Ho' }
];

let customerPromise = Promise.resolve(CUSTOMERS);

@Injectable()
export class CustomersService {
    getCustomers() { return customerPromise; }

    getCustomer(id: number | string) {
        return customerPromise
            .then(customers => customers.find(customer => customer.id === +id));

    }


}
