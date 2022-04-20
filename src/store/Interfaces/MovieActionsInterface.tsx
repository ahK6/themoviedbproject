export interface MovieInterface {
  data: {}[];
  page: number;
  lastPage: number;
  errors: string;
  status: string;
}

export interface RelatedMoviesInterface {
  relatedData: {}[];
  page: number;
  lastPage: number;
  errors: string;
  status: string;
}

export interface SearchMovieInterface {
  searchData: {}[];
  page: number;
  lastPage: number;
  errors: string;
  status: string;
}
