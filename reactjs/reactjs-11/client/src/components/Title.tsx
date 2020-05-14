import React, {FC} from 'react';

import {Typography} from '@material-ui/core';

interface IProps {
  title: string;
}
export const Title: FC<IProps> = ({title}: IProps) => {
  return (
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
      {title}
    </Typography>
  );
};
