import { AuthService } from "../services/AuthService";

declare global {
  var authService: AuthService;
}

export {};
