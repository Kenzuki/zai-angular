import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { Meal, MealType } from '../models/meal';

@Injectable({providedIn: 'root'})
export class DataService {
    private initData: Meal[] = [
      { 
        id: 1,
        name: 'Spaghetti z pesto i orzechami',
        price: 25,
        description: 'Makaron z orzechami włoskimi i pesto doskonale sprawdza się w roli szybkiego dania na południowy lub wieczorny posiłek.',
        imageUrl: 'https://ocdn.eu/pulscms-transforms/1/XYhktkpTURBXy9kYzQ2YzlkOTAxMWYxMWFjMTA5YTYxNDFjNGY3MDAxMC5qcGeSlQLNAxQAwsOVAgDNAvjCww',
        preparingDuration: 20,
        rating: 4.5,
        categories: [MealType.PASTA]
      },
      {
        id: 2,
        name: 'Leczo z cukinią i kiełbasą',
        price: 15,
        description: 'Leczo jest to wywodząca się z kuchni węgierskiej potrawa warzywna, jej głównymi składnikami są: cebula, papryka, pomidory oraz zioła.',
        imageUrl: 'https://ocdn.eu/pulscms-transforms/1/A8zktkqTURBXy9lMjU5YWEzNjI5YzNiNjI4NTU4NzRiOTk3NWE2MDVkNC5qcGVnk5UDADjNCuDNBh6TBc0DFM0BvJUH2TIvcHVsc2Ntcy9NREFfLzE0MGIxY2ZlN2YwYWM1MmVkYzAxMGQ3MDk3OGU4NGJlLnBuZwDCAA',
        preparingDuration: 25,
        rating: 3.8,
        categories: [MealType.LETCHO]
      }
    ];

    private data: Meal[] = this.initData.sort((o1, o2) => {
      return o1.name.localeCompare(o2.name);
    });

    private dataSub = new BehaviorSubject<Meal[]>(this.data);

    getData(): Observable<Meal[]> {
        return this.dataSub.asObservable();
    }

    deleteItem(item: Meal) {
        const index = this.data.findIndex(i => i.id === item.id);
        this.data.splice(index, 1);
        this.dataSub.next(this.data);
    }

    sortBy(sortingType: number) {
      if (sortingType === 0) {
        this.data.sort((o1, o2) => {
          return o1.name.localeCompare(o2.name);
        });
      } else if (sortingType === 1) {
        this.data.sort((o1, o2) => {
          return o1.price - o2.price;
        })
      } else if (sortingType === 2) {
        this.data.sort((o1, o2) => {
          return o1.preparingDuration - o2.preparingDuration;
        })
      }
    }

    filterPrice(fromPrice: number, toPrice: number, currentSorting: number) {
      this.data = this.initData.filter(item => {
        if (fromPrice > 0) {
          if (item.price < fromPrice) return false;
        }

        if (toPrice > 0) {
          if (item.price > toPrice) return false;
        }

        return true;
      });

      this.sortBy(currentSorting);
      this.dataSub.next(this.data);
    }
}