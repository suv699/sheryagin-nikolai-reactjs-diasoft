export interface ILogin {
  login: string;
  password: string;
  disabledLoginForm?: boolean;
}
export interface IRegistration {
  nameRegistr: string;
  lastNameRegistr: string;
  loginRegistr: string;
  passwordRegistr: string;
  emailRegistr?: string;
  disabledRegistration?: boolean;
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
