import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-register',
  imports: [
    FormsModule, 
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {}
