import grpc from "@grpc/grpc-js";

export default class GRPCHanlder {
  async handle(host = "0.0.0.0", port = 50051) {
    const servicers = (await import("../../registry.ts")).default;

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
