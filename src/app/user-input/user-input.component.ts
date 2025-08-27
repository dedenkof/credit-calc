// import { Component, output } from '@angular/core';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { InvestmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
	// calculate = output();
	@Output() calculate = new EventEmitter<InvestmentInput>();

	enteredInitialInvestment = '0';
	enteredDuration = '10';
	enteredExpectedReturn = '5';
	enteredAnnualInvestment = '0';
	
	
	onSubmit() {
		this.calculate.emit({
			initialInvestment: +this.enteredInitialInvestment,
			duration: +this.enteredDuration,
			expectedReturn: +this.enteredExpectedReturn,
			annualInvestment: +this.enteredAnnualInvestment
	});
	}
}
