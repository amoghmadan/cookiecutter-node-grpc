const globalSettings = require("./globalSettings");

const ENVIRONMENT_VARIABLE = "SETTINGS_MODULE";

function settingsFromModule(module) {
  const mod = require(module);
  return { ...globalSettings, ...mod };
}

const settingsModule = process.env[ENVIRONMENT_VARIABLE];
const settings = settingsFromModule(settingsModule);

module.exports = settings;
