import path from "path";
import { fileURLToPath } from "url";

const BASE_DIR: string = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

const SECRET_KEY: string = "l+qy&x%&%w4d0#&d7m^hveun8a!m3p-8@$fv@0k9l%3*eb$qd&";

const DEBUG: boolean = true;

const DATABASES: Record<string, Record<string, any>> = {
  default: {
    url: "mongodb://localhost:27017/sample",
    options: {},
  },
};

const TIME_ZONE: string = "UTC";
const USE_TZ: boolean = true;

export default { BASE_DIR, SECRET_KEY, DEBUG, DATABASES, TIME_ZONE, USE_TZ };
