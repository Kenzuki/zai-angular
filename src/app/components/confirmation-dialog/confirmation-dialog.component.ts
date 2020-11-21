import { Component, Input } from '@angular/core';
import { ConfirmationDialogConfig } from './confirmation-dialog-config';

@Component({
    selector: 'app-confirmation-dialog',
    templateUrl: './confirmation-dialog.component.html',
    styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialog {
    @Input() config: ConfirmationDialogConfig;
}