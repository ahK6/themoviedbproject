export interface LoginInterface {
  token: string;
  errors: string;
  status: string;
}

export interface LoginScreenState {
  email: string;
  password: string;
}
