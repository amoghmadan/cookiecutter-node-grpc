const mongoose = require("mongoose");

const settings = require("../conf");

const connections = {};
Object.entries(settings.DATABASES).forEach(([key, value]) => {
  connections[key] = mongoose.createConnection(value.url, value.options);
});

module.exports = connections;
