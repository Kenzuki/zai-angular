import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
    currentTime = '';
    $timer: Subscription;

    @Output() addMeal = new EventEmitter<void>();

    ngOnInit() {
        this.$timer = timer(0, 1000).subscribe(_ => {
            this.currentTime = new Date().toLocaleString();
        });
    }

    ngOnDestroy() {
        this.$timer.unsubscribe();
    }

    onAddMeal() {
        this.addMeal.emit();
    }

}