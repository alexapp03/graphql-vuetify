export interface Country {
  name?: string;
  code?: string;
  currency?: string;
}

export interface CountriesQuery {
  countries: Country[];
}
