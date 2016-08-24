import { Component, OnInit } from '@angular/core';
import {
    REACTIVE_FORM_DIRECTIVES,
    FormBuilder,
    FormGroup,
    FormControl,
    Validators
} from '@angular/forms';

@Component({
    selector: 'customers',
    template: `
        <h1>Customer Page</h1>
        <form novalidate [formGroup]="myForm">
                    <div class="form-group">
              <label for="">Name</label>
              <input type="text" class="form-control" formControlName="name">
              <small *ngIf="myForm.controls.name.valid || (myForm.controls.name.pristine && !submitted)" >
                    Name is required (minimum 5 characters).
                  </small>
              <pre class="margin-20">{{ myForm.controls.name.errors | json }}</pre>
        </div>

            <div>Validation</div>
            <br>
              <input type="text" name="street"  minlength="3">
            <br>  
              <input type="text" name="city"  maxlength="10">
            <br>  
              <input type="text" name="zip"  pattern="[A-Za-z]{5}">
            <button class="btn btn-primary" type="submit">Submit</button>

            <select name="product" id="product" class="form-control" required 
                name="product" formControlName="product" >
                <option value="" disabled selected>Select your option</option>
                <option *ngFor="let p of products" [value]="p">{{p}}</option>
            </select>
               <pre>myForm value: <br>{{myForm.value | json}}</pre>
        </form>
    `,

})
export class CustomersComponent implements OnInit {
    myForm: FormGroup;
    products = ['เหล็ก', 'กระดาษ', 'กระป๋อง', 'สังกะสี'];

    model: Object = { product: null };

    constructor(private fb: FormBuilder) {

    }
    ngOnInit() {
        this.myForm = this.fb.group({
            name: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
            street: ['', Validators.minLength(3)],
            city: ['', Validators.maxLength(10)],
            zip: ['', Validators.pattern('[A-Za-z]{5}')],
            product:['',Validators.required]

            // address: this.fb.group({
            //     street: ['', <any>Validators.required],
            //     postcode: ['8000']
            // })

        },
            []
        );
    }
}

