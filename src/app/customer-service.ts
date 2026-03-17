import { Injectable } from '@angular/core';
import { Customer } from './register/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  save(customer: Customer) {
    console.log("Customer Data: " + customer);
  }
}
