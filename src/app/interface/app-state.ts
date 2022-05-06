import { DataState } from '../enum/data-status.enum';

export interface AppData <T> {
    dataState: DataState;
    appData?:T;
    error?:string;

    
}