'use strict';

const fs = require('fs');

module.exports = {
  name: require('./package').name,

  isDevelopingAddon() {
    return true;
  },

  postBuild(res) {
  }
};
