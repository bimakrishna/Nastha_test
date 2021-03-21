'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Event.init({
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Title tidak bolah kosong'
        }
      }
    },
    lokasi: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Lokasi tidak boleh kosong'
        }
      }
    },
    participant: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Harus ada partisipasi'
        }
      }
    },
    now_date: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'tanggal harus di isi'
        }
      }
    },
    notes: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Catetanya diisi ya'
        }
      }
    },
    image_url: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'link image juga harus diisi'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};