"use strict";
const { Model } = require("sequelize");
const { FOREIGNKEYS } = require("sequelize/types/lib/query-types");
module.exports = (sequelize, DataTypes) => {
  class story extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      story.belongsTo(models.space, { foreignKey: "spaceId" });
    }
  }
  story.init(
    {
      name: { type: DataTypes.STRING, allowNull: false, unique: true },
      content: DataTypes.TEXT,
      imageUrl: DataTypes.STRING,
      spaceId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "story",
    }
  );
  return story;
};
