import GRPCHanlder from "./handlers/grpc.ts";

export default function getGRPCHandler() {
  return new GRPCHanlder();
}
