import { Injectable } from '@angular/core';

export interface WeightingCar {
    id: number;
    carId: string;
    product: string;
}

// export class WeightingCar {
//     constructor(
//         public id: number,
//         public carId: string,
//         public product: string
//     ) { }
// }

let ListWeightingCar: WeightingCar[] = [
    { id: 1, carId: '9555', product: 'เหล็ก' },
    { id: 2, carId: '9135', product: 'กระดาษสี' },
    { id: 3, carId: '1818', product: 'กระดาษกล่อง' },
    { id: 4, carId: '81-4920', product: 'สังกะสี' }
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

    getLength(){
        return Promise.resolve(ListWeightingCar.length);
    }

    getWeightInCar(id: number) {
        // return listWeightingCarPromise
        //     .then(listWeightingCar => listWeightingCar
        //         .find(weightingCar => weightingCar.id ===+id));

    }



}
