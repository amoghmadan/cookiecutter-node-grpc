import globalSettings from "./globalSettings.ts";

const ENVIRONMENT_VARIABLE: string = "GRPC_SETTINGS_MODULE";

async function settingsFromModule(module: string): Promise<Record<string, any>> {
  const mod = await import(module);
  return { ...globalSettings, ...mod.default };
}

const settingsModule = process.env[ENVIRONMENT_VARIABLE];
const settings = await settingsFromModule(settingsModule);

export default settings;
