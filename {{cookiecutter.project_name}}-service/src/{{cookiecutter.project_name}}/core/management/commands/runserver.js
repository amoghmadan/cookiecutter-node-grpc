const getGRPCHandler = require("../../grpc");

function runserver(host = "0.0.0.0", port = 50051) {
  const handler = getGRPCHandler();
  handler.handle(host, port);
}

module.exports = runserver;
