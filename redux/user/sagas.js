import { call, put } from 'redux-saga/effects';
import {
    getBreedsService
} from './services';

export function* getBreeds() {
    try{
        const breedsList = yield call( getBreedsService );
    }catch( e ) {

    }
}