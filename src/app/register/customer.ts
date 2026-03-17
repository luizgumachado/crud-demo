import { v4 as uuid } from 'uuid';

export class Customer {
    id?: string;
    name?: string;
    cpf?: string;
    birthDate?: string;
    email?: string;

    static newCustomer() {
        const customer = new Customer();
        customer.id = uuid();

        return customer;
    }
}