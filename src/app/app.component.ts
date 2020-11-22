import { Component, ViewChild } from '@angular/core';
import { Meal } from './models/meal';
import { ConfirmationDialogConfig } from './components/confirmation-dialog/confirmation-dialog-config';
import { DataService } from './services/data.service';
import { DialogConfig, DialogField } from './components/add-or-edit-dialog/dialog-config';
import { AddOrEditDialogComponent } from './components/add-or-edit-dialog/add-or-edit-dialog.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('addOrEditDialog') addOrEditDialog: AddOrEditDialogComponent;
  @ViewChild('confirmationDialog') confirmationDialog: ConfirmationDialogComponent;

  confirmationDialogConfig: ConfirmationDialogConfig;

  constructor(private dataService: DataService) {}

  createAddOrEditDialogFields(): DialogField[] {
    return [
      {
        label: 'Nazwa',
        field: 'name',
        type: 'text'
      },
      {
        label: 'Opis',
        field: 'description',
        type: 'textarea'
      },
      {
        label: 'URL do zdjęcia',
        field: 'imageUrl',
        type: 'text'
      },
      {
        label: 'Cena',
        field: 'price',
        type: 'number',
        step: 0.01,
        min: 0.01
      },
      {
        label: 'Czas przygotowywania',
        field: 'preparingDuration',
        type: 'number',
        step: 1,
        min: 1
      },
      {
        label: 'Ocena',
        field: 'rating',
        type: 'number',
        step: 0.1,
        max: 5,
        min: 0
      },
      {
        label: 'Kategoria',
        field: 'categories',
        type: 'multiselect',
        options: [
          {item_id: 1, item_text: 'Makarony'},
          {item_id: 2, item_text: 'Leczo'},
          {item_id: 3, item_text: 'Placek'},
          {item_id: 4, item_text: 'Naleśnik'},
          {item_id: 5, item_text: 'Smoothie'},
          {item_id: 6, item_text: 'Danie z kaszą gryczaną'},
          {item_id: 7, item_text: 'Danie z cukinii'},
          {item_id: 8, item_text: 'Na obiad'},
        ],
        multiselectSettings: {
          placeholder: 'Wybierz kategorie',
          singleSelection: false,
          selectAllText: 'Wybierz wszystkie',
          unSelectAllText: 'Odznacz wszystkie',
          allowSearchFilter: true,
          searchPlaceholderText: 'Wyszukaj',
          noDataAvailablePlaceholderText: 'Brak zdefiniowanych kategorii',
          idField: 'item_id',
          textField: 'item_text'
        }
      }
    ];
  }

  prepareDeleteConfirmationDialog(): ConfirmationDialogConfig {
    return {
      title: 'Usuwanie dania',
      message: 'Czy na pewno chcesz usunąć danie?',
      acceptCallback: (item) => { this.dataService.deleteItem(item); }
    };
  }

  prepareEditDialog(): DialogConfig {
    return {
      title: 'Edytowanie dania',
      fields: this.createAddOrEditDialogFields(),
      acceptCallback: (item) => {
        const mealItem = item as Meal;
        this.dataService.editItem(mealItem);
      },
      acceptLabel: 'Zapisz',
      rejectLabel: 'Anuluj'
    };
  }

  prepareAddDialog(): DialogConfig {
    return {
      title: 'Dodawanie dania',
      fields: this.createAddOrEditDialogFields(),
      acceptCallback: (item) => {
        const mealItem = item as Meal;
        this.dataService.addItem(mealItem);
      },
      acceptLabel: 'Dodaj',
      rejectLabel: 'Anuluj'
    };
  }

  onEdit(item: Meal): void {
    const dialogConfig = this.prepareEditDialog();
    this.addOrEditDialog.showDialog(dialogConfig, item);
  }

  onDelete(item: Meal): void {
    const dialogConfig = this.prepareDeleteConfirmationDialog();
    this.confirmationDialog.showDialog(dialogConfig, item);
  }

  onAdd(): void {
    const dialogConfig = this.prepareAddDialog();
    this.addOrEditDialog.showDialog(dialogConfig);
  }
}
