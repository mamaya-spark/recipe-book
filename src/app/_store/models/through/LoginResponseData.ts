import { User } from '../User';

export interface LoginResponseData {
  jwt: string;
  user: User;
}
