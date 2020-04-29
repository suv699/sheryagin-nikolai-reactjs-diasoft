import React, {FC, MouseEvent} from 'react';

import Link from '@material-ui/core/Link';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

interface IProps {
  currency: string;
  amount: number;
  toggleRefresh: () => void;
}
export const Balance: FC<IProps> = ({currency, amount, toggleRefresh}: IProps) => {
  const classes = useStyles();
  return (
    <>
      <Typography>Recent Deposits</Typography>
      <Typography component="p" variant="h4">
        {currency} {(+amount || 0).toLocaleString()}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on {new Date().toDateString()}
      </Typography>
      <div>
        <Link
          color="primary"
          href="#"
          onClick={(event: MouseEvent<HTMLElement>) => {
            event.preventDefault();
            toggleRefresh();
          }}>
          Refresh balance
        </Link>
      </div>
    </>
  );
};
