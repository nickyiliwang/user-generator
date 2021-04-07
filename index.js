// const faker = require("faker");
const faker = require("faker/locale/en_CA");
const { v4 } = require("uuid");
const fs = require("fs");

const userData = require("./defaultUserData");

const allUsers = [];

function randomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i <= 100; i++) {
  let user = {
    username: faker.internet.userName(),
    userId: v4(),
    pictureUrl: "",
    videoUrls: [],
    createdAt: faker.date.between("2020-01-01", "2021-01-05"),
    email: faker.internet.email(),
    address: faker.address.streetAddress(),
    phone: faker.phone.phoneNumber(),
    country: "Canada",
    geolocation: faker.address.latitude(),
    postcode: faker.address.zipCodeByState(),
    supported_languages: [
      { lang: "English", code: "en" },
      { lang: "Korean", code: "ko" },
    ],
    tagline: faker.hacker.phrase(),
    description: faker.lorem.paragraph(),
    reviews: randomNum(10, 1000),
    rating: randomNum(0, 5),
    city: faker.address.city(),
  };

  const withDefault = { ...user, ...userData };

  allUsers.push(withDefault);
}

console.log(allUsers);

fs.writeFile("100users.js", JSON.stringify(allUsers), () => {
  console.log("rates_daycare_dog_length_of_stay");
});
