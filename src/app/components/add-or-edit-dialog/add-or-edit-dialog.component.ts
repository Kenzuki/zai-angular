import { Component, Input } from '@angular/core';
import { DialogConfig } from './dialog-config';

@Component({
    selector: 'app-add-or-edit-dialog',
    templateUrl: './add-or-edit-dialog.component.html',
    styleUrls: ['./add-or-edit-dialog.component.scss']
})
export class AddOrEditDialogComponent {

    @Input() config: DialogConfig;
    @Input() editedItem: any = {};

    item: any;

    submitForm(form: HTMLFormElement): void {
        const isValid = form.reportValidity();

        if (isValid) {
            this.config.acceptCallback(this.editedItem);
        }
    }

    clearForm(): void {
        this.editedItem = {};
    }

}