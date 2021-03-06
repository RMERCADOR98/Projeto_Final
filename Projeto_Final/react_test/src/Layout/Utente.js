import React from "react";
import { Avatar, makeStyles, Grid, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  gridPaper: {
    margin: theme.spacing(1),
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  large: {
    margin: "0 auto",
    width: theme.spacing(25),
    height: theme.spacing(25),
  },
}));

const Utente = ({ utente }) => {
  const classes = useStyles();

  const nasc = utente.nascimento.toDate();
  const hoje = new Date();

  const idademili = Math.abs(hoje - nasc);
  const idade = parseInt(idademili / 31556952000);

  return (
    <Grid item xs={12} key={utente.id}>
      <div justify="center">
        <Paper className={classes.gridPaper}>
          <Avatar variant="circle" className={classes.large} src={utente.url} />
          <p>
            <b>{utente.alcunha}</b>
            <br />
          </p>
        </Paper>
      </div>
    </Grid>
  );
};

export default Utente;
