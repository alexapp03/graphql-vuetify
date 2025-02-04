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
