import {useEffect, useState} from 'react';
import PlaceCardsList from '../../components/place-card/place-cards-list';
import {TOffer} from '../../types';
import {useAppSelector} from '../../hooks';
import { api } from '../../store';

const FavoritePage = (): JSX.Element => {
  const [, setActiveOffer] = useState<TOffer>();
  const [favoriteOffers, setFavoriteOffers] = useState<TOffer[]>([]);

  useEffect(() => {
    (async () => {
      const {data} = await api.get<TOffer>('favorite');
      setFavoriteOffers(data);
    })();
  }, []);
  console.log(favoriteOffers);

  const handleHover = (offer?: TOffer) => {
    setActiveOffer(offer);
  };

  const offers = useAppSelector((state) => state.offers);
  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {favoriteOffers && favoriteOffers.map((favoriteCity) => (
              <li className="favorites__locations-items" key={favoriteCity.name}>
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>{favoriteCity.name}</span>
                    </a>
                  </div>
                </div>
                <PlaceCardsList
                  offers={offers}
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
