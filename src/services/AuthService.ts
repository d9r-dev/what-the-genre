import { URIS } from "../constants/SpotifyAPIConstants";

interface SpotifyTokenResponseBody {
  access_token: string;
  token_type: string;
  expires_in: number;
}

interface SpotifyAuthErrorResponse {
  error: string;
  error_description: string;
}

export class AuthService {
  private clientId: string;
  private clientSecret: string;
  private token: string | null;
  private expirationDate: Date | null;

  constructor(clientId: string | null, clientSecret: string | null) {
    if (!clientId || !clientSecret) {
      throw new Error(
        "Could not start AuthService because of missing secrets!"
      );
    }
    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.token = null;
    this.expirationDate = null;
    this.getSpotifyToken();
  }

  public getToken() {
    const expired = this.checkTokenExpiration();
    if (this.token && !expired) {
      return this.token;
    }

    this.getSpotifyToken();
    return this.token;
  }

  private async getSpotifyToken() {
    console.log("Trying to get and token from Spotify...");

    const request: Request = new Request(URIS.authToken);
    const formData: Record<string, string> = {};

    formData.grant_type = "client_credentials";
    formData.client_id = this.clientId;
    formData.client_secret = this.clientSecret;
    const data = new URLSearchParams(formData);
    request.headers.set("Content-Type", "application/x-www-form-urlencoded");
    await fetch(request, {
      method: "POST",
      body: data,
    })
      .then(async (res: Response) => {
        if (res.status === 200) {
          return (await res.json()) as unknown as SpotifyTokenResponseBody;
        } else {
          return (
            ((await res.json()) as unknown as SpotifyAuthErrorResponse) ?? null
          );
        }
      })
      .then((body) => {
        if (body && Object.hasOwn(body, "access_token")) {
          this.token = (body as SpotifyTokenResponseBody).access_token;
          const now = new Date();
          now.setSeconds(
            now.getSeconds() + (body as SpotifyTokenResponseBody).expires_in
          );
          this.expirationDate = now;
          console.log("Access token received from Spotify.");
        }
        if (body && Object.hasOwn(body, "error")) {
          throw new Error(
            `Could not get token from Spotify. Error: ${
              (body as SpotifyAuthErrorResponse).error
            } Description: ${
              (body as SpotifyAuthErrorResponse).error_description
            }`
          );
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  private checkTokenExpiration() {
    if (!this.expirationDate) {
      return true;
    }
    const now = new Date();
    const expired = now > this.expirationDate;

    if (expired) {
      console.log("Spotify token is expired...");
    }

    return expired;
  }
}
