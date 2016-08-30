import { FormControl } from '@angular/forms';

export class WeightingInFormValidators {

    static cannotContainSpace(formControl: FormControl) {
        if (formControl.value.indexOf(' ') >= 0) {
            return { cannotContainSpace: true };
        }
        return null;
    }


    formValidator(val: FormControl): any {
        console.log('formValidator ' + val.value);
        
        if (val.value.match(/.*[^0-9].*/)) {
            console.log('match');

            return { inval: true };
        }
    }

}