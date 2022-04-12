import {Document} from 'mongoose'

export interface Product extends Document{

    readonly name: string;
    readonly description: string;
    readonly price: number;
    readonly imageUrl: string;
    readonly created_date: Date;
}