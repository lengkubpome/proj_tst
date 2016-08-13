import { Injectable } from '@angular/core';

export class WeightingCar {
    constructor(
        public id: number,
        public carId: string,
        public product: string
    ) { }
}

let ListWeightingCar: WeightingCar[] = [
    new WeightingCar(1, '9555', 'เหล็ก'),
    new WeightingCar(2, '9135', 'กระดาษกล่อง'),
    new WeightingCar(3, '81-4920', 'กระดาษกล่อง'),
        new WeightingCar(1, '9555', 'เหล็ก'),
    new WeightingCar(2, '9135', 'กระดาษกล่อง'),
    new WeightingCar(3, '81-4920', 'กระดาษกล่อง'),
        new WeightingCar(1, '9555', 'เหล็ก'),
    new WeightingCar(2, '9135', 'กระดาษกล่อง'),
    new WeightingCar(3, '81-4920', 'กระดาษกล่อง')
];

@Injectable()
export class WeightingService {

    getListWiegtingIn() { 
        return Promise.resolve(ListWeightingCar); //ค่อยจัดการเรื่องจากส่งค่าเฉพาะรายการที่เป็น WeightIn อย่างเดียว 
    }

    getWeightInCar(id:number) {
        // return listWeightingCarPromise
        //     .then(listWeightingCar => listWeightingCar
        //         .find(weightingCar => weightingCar.id ===+id));
    
    }



}
