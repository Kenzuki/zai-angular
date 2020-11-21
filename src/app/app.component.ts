import { Component } from '@angular/core';
import { Meal } from './models/meal';
import { ConfirmationDialogConfig } from './components/confirmation-dialog/confirmation-dialog-config';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'zai-angular';

  confirmationDialogConfig: ConfirmationDialogConfig;

  constructor(private dataService: DataService) {}

  prepareDeleteConfirmationDialog(item: Meal) {
    this.confirmationDialogConfig = {
      title: 'Usuwanie dania',
      message: 'Czy na pewno chcesz usunąć danie?',
      acceptCallback: () => { this.dataService.deleteItem(item); }
    }
  }

  prepareEditDialog() {
    
  }
}
