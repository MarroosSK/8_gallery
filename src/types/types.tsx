export interface NavigationSliceType {
  isOpen: boolean;
}

export interface Photo {
  id: string;
  urls: {
    thumb: string;
    full: string;
    regular: string;
  };
  description: string;
  alt_description: string;
}
export interface SearchSliceType {
  term: string;
  photos: Photo[];
}

export interface ModalSliceType {
  open: boolean;
}
