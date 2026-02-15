const GRPCHanlder = require("./handlers/grpc");

function getGRPCHandler() {
  return new GRPCHanlder();
}

module.exports = getGRPCHandler;
