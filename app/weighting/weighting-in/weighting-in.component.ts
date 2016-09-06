import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WeightingCar, WeightingService } from '../weighting.service';

@Component({
  selector: 'weighting-in',
  template: `

      <div class="page-header" style="margin: 0px 0 18px; ">
        <h4>รายการรถเข้า <span class="badge">{{weightInLenth}}</span></h4>
      </div>

      <!--search bar-->
      <div class="form-group  has-feedback">
        <input type="text" class="form-control " placeholder="ค้นหาทะเบียนรถ">
        <span class="glyphicon glyphicon-search form-control-feedback"></span>
      </div>

        <scrollbar class=" list-weight-in " scrollbarHieght="400px">
        <div class="list-group">
          <a class="list-group-item" style="cursor: pointer;" 
      
            *ngFor="let weightIn of listWeightIn" 
            (click)="onSelect(weightIn)">
            <span class="badge">เหล็ก</span>
            <p class="list-group-item-heading">ทะเบียน: {{weightIn.carId}}</p>
          </a>

        </div>
      </scrollbar>

    `
})

export class WeightingInComponent implements OnInit {
  private listWeightIn: Object[];
  private weightInLenth: number;

  // @Input('refresh') isRefresh: boolean;
  @Output() select: EventEmitter<Object> = new EventEmitter(true);

  constructor(private _weightingService: WeightingService) { }

  ngOnInit() {
    this.getListWeightIn();
  }

  onSelect(_weightingIn: WeightingCar) {
    this.select.emit(_weightingIn);
  }

  getListWeightIn() {
    this._weightingService.getListWiegtingIn()
      .then(listWeightIn => this.listWeightIn = listWeightIn);

    this._weightingService.getLength()
      .then(length => this.weightInLenth = length);
  }
}