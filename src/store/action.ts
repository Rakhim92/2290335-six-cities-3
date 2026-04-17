import {createAction} from '@reduxjs/toolkit';
// import {MY_CITIES} from '../const';

export const changeCurrentCity = createAction<string>('city/changeCurrentCity');
export const changeOffers = createAction('city/changeOffers');
