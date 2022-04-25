'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Meet_greet extends Model {

    static associate({ bands, Events }) {
      // band
      Meet_Greet.belongsTo(bands, {
        foreignKey: "band_id",
        as: "band"
      })

      // event
      Meet_Greet.belongsTo(Events, {
        foreignKey: "event_id",
        as: "event"
      })
    }
  }

  Meet_greet.init({
    meet_greet_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    event_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    band_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    meet_start_time: {
        type: DataTypes.DATE,
        allowNull: false
    },
    meet_end_time: {
        type: DataTypes.DATE,
        allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Meet_greet',
    tableName: 'meet_greets',
    timestamps: false
  });

  return Meet_greet;
};