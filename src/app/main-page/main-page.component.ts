import { Component, OnInit } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';
import { UpdateEvent } from '../budget-item-list/budget-item-list.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  budgetItems: BudgetItem[] = [];
  totalBudget: number = 0;


  constructor() { }

  ngOnInit(): void {
  }

  addItem(newItem: BudgetItem){
    this.budgetItems.push(newItem);
    this.totalBudget += newItem.amount || 0;
  }

  deleteItem(item: BudgetItem){
    this.budgetItems.splice(this.budgetItems.indexOf(item), 1);
    this.totalBudget -= item.amount || 0;
  }
  
  updateItem(updateEvent: UpdateEvent){
    //replace item with submitted item from the form
    this.budgetItems[this.budgetItems.indexOf(updateEvent.old)] = updateEvent.new;
    this.totalBudget -= updateEvent.old.amount || 0;
    this.totalBudget += updateEvent.new.amount || 0;
  }

}
