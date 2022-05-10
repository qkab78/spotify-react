import { ISpotifyAuthResponse } from "..";
import { Auth } from "../../entities/auth";

const createAuthResult = (authInfos: Auth) => authInfos

export type AuthResult = ReturnType<typeof createAuthResult>

export type AuthQuery = () => Promise<{
  authenticateUser: (authInfos: ISpotifyAuthResponse) => Promise<AuthResult>
}>