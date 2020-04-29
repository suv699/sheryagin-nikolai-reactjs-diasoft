import React, {FC} from 'react';
import {Chart} from './Chart';
import {Container, Grid, Paper} from '@material-ui/core';
import SimpleTable from './SimpleTable';

// Generate Sales Data
function createData(time: string, amount: number | undefined) {
  return {time, amount};
}
interface IChart {
  time: string;
  amount: number | undefined;
}
const chartData: IChart[] = [
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

export const Welcome: FC = () => {
  return (
    <div className="main-container">
      <main className="welcome-content">
        <Container maxWidth="lg" className="welcome-container">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Paper className="chart">
                <Chart data={chartData} />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className="paper">
                <SimpleTable data={rowsTable} />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
};
