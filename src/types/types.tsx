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
  user: {
    username: string;
  };
  description: string;
  alt_description: string;
}

export interface RelatedCollectionResultType {
  id: string;
  title: string;
  preview_photos: RelatedPicType[];
}

export interface RelatedPicType {
  id: string;
  urls: {
    small: string;
  };
}

export interface SinglePhotoType {
  id: string;
  views: string;
  likes: string;
  downloads: string;
  urls: {
    regular: string;
  };
  user: {
    username: string;
  };
  tags: TagType[];
  related_collections: {
    results: RelatedCollectionResultType[];
  };
}

export interface SearchSliceType {
  term: string;
  photos: Photo[];
}

export interface ModalSliceType {
  open: boolean;
}

export interface FavoriteSliceType {
  favoritePhotos: SinglePhotoType[];
}
export interface TrendingSliceType {
  trendyPhotos: Photo[];
}

export interface TagType {
  title: string;
}

export interface RelatedPicType {
  urls: {
    small: string;
  };
}
