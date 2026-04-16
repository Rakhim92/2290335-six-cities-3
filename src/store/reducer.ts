import {createReducer} from '@reduxjs/toolkit';
import {changeCurrentCity, changeOffers} from './action';
import {offers} from '../mocks/offers';
import {MY_CITIES} from '../const';

const initialState = {
  currentCity: MY_CITIES[3],
  cityOffers: offers.filter((offer) => offer.city.name === MY_CITIES[3].name),
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCurrentCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(changeOffers, (state, action) => {
      state.cityOffers = action.payload;
    });
});

export {reducer};
