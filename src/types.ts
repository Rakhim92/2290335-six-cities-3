export type TOffer = {
  id: number;
  name: string;
  url: string;
  price: number;
  isPremium: boolean;
  isFavorite: boolean;
  type: string;
  rating: number;
}

export type TOfferProps = {
  offers: TOffer[];
}

export type TOfferComplex = {
  offer: TOffer;
  handleHover: (offer?:TOffer) => void;
}

export type TScreenProps = {
  numberOfPlaces: number;
  offers: TOffer[];
}

