import { Component, OnInit, OnDestroy ,Output,EventEmitter} from '@angular/core';

import { Subscription }       from 'rxjs/Subscription';


@Component({
    selector: 'weighting-in-form',
    templateUrl: 'app/weighting/weighting-in/weighting-in-form.component.html',
    styleUrls: ['app/weighting/weighting-in/weighting-in-form.component.css']
})
export class WeightingInFormComponent implements OnInit, OnDestroy {
    
    @Output() save = new EventEmitter();
    @Output() cancel = new EventEmitter();
    
    ngOnInit() {

    }
    ngOnDestroy() {

    }

    onSave(){
        this.save.emit({});
        console.log("Clicked Save");
    }
    onCancel(){
        this.cancel.emit({});
        console.log("Clicked Cancel");
        
    }
}

