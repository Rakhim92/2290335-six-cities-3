import FavoriteCard from './components/favorite-card';
import {TOfferProps} from '../../types';
import {CITIES_MOCK} from '../../const';

const FavoritePage = ({offers}: TOfferProps): JSX.Element => (
  <main className="page__main page__main--favorites">
    <div className="page__favorites-container container">
      <section className="favorites">
        <h1 className="favorites__title">Saved listing</h1>
        <ul className="favorites__list">
          {CITIES_MOCK.map((favoriteCity) => (
            <li className="favorites__locations-items" key={favoriteCity.name}>
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <a className="locations__item-link" href="#">
                    <span>{favoriteCity.name}</span>
                  </a>
                </div>
              </div>
              <div className="favorites__places">
                {offers.map((offer) => (
                  <FavoriteCard {...offer} key={offer.id}/>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  </main>
);

export default FavoritePage;
