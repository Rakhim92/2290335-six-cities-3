import {useEffect, useState} from 'react';
import PlaceCardsList from '../../components/place-card/place-cards-list';
import {TOffer} from '../../types';
import {useAppSelector} from '../../hooks';
// import { api } from '../../store';
import { MY_CITIES } from '../../const';

const FavoritePage = (): JSX.Element => {
  const favorites = useAppSelector((state) => state.favorites);
  const [, setActiveOffer] = useState<TOffer>();
  // const [favoriteOffers, setFavoriteOffers] = useState<TOffer[]>([]);
  console.log(favorites);


  const handleHover = (offer?: TOffer) => {
    setActiveOffer(offer);
  };


  // console.log(favoriteOffers);
  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {favorites && MY_CITIES.map((city) => (
              <li className="favorites__locations-items" key={city.name}>
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>{city.name}</span>
                    </a>
                  </div>
                </div>
                <PlaceCardsList
                  offers={favorites}
                  type={'favorites'}
                  handleHover = {handleHover}
                />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
};

export default FavoritePage;
