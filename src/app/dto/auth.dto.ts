export interface AuthDto {
  userId: number;
  id: number;
  accountType: number;
  name: string;
  email: string;
  profilePictureUrl: string;

  token: string;
  type: string;
  refreshToken: string;
  roles: [string];
}