import gql from "graphql-tag";

export const GET_COUNTRIES = gql`
  query Countries {
    countries {
      name
      code
      currency
    }
  }
`;

export const GET_COUNTRY = gql`
  query Country($code: ID!) {
    country(code: $code) {
      name
      code
      currency
      native
      phone
      capital
      emoji
      languages {
        name
        code
      }
    }
  }
`;
