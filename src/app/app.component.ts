import { Component } from '@angular/core';
import { Meal } from './models/meal';
import { ConfirmationDialogConfig } from './components/confirmation-dialog/confirmation-dialog-config';
import { DataService } from './services/data.service';
import { DialogConfig } from './components/add-or-edit-dialog/dialog-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'zai-angular';

  confirmationDialogConfig: ConfirmationDialogConfig;
  addOrEditDialogConfig: DialogConfig;

  constructor(private dataService: DataService) {}

  prepareDeleteConfirmationDialog(item: Meal): void {
    this.confirmationDialogConfig = {
      title: 'Usuwanie dania',
      message: 'Czy na pewno chcesz usunąć danie?',
      acceptCallback: () => { this.dataService.deleteItem(item); }
    };
  }

  prepareEditDialog(): void {
    this.addOrEditDialogConfig = {
      title: 'Edytowanie dania',
      fields: [
        {
          label: 'Nazwa',
          field: 'name',
          type: 'text'
        },
        {
          label: 'Opis',
          field: 'description',
          type: 'text'
        },
        {
          label: 'Cena',
          field: 'price',
          type: 'number'
        },
        {
          label: 'Czas przygotowywania',
          field: 'preparingDuration',
          type: 'number'
        },
        {
          label: 'Ocena',
          field: 'rating',
          type: 'number'
        },
        {
          label: 'Kategoria',
          field: 'category',
          type: 'text'
        }
      ],
      acceptCallback: (item) => {
        const mealItem = item as Meal;
        console.log(mealItem);
      },
      acceptLabel: 'Zapisz',
      rejectLabel: 'Anuluj'
    };
  }

  prepareAddDialog(): void {
    this.addOrEditDialogConfig = {
      title: 'Dodawanie dania',
      fields: [],
      acceptCallback: (item) => {
        const mealItem = item as Meal;
      },
      acceptLabel: 'Dodaj',
      rejectLabel: 'Anuluj'
    };
  }

  onEdit(item: Meal): void {
    this.prepareEditDialog();
  }
}
