import { faker } from '@faker-js/faker';
import data from './data.js';

export const typeDefs = `#graphql

  type Query {
    name: String
  }

  type UserData {
    id: ID!,
    name: String,
    address: String,
    email: String,
    phoneNumber: String
  }

  type Query {
    list(offset: Int, limit: Int): [UserData!]
  }
`;

export const resolvers = {
  Query: {
    name: () => faker.name.fullName(),

    list(parent, { offset, limit }) {
      const list = data.getUserData();
      return list.slice(offset, limit + offset);
    }
  }
};