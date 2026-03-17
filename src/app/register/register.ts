import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Customer } from './customer';
import { CustomerService } from '../customer-service';

@Component({
  selector: 'app-register',
  imports: [
    FormsModule, 
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  customer: Customer = Customer.newCustomer();

  constructor(private service: CustomerService) {}

  save() {
    this.service.save(this.customer);
  }
}
