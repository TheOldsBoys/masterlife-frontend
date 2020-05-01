import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { useFadedShadowStyles } from '@mui-treasury/styles/shadow/faded';
import { useGutterBorderedGridStyles } from '@mui-treasury/styles/grid/gutterBordered';
import { createMuiTheme } from '@material-ui/core/styles';

import ChallengeList from './ChallengeList'
import { Paper, Typography } from '@material-ui/core';

var theme = createMuiTheme();

const useStyles = makeStyles((palette) => ({
  card: {
    borderRadius: 12,
    minWidth: 256,
    textAlign: 'center',
  },
  avatar: {
    width: '90%',
    height: 'auto',
    margin: 'auto',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: '0.5px',
    marginTop: 8,
    marginBottom: 0,
  },
  subheader: {
    fontSize: 14,
    color: theme.palette.grey[500],
    marginBottom: '0.875em',
  },
  statLabel: {
    fontSize: 12,
    color: "grey",
    fontWeight: 500,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    margin: 0,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
    letterSpacing: '1px',
  },
}));

export default function UserCompletedChallenges({challenges}){
  const styles = useStyles(theme.palette);
  const shadowStyles = useFadedShadowStyles();
  const borderedGridStyles = useGutterBorderedGridStyles({
    borderColor: 'rgba(0, 0, 0, 0.08)',
    height: '50%',
  });
  console.log(challenges);
  
  return (
    <box>
      <Typography variant='h2'>Le mie sfide</Typography>
      <CardContent>
          <ChallengeList data={challenges}/>
      </CardContent>
    </box>
  );
};
