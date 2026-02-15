const path = require("path");

const BASE_DIR = path.dirname(path.dirname(__filename));

const SECRET_KEY = "l+qy&x%&%w4d0#&d7m^hveun8a!m3p-8@$fv@0k9l%3*eb$qd&";

const DEBUG = true;

const DATABASES = {
  default: {
    url: "mongodb://localhost:27017/sample",
    options: {},
  },
};

const TIME_ZONE = "UTC";
const USE_TZ = true;

module.exports = { BASE_DIR, SECRET_KEY, DEBUG, DATABASES, TIME_ZONE, USE_TZ };
