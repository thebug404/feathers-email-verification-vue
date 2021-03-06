import feathers, { Service } from "@feathersjs/feathers";
import authentication from "@feathersjs/authentication-client";
import _rest from "@feathersjs/rest-client";
// import socketio from "@feathersjs/socketio-client";
// import io from "socket.io-client";

import { User } from "@/services/auth.service";

// Initialize transport.
const rest = _rest("http://localhost:3030");

// Initialize socket.io
// const socket = io("http://localhost:3030");

// Initialize feathers app
const app = feathers();
// Add support real-time with socket.io
// app.configure(socketio(socket));

// Configure transport REST API.
app.configure(rest.fetch(window.fetch));
// Add support authentication-client.
app.configure(
  authentication({
    storage: window.localStorage,
    // By default it is <authentication> but, if it has changed, it is necessary to add its URL
    // path: "authentication"
  })
);

// Export authentication-cient
export const Auth = app.authentication;
// Export auth management.
export const AuthManagement: Service<any> = app.service("authManagement");
// Export user service.
export const UserService: Service<User> = app.service("users");
