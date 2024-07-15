export interface Usermodel {
  id: string;
  username: string;
  email: string;
  password: string;
}

export type ShowUser = Omit<Usermodel, 'password'>;

export type ValidatePasswordSame = Usermodel & { passwordConfirm: string };

export type UserProfile = Pick<Usermodel, 'username' | 'email'>;
