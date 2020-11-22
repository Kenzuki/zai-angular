import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Meal } from '../../models/meal';
import { DataService, SortingType } from '../../services/data.service';

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
  sortingType: SortingType = 'name';

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.$dataSub = this.dataService.meals.subscribe(data => {
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

  onSortingChanged(sortingType: SortingType): void {
    this.sortingType = sortingType;
    this.dataService.sortBy(sortingType);
  }

  onFilterClicked(fromEl, toEl): void {
    let fromPrice = fromEl.value;
    let toPrice = toEl.value;

    if (fromPrice == null || fromPrice == '') fromPrice = 0;
    if (toPrice == null || toPrice == '') toPrice = 0;

    this.dataService.filterPrice(fromPrice, toPrice);
  }
}
