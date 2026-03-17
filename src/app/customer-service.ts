import { Injectable } from '@angular/core';
import { Customer } from './register/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  static REPO_CUSTOMERS = "_CUSTOMERS";

  save(customer: Customer) {
    const storage = this.getStorage();

    storage.push(customer);
    localStorage.setItem(CustomerService.REPO_CUSTOMERS, JSON.stringify(storage));
    console.log("Saved succesfully. New Customer Data: " + customer);
  }

  getStorage() : Customer[] {
    const customerRepository = localStorage.getItem(CustomerService.REPO_CUSTOMERS);

    if(customerRepository) {
      const customers = JSON.parse(customerRepository);
      return customers;
    }

    const customers: Customer[] = [];
    localStorage.setItem(CustomerService.REPO_CUSTOMERS, JSON.stringify(customers));
    return customers;
  }
}