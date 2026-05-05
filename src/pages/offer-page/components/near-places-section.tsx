import {TOffer} from '../../../types';
import PlaceCardsList from '../../../components/place-card/place-cards-list';
import {useAppSelector} from '../../../hooks';
import { useMemo } from 'react';

type TNearPlacesSection = {
  handleHover: (offer?:TOffer) => void;
}

const NearPlacesSection = ({handleHover}: TNearPlacesSection) => {
  const otherOffers = useAppSelector((state) => state.otherOffers);
  const limitedOffers = useMemo(() => otherOffers.slice(0, 3), [otherOffers]);

  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <PlaceCardsList
          handleHover = {handleHover}
          type = {'offer'}
          offers = {limitedOffers}
        />
      </section>
    </div>
  );
};

export default NearPlacesSection;
