'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
   
    static associate({ Stages, Stage_events, Meet_greets, Set_times }) {
      // stages
      Event.belongsToMany(Stages, {
        foreignKey: "event_id",
        as: "stages",
        through: Stage_events
      })

      // meet and greets 
      Event.hasMany(Meet_greets, {
        foreignKey: "event_id",
        as: "meet_greets"
      })

      // set times 
      Event.hasMany(Set_times, {
        foreignKey: "event_id",
        as: "set_times"
      })
    }
  }

  Event.init({
    event_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    start_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    end_time: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Event',
    tableName: 'Events',
    timestamps: false
  })
  return Event
}