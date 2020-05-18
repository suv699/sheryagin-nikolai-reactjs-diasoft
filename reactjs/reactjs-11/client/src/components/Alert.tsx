import React, {FC} from 'react';
import Alert from '@material-ui/lab/Alert';
import Paper from '@material-ui/core/Paper';
import {TMessage} from '../models/interfeces';

// type TMessage = 'success' | 'info' | 'warning' | 'error' | undefined;

interface INotification {
  text: string;
  mode: TMessage;
}
export const Notification: FC<INotification> = ({mode, text}: INotification) => {
  return (
    <Paper elevation={0}>
      <Alert severity={mode}>{text}</Alert>
    </Paper>
  );
};
