import React, {FC} from 'react';
import clsx from 'clsx';
import SimpleTable from './SimpleTable';
import {Chart} from './Chart';
import {BalanceUI} from '../containers/BalunceUI';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid/Grid';
import {Paper} from '@material-ui/core';

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

// Generate Sales Data
function createData(time: string, amount: number | undefined) {
  return {time, amount};
}

const chartData = [
  createData('00:00', 0),
  createData('03:00', 300),
  createData('06:00', 600),
  createData('09:00', 800),
  createData('12:00', 500),
  createData('15:00', 2000),
  createData('18:00', 100),
  createData('21:00', 2400),
  createData('24:00', undefined),
];

// Generate Order Data
function createDataTable(
  id: number,
  date: string,
  name: string,
  shipTo: string,
  paymentMethod: string,
  amount: number,
) {
  return {id, date, name, shipTo, paymentMethod, amount};
}

const rowsTable = [
  createDataTable(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44),
  createDataTable(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99),
  createDataTable(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createDataTable(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39),
  createDataTable(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),
];

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
