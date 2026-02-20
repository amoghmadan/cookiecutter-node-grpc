import healthcheck from "./protobuf/healthcheck/healthcheck.ts";

import service from "./services/index.ts";

export default new Map([[healthcheck.HealthCheckServiceService, service.healthCheck]]);
