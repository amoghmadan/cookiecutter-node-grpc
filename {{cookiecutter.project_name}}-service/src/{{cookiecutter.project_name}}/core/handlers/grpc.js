const grpc = require("@grpc/grpc-js");

class GRPCHanlder {
  async handle(host = "0.0.0.0", port = 50051) {
    const servicers = require("../../registry");

    const server = new grpc.Server();

    servicers.forEach((methods, service) => {
      server.addService(service, methods);
    });

    server.bindAsync(
      `${host}:${port}`,
      grpc.ServerCredentials.createInsecure(),
      (error, port) => {
        if (error) {
          console.error(error);
          return;
        }
        console.log(`Starting server at grpc://${host}:${port}`);
      },
    );
  }
}

module.exports = GRPCHanlder;
