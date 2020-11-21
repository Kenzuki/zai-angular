import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { Meal } from '../models/meal';

@Directive({
    selector: '[rating]'
})
export class RatingDirective implements OnInit {
    @Input('rating') item: Meal;

    private el: ElementRef;

    constructor(el: ElementRef) {
        this.el = el;   
    }

    ngOnInit() {
        this.generateRating();
    }

    private generateRating() {
        let ratingInt = Math.floor(this.item.rating);
        if (ratingInt > 5) ratingInt = 5;

        const decimalPlace = this.item.rating % 1;
    
        for (let i = 0; i < ratingInt; i++) {
            const icon = document.createElement('i');
            icon.classList.add('fas', 'fa-star');
            this.el.nativeElement.append(icon);
        }

        if (ratingInt === 5) return;
        else {
            const icon = document.createElement('i');

            if (decimalPlace <= 0.2) {
                icon.classList.add('far', 'fa-star')
                this.el.nativeElement.append(icon);
            } else if (decimalPlace < 0.8) {
                icon.classList.add('fas', 'fa-star-half-alt')
                this.el.nativeElement.append(icon);
            } else {
                icon.classList.add('fas', 'fa-star')
                this.el.nativeElement.append(icon);
            }

            ratingInt++;
        }

        if (ratingInt < 5) {
            const maxRatingDiff = 5 - ratingInt;

            for (let i = 0; i < maxRatingDiff; i++) {
                const icon = document.createElement('i');
                icon.classList.add('far', 'fa-star');
                this.el.nativeElement.append(icon);
            }
        }
    }
}