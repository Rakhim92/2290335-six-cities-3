import {MY_CITIES} from '../../../const';
import {useAppDispatch} from '../../../hooks';
import {changeCurrentCity} from '../../../store/action';
import {City} from '../../../types';

const CitiesList = () => {
  const dispatch = useAppDispatch();
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {MY_CITIES.map((city) => (
          <li className="locations__item" key={city.name} onClick={() => dispatch(changeCurrentCity(city))}>
            <a className="locations__item-link tabs__item" href="#">
              <span>{city.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CitiesList;

