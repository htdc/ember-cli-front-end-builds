'use strict';

var commands = require('./lib/commands');

module.exports = {
  name: require('./package').name,

  includedCommands: function() {
    return commands;
  }
};
