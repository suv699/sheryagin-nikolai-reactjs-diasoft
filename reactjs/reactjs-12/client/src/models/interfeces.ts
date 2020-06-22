export interface ILogin {
  login: string;
  password: string;
  disabled?: boolean;
  isAuthenticated?: boolean;
}
export interface IRegistration {
  nameRegistr: string;
  lastNameRegistr: string;
  loginRegistr: string;
  passwordRegistr: string;
  emailRegistr?: string;
  disabled?: boolean;
}
export interface INotification {
  text: string;
  mode: TMessage;
  show: boolean;
}

export type TMessage = 'success' | 'info' | 'warning' | 'error' | undefined;

export interface ITodo {
  title: string;
  id: number;
  checked: boolean;
}
