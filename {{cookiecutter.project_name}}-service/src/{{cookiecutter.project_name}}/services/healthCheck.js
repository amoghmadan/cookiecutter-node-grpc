function ping(call, callback) {
  const { PingResponse } = require("../protobuf/healthcheck/healthcheck_pb");

  const response = new PingResponse();
  response.setReply("Pong");
  callback(null, response);
}

module.exports = { ping };
