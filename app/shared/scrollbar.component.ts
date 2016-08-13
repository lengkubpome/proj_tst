import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'scrollbar',
    template: `
        <div class="my-scrollbar">
            <div class="my-container" 
            [ngStyle]="{ 
                right: '0px'
                }">
                <ng-content></ng-content>
            </div>
        </div>
    `,
    styles: [`
         .my-scrollbar {
            height: 400px;
            width: 100%;
            /*border: 1px solid green;*/
            overflow: hidden;
            position: relative;
        }
        .my-scrollbar > .my-container {
            position: absolute;
            top: 0px;
            bottom: 0px;
            left: 0px;
            right: 0px;
            /*right: -15px;*/
            /*border: 1px solid blue;*/
            overflow: auto;
        }
    `]
})
export class ScrollbarComponent implements OnInit {

    ngOnInit() {

    }
}






