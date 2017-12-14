import {Component} from '@angular/core';
import {style, animate, transition, state, trigger} from '@angular/animations';

@Component({
    selector: "app-root",
    template: `
        <h2>Simple Animation Demo</h2>
        <input type="button" (click)="boxMove()" value="Move Box">
        <div [@divstate]="state_value" class="animatediv"></div>
    `,
    styles: [`
        .animatediv {
            width: 100px;
            height: 100px;
            background-color: green;
            display: block;
            position: absolute;
            left: 0px;
        }
    `],
    animations: [
        trigger('divstate', [state('oovleft', style({marginLeft: '-200px'})),
            state('inview', style({marginLeft: '0px'})),
            transition('oovleft => inview', animate('300ms')),
            transition('inview => oovleft', animate('300ms'))])
    ]
})
export class AppComponent {
    state_value: string = "oovleft";

    boxMove(){
        if(this.state_value === "oovleft") this.state_value = "inview";
        else this.state_value = "oovleft";
    }
}