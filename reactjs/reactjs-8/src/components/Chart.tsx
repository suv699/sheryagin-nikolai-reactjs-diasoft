import React, {FC} from 'react';
import {LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer} from 'recharts';
import {Typography} from '@material-ui/core';

interface IRows {
  time: string;
  amount: number | undefined;
}
type TProps = {
  data: IRows[];
};

export const Chart: FC<TProps> = ({data}: TProps) => {
  return (
    <>
      <Typography>Today</Typography>
      <ResponsiveContainer width={'100%'} height={150}>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 24,
            left: 24,
          }}>
          <XAxis dataKey="time" />
          <YAxis>
            <Label angle={270} position="left" style={{textAnchor: 'middle'}}>
              Sales ($)
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="amount" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};
