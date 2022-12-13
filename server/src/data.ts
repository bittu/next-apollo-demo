import { faker } from "@faker-js/faker";

type User = {
  id: string,
  name: string;
  address: string;
  email: string;
  phoneNumber: string;
}

function createRandomUser(): User {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const name = faker.name.fullName({ firstName, lastName })
  const email = faker.internet.email(firstName, lastName);

  return {
    id: faker.datatype.uuid(),
    name: name,
    address: faker.address.streetAddress(true),
    email,
    phoneNumber: faker.phone.number()
  }
}

let usersList: User[] | undefined;

export default {
  getUserData: () => {
    if (!usersList) {
      usersList = Array.from({ length: 2000 }, createRandomUser);
    }
    return usersList;
  }
}