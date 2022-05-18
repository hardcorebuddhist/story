"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "spaces",
      [
        {
          title: "Van Gogh's stories",
          description:
            "All packed up with canvas, paint and other supplies, Van Gogh headed out. He preferred to paint outdoors, surrounded by nature.",
          backgroundColor: "#ffffff",
          color: "#000000",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Rembrandt van Rijn stories",
          description:
            "Storyteller, rebel, father and widower. Rembrandt's life was turbulent, his talent unparalleled. Here you will find 16 of his most important works. They tell you more about his life and career.",
          backgroundColor: "#ffffff",
          color: "#000000",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("spaces", null, {});
  },
};
