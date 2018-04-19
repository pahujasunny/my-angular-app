import { Component, OnInit, Inject } from '@angular/core';
// OnInit, Inject are imported for calling HTTP service
import { HeroModel } from '../classes/HeroModal';
import { ExpenseModal } from '../classes/ExpenseModal';
import { ExpenseManagerService } from '../services/ExpenseManagerService';

// Expense Details child component
import { ExpenseDetailsComponent } from './expense-details/expensedetails.component';

@Component({
    selector: 'app-expensemanager',
    templateUrl: './expensemanager.component.html',
    styleUrls: ['./expensemanager.component.css'],
    providers: [ExpenseManagerService]
    // Service added under component provider is private service
})

export class ExpenseManagerComponent implements OnInit {

    // Declaration Code - Expense Form | START
    // Default Values:to be used by form for prefilling
    categories = ['Grocery', 'Travel', 'Food', 'Entertainment', 'Vehicle', 'Other'];
    expense = new ExpenseModal(99, this.categories[0], 0, '');
    submitted = false;
    // Declaration Code - Expense Form | END

    // Declaration Code - Expense Listing | START
    expensedataList: Array<ExpenseModal>;
    selectedExpense: ExpenseModal;
    // Declaration Code - Expense Listing | END

    // Methods - Expense Listing | START
    constructor(private expenseManagerServicePointer: ExpenseManagerService) { }
    ngOnInit(): void {
        this.expenseManagerServicePointer.getExpensesFromserver()
        .subscribe((expenses) => this.expensedataList = expenses);
    }

    onRowSelectShowExpenseDetails(expense): void {
        console.log(expense);
        this.selectedExpense = expense;
      }
    // Code to handle expense listing | END


    // Methods - Expense Form | START
    goBack(): void {
        this.submitted = false;
      }

    onSubmit() { this.submitted = true; }

    onNewExpenseAlert(): void {
        alert('your data in form is lost.');
    }

    onFinalSave(expense): void {
        // this.submitted = false;
        // Code here to save expense record
        this.expenseManagerServicePointer.addExpense(expense)
        .subscribe((expenseSaved) => {
            console.log('Following expense was saved which we have recieved back from add service :');
            console.log(expenseSaved);
            console.log('Current expense list is :');
            console.log(this.expensedataList);
            // Add saved item to local expense data list to show it on UI.
            this.expensedataList.push(expenseSaved);
            this.goBack();
        }  );
        // this.expensedataList.push(expense);
        // console.log(expense);
        // this.goBack();
    }

    // Methods - Expense Form | END

}
