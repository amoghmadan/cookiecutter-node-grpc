const {
  HealthCheckServiceService,
} = require("./protobuf/healthcheck/healthcheck_grpc_pb");
const { healthCheck } = require("./services");

module.exports = new Map([[HealthCheckServiceService, healthCheck]]);
