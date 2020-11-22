import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Meal, MealType } from '../../models/meal';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss']
})
export class DataListComponent implements OnInit, OnDestroy {

  @Output() editClicked = new EventEmitter<Meal>();
  @Output() deleteClicked = new EventEmitter<Meal>();

  $dataSub: Subscription;
  data: Meal[] = [];
  sortingType = 0;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.$dataSub = this.dataService.getData().subscribe(data => {
      this.data = data;
    });
  }

  ngOnDestroy(): void {
    this.$dataSub.unsubscribe();
  }

  onEdit(item: Meal): void {
    this.editClicked.emit(item);
  }

  onDelete(item: Meal): void {
    this.deleteClicked.emit(item);
  }

  onSortingChanged(sortingType: number): void {
    switch (sortingType) {
      case 0:
        this.sortingType = sortingType;
        this.dataService.sortBy(sortingType);
        break;
      case 1:
        this.sortingType = sortingType;
        this.dataService.sortBy(sortingType);
        break;
      case 2:
        this.sortingType = sortingType;
        this.dataService.sortBy(sortingType);
        break;
    }
  }

  onFilterClicked(fromEl, toEl): void {
    let fromPrice = fromEl.value;
    let toPrice = toEl.value;

    if (fromPrice == null || fromPrice == '') fromPrice = 0;
    if (toPrice == null || toPrice == '') toPrice = 0;

    this.dataService.filterPrice(fromPrice, toPrice, this.sortingType);
  }
}
