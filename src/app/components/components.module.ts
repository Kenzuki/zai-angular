import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { RatingDirective } from '../directives/rating.directive';
import { AddOrEditDialogComponent } from './add-or-edit-dialog/add-or-edit-dialog.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { DataListComponent } from './data-list/data-list.component';

@NgModule({
    declarations: [
        DataListComponent,
        AddOrEditDialogComponent,
        ConfirmationDialogComponent,
        RatingDirective
    ],
    imports: [
        CommonModule,
        NgMultiSelectDropDownModule,
        FormsModule
    ],
    exports: [
        DataListComponent,
        AddOrEditDialogComponent,
        ConfirmationDialogComponent
    ]
})
export class ComponentsModule {}