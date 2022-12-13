import { faker } from '@faker-js/faker';

export const typeDefs = `#graphql
  type Query {
    name: String
  }
`;

export const resolvers = {
  Query: {
    name: () => faker.name.fullName(),
  },
};