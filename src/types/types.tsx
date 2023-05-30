export interface NavigationSliceType{
    isOpen: boolean
}

export interface SearchSliceType{
    term: string
    photos: { id: string; urls: { thumb: string, full: string }, description: string, alt_description: string }[];
}

export interface Photo {
    id: string
    urls: {
      thumb: string
      full: string
    }
    description: string
    alt_description: string
  }

  export interface ModalSliceType {
    open: boolean
  }
