import { Injectable } from '@angular/core';

@Injectable()
export class WeightingService {

    getWeightIn(): Object[] {
        return [
            { id: '9555', product: 'เหล็ก' },
            { id: '9135', product: 'กระดาษกล่อง' },
            { id: '81-4920', product: 'กระดาษกล่อง' },
            { id: '9555', product: 'เหล็ก' },
            { id: '9135', product: 'กระดาษกล่อง' },
            { id: '81-4920', product: 'กระดาษกล่อง' },
            { id: '9555', product: 'เหล็ก' },
            { id: '81-4920', product: 'กระดาษกล่อง' }
        ];
    }

    constructor() { }

}
