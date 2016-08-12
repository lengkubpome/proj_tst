import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'my-app',
    template: `
    <app-navbar>
        <li routerLinkActive="active"><a [routerLink]="['/weighting']" >ชั่งน้ำหนัก</a></li>
        <li routerLinkActive="active"><a [routerLink]="['/customers']" >จัดการลูกค้า</a></li>
        <li routerLinkActive="active"><a [routerLink]="['/heroes']" >Heroes</a></li>
    </app-navbar>
     <router-outlet></router-outlet>

    `
})
export class AppComponent implements OnInit {
    // a = ['moe', 'larry', 'curly', 'larry'];
    // b = [30, 40, 50, 30];
    // c = _.object(this.a, this.b);
    // oc = _.values(this.c);

    ngOnInit() {
        // console.log(_.keys(this.c));

    }
}

