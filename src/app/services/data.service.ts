import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Meal, MealType } from '../models/meal';

@Injectable({providedIn: 'root'})
export class DataService {
    private data: Meal[] = [
      { 
        id: 1,
        name: 'Spaghetti z pesto i orzechami',
        price: 25,
        description: 'Makaron z orzechami włoskimi i pesto doskonale sprawdza się w roli szybkiego dania na południowy lub wieczorny posiłek.',
        imageUrl: 'https://ocdn.eu/pulscms-transforms/1/XYhktkpTURBXy9kYzQ2YzlkOTAxMWYxMWFjMTA5YTYxNDFjNGY3MDAxMC5qcGeSlQLNAxQAwsOVAgDNAvjCww',
        preparingDuration: 20,
        rating: 4.5,
        categories: [MealType.PASTA, MealType.DINNER]
      },
      {
        id: 2,
        name: 'Leczo z cukinią i kiełbasą',
        price: 15,
        description: 'Leczo jest to wywodząca się z kuchni węgierskiej potrawa warzywna, jej głównymi składnikami są: cebula, papryka, pomidory oraz zioła.',
        imageUrl: 'https://ocdn.eu/pulscms-transforms/1/A8zktkqTURBXy9lMjU5YWEzNjI5YzNiNjI4NTU4NzRiOTk3NWE2MDVkNC5qcGVnk5UDADjNCuDNBh6TBc0DFM0BvJUH2TIvcHVsc2Ntcy9NREFfLzE0MGIxY2ZlN2YwYWM1MmVkYzAxMGQ3MDk3OGU4NGJlLnBuZwDCAA',
        preparingDuration: 25,
        rating: 3.8,
        categories: [MealType.LETCHO, MealType.DINNER]
      },
      {
        id: 3,
        name: 'Placki ziemniaczane',
        price: 12,
        description: 'Nie ma chyba osoby, która nie lubiłaby placków ziemniaczanych. Najlepiej, żeby były chrupiące, kruche i nie za tłuste.',
        imageUrl: '//ocdn.eu/pulscms-transforms/1/oIaktkpTURBXy8zMTNiZGU3OGEzYTA2N2Y0OWI5MzQ3ODg3OTM1NTY5Yy5qcGeSlQMAzILNEMDNCWyTBc0Bhszc',
        preparingDuration: 30,
        rating: 5,
        categories: [MealType.CAKE, MealType.DINNER]
      },
      {
        id: 4,
        name: 'Naleśniki z pieczarkami i żółtym serem',
        price: 22,
        description: 'Najczęściej naleśniki zjada się w Polsce w wersji słodkiej - z białym serem i rodzynkami, albo ze świeżymi owocami. Coraz więcej osób pragnie jednak spróbować czegoś nowego i poszukuje dobrych, prostych przepisów na naleśniki w wersji słonej - na przykład z pieczarkami, żółtym serem i cebulką. To pyszne danie, które nadaje się zarówno na obiad, jak i na wczesną kolację. Pozwala się najeść do syta i z pewnością posmakuje każdemu!',
        imageUrl: 'https://ocdn.eu/pulscms-transforms/1/k5WktkpTURBXy8zZDRiMmM2NTQwMTQ3ZDQ3ZmM1YWJiMzhjMWFkOWJlNy5qcGeTlQMAJ80E5s0CwZMFzQMUzQG8lQfZMi9wdWxzY21zL01EQV8vMTQwYjFjZmU3ZjBhYzUyZWRjMDEwZDcwOTc4ZTg0YmUucG5nAMIA',
        preparingDuration: 30,
        rating: 4,
        categories: [MealType.PANCAKE, MealType.DINNER]
      },
      {
        id: 5,
        name: 'Smoothie z jarmużu',
        price: 8,
        description: 'Smoothie z jarmużu to zdrowy koktajl, który dostarczy do Twojego organizmu niezbędnych składników odżywczych. Jarmuż sam w sobie nie jest zbyt smaczny, lecz w połączeniu z owocami smakuje wyśmienicie. Warto dodać go do shake’a m.in. ze względu na wysoką zawartość wapnia, magnezu, potasu, żelaza, fosforu, a także witaminy C oraz K.',
        imageUrl: 'https://ocdn.eu/pulscms-transforms/1/AIRktkpTURBXy8wZDk2MGE5Njk3ZjgyMzBhNDhkODM0NWNlMjg4MTNhYS5qcGeTlQMAJ80E5s0CwZMFzQMUzQG8lQfZMi9wdWxzY21zL01EQV8vMTQwYjFjZmU3ZjBhYzUyZWRjMDEwZDcwOTc4ZTg0YmUucG5nAMIA',
        preparingDuration: 10,
        rating: 2.5,
        categories: [MealType.SMOOTHIE]
      }
    ];

    private _meals = new BehaviorSubject<Meal[]>([...this.data.sort((o1, o2) => { return o1.name.localeCompare(o2.name); })]);
    readonly meals = this._meals.asObservable();

    private sortingType: SortingType = 'name';

    deleteItem(item: Meal) {
      const index = this.data.findIndex(i => i.id === item.id);
      this.data.splice(index, 1);
      this._meals.next([...this.data]);
    }

    addItem(item: Meal) {
      let maxId = 0;

      if (this.data.length > 0) {
        for (const meal of this.data) {
          if (meal.id > maxId) maxId = meal.id;
        }
      }

      maxId++;
      item.id = maxId;
      this.data.push(item);
      this.sortBy(this.sortingType);
    }

    editItem(item: Meal) {
      const index = this.data.findIndex(i => i.id === item.id);
      this.data[index] = item;
      this.sortBy(this.sortingType);
    }

    sortBy(sortingType: SortingType) {
      this.sortingType = sortingType;

      if (sortingType === 'name') {
        this.data.sort((o1, o2) => {
          return o1.name.localeCompare(o2.name);
        });
      } else if (sortingType === 'price') {
        this.data.sort((o1, o2) => {
          return o1.price - o2.price;
        })
      } else if (sortingType === 'preparingDuration') {
        this.data.sort((o1, o2) => {
          return o1.preparingDuration - o2.preparingDuration;
        })
      } else if (sortingType === 'rating') {
        this.data.sort((o1, o2) => {
          return o2.rating - o1.rating;
        })
      }
      this._meals.next([...this.data]);
    }

    filterPrice(fromPrice: number, toPrice: number) {
      const filteredData = this.data.filter(item => {
        if (fromPrice > 0) {
          if (item.price < fromPrice) return false;
        }

        if (toPrice > 0) {
          if (item.price > toPrice) return false;
        }

        return true;
      });

      this._meals.next([...filteredData]);
    }
}

export type SortingType = 'name' | 'price' | 'preparingDuration' | 'rating';