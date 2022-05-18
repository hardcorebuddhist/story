"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "stories",
      [
        {
          name: "Story 1",
          content:
            "Vincent wrote to his sister Willemien: ‘[I] am always dusty, always more laden like a porcupine with sticks, easel, canvas, and other merchandise’.",
          imageUrl: "https://iiif.micr.io/MHQNj/full/200,/0/default.webp",
          spaceId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Story 2",
          content:
            "Vincent couldn’t always go outdoors, so he also painted inside, in his studio. He sometimes started a work outdoors, and finished it inside.",
          imageUrl: "https://iiif.micr.io/pFHsV/full/200,/0/default.webp",
          spaceId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Story 3",
          content:
            "Grains of sand, seeds and even little insects were found in some paintings. So we know for sure that Van Gogh made these works outdoors.",
          imageUrl: "https://iiif.micr.io/MkOOQ/full/200,/0/default.webp",
          spaceId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Story 4",
          content:
            "Vincent van Gogh decided to become an artist at the age of 27. That decision would change his life and art history forever. Read Vincent's biography.",
          imageUrl: "https://iiif.micr.io/jaavR/full/200,/0/default.webp",
          spaceId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("stories", null, {});
  },
};
