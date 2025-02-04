export interface Language {
  name: string;
  code: string;
}

export interface Country {
  name?: string;
  code?: string;
  currency?: string;
  native?: string;
  phone?: string;
  capital?: string;
  emoji?: string;
  languages?: Language[];
}

export interface CountriesQuery {
  countries: Country[];
}

export interface CountryQuery {
  country: Country;
}

export interface CountryQueryVariables {
  code: string;
}
