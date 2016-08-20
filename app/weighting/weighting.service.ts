import { Injectable } from '@angular/core';

// export interface WeightingCar {
//     id: number;
//     carId: string;
//     product: string;
// }

export class WeightingCar {
    constructor(
        public id: number,
        public carId: string,
        public product: string,
        public weightIn: number,
        public weightOut: number,
        public _dateIn: Date,
        public _dateOut: Date,
        public customerId?: number

    ) { }
}

let ListWeightingCar: WeightingCar[] = [
    { id: 1, carId: '9555', product: 'เหล็ก', _dateIn: null, _dateOut: null, customerId: 0, weightIn: 8300, weightOut: 3020 },
    { id: 2, carId: '9135', product: 'กระดาษสี', _dateIn: null, _dateOut: null, customerId: 0, weightIn: 9000, weightOut: 3020 },
    { id: 3, carId: '1818', product: 'กระดาษกล่อง', _dateIn: null, _dateOut: null, customerId: 0, weightIn: 7090, weightOut: 3020 },
    { id: 4, carId: '81-4920', product: 'สังกะสี', _dateIn: null, _dateOut: null, customerId: 0, weightIn: 6300, weightOut: 3020 }
    // new WeightingCar(1, '9555', 'เหล็ก'),
    // new WeightingCar(2, '9135', 'กระดาษกล่อง'),
    // new WeightingCar(3, '81-4920', 'กระดาษกล่อง'),
    //     new WeightingCar(1, '9555', 'เหล็ก'),
    // new WeightingCar(2, '9135', 'กระดาษกล่อง'),
    // new WeightingCar(3, '81-4920', 'กระดาษกล่อง'),
    //     new WeightingCar(1, '9555', 'เหล็ก'),
    // new WeightingCar(2, '9135', 'กระดาษกล่อง'),
    // new WeightingCar(3, '81-4920', 'กระดาษกล่อง')
];

@Injectable()
export class WeightingService {

    getListWiegtingIn() {
        return Promise.resolve(ListWeightingCar); //ค่อยจัดการเรื่องจากส่งค่าเฉพาะรายการที่เป็น WeightIn อย่างเดียว 
        // return ListWeightingCar;
    }

    getLength() {
        return Promise.resolve(ListWeightingCar.length);
    }

    setNewWeightInCar(newCar: any): void {
        ListWeightingCar.push(new WeightingCar(1, 'New Car', 'สินค้า', 9999, 9999, null, null, null));
    }

    getWeightInCar(id: number) {
        // return listWeightingCarPromise
        //     .then(listWeightingCar => listWeightingCar
        //         .find(weightingCar => weightingCar.id ===+id));

    }



}
