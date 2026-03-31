export type TOffer = {
  id: number;
  title: string;
  type: string;
  price: number;
  city: {
    name: string;
    location: {
    latitude: number;
    longitude: number;
    zoom: number;
    };
  };
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
}

export type TOfferProps = {
  offers: TOffer[];
}

export type TOfferComplex = {
  offer: TOffer;
  handleHover: (offer?:TOffer) => void;
}


