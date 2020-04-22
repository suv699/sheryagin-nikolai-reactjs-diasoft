import React from 'react'
import { useTheme } from '@material-ui/core/styles'
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts'
import {Typography} from "@material-ui/core"

export default function Chart(props: any) {
  const theme = useTheme()
  return (
    <React.Fragment>
      <Typography>Today</Typography>
      <ResponsiveContainer width={'100%'} height={150}>
        <LineChart
          data={props.data}
          margin={{
            top: 16,
            right: 16,
            bottom: 24,
            left: 24,
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Sales ($)
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  )
}