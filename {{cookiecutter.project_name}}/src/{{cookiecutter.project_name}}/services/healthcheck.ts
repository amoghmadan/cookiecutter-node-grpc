async function ping(call, callback) {
  console.log({ call, callback });
  const { PingResponse } =
    await require("../protobuf/healthcheck/healthcheck_pb.js");

  const response = new PingResponse();
  response.setReply("Pong");
  callback(null, response);
}

export default { ping };
