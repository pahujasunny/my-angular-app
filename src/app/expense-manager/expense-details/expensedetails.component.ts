import { ExpenseModal } from '../../classes/ExpenseModal';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-expensedetails',
    templateUrl: './exensedetails.component.html'
  })

  export class ExpenseDetailsComponent {

    @Input()
    expense: ExpenseModal;

  }
