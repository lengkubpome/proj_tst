import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Component({
    moduleId: module.id,
    selector: 'weight-realtime',
    template: `
         <label class="control-label pull-right" for="weight">น้ำหนักเข้า</label>
                    <div class="form-group has-error ">
                        <input type="text" 
                            class="form-control input-lg" 
                                style="text-align: right;font-size: 35px; font-weight: bold;"  
                                id="weight" 
                                name="weight"
                                disabled
                                required               

                            >
                        <!--<span class="glyphicon glyphicon-ok form-control-feedback" style="top:25px"></span>-->
                    </div>
    `
})
export class WeightRealTimeComponent implements OnInit {
    private weight: number;

    constructor() { }

    ngOnInit() {
        // let timer = Observable.timer(2000, 1000);
        // timer.subscribe(() => {
        //     this.weight = _.random(99999);
        // });
    }

}