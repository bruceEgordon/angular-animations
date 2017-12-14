import {Component} from '@angular/core';
import {style, animate, transition, state, trigger} from '@angular/animations';

@Component({
    selector: "app-root",
    template: `
        <h2>Button Animation Demo</h2>
        <input type="button" [@buttontrigger]="btn_state" (click)="toggle()" value="Click Me!">
    `,
    animations: [
        trigger('buttontrigger', [state('active', style({color: 'green'})),
            state('inactive', style({color: 'red'})),
            transition('active => inactive', animate('300ms')),
            transition('inactive => active', animate('300ms'))])
    ]
})
export class AppComponent {
    btn_state: string = "active";

    toggle(){
        this.btn_state = (this.btn_state === "active")? "inactive":"active";
    }
}