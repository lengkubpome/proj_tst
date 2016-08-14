import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'scrollbar',
    template: `
        <div class="my-scrollbar"
        [ngStyle]="{ 'height': isHieght }">
            <div class="my-container" 
            [ngStyle]="{ 'height': isHieght }">

                <ng-content></ng-content>
            </div>
        </div>
    `,
    styles: [`
         .my-scrollbar {

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
    @Input('scrollbarHieght') isHieght :string;

    ngOnInit() {

    }
}






