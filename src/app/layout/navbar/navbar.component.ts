import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
    currentTime = '';
    $timer: Subscription;

    ngOnInit() {
        this.$timer = timer(0, 1000).subscribe(_ => {
            this.currentTime = new Date().toLocaleString();
        });
    }

    ngOnDestroy() {
        this.$timer.unsubscribe();
    }

}