import React, {FC} from 'react';
import {Balance} from '../components/Balance';

interface IProp {
  amount: number;
  currency: string;
}
interface IProps {
  account: IProp;
  getAccount: () => void;
}
export const BalanceUI: FC<IProps> = ({account, getAccount}: IProps) => {
  return <Balance currency={account.currency} amount={account.amount} toggleRefresh={getAccount} />;
};
