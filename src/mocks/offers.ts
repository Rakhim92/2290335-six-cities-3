import {TOffer} from '../types';
import {MY_CITIES} from '../const';

const offers: TOffer[] = [
  {
    id: 1,
    title: 'Beautiful &amp; luxurious apartment at great location',
    type: 'Apartment',
    price: 120,
    city: MY_CITIES[3],
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    isPremium: true,
    isFavorite: false,
    rating: 4.3,
    previewImage: 'img/apartment-01.jpg',
  },
  {
    id: 2,
    title: 'Wood and stone place',
    type: 'Room',
    price: 80,
    city: MY_CITIES[3],
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.2,
    previewImage: 'img/room.jpg',
  },
  {
    id: 3,
    title: 'Canal View Prinsengracht',
    type: 'Apartment',
    price: 132,
    city: MY_CITIES[0],
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.9,
    previewImage: 'img/apartment-02.jpg',
  },
  {
    id: 4,
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    price: 180,
    city: MY_CITIES[0],
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.8,
    previewImage: 'img/apartment-03.jpg',
  },
  {
    id: 5,
    title: 'llllalala',
    type: 'Apartment',
    price: 1000,
    city: MY_CITIES[1],
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.8,
    previewImage: 'img/apartment-03.jpg',
  },
  {
    id: 6,
    title: 'ggggggg',
    type: 'Apartment',
    price: 500,
    city: MY_CITIES[1],
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.8,
    previewImage: 'img/apartment-03.jpg',
  },
];

export {offers};
