import React, {FC} from 'react';
import clsx from 'clsx';
import {SimpleTable} from './SimpleTable';
import {Chart} from './Chart';
import {BalanceUI} from '../containers/BalunceUI';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid/Grid';
import {Paper} from '@material-ui/core';
import {rowsTable} from '../staticData/rowsTable';
import {chartData} from '../staticData/chartData';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  title: {
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
    height: '100vh',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 200,
  },
}));

const account = {
  amount: 302400,
  currency: '$',
};
const getAccount = () => {
  console.log('getAcc');
};

export const Welcome: FC = () => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <div className={classes.root}>
      <main className={classes.content}>
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <Chart data={chartData} />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <BalanceUI account={account} getAccount={getAccount} />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <SimpleTable data={rowsTable} />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
};
