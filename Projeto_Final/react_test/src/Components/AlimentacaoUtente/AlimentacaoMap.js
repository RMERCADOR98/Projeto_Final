import React from "react";

import { makeStyles } from "@material-ui/core";
import AlimentacaoUtente from "./AlimentacaoUtente";
import { Container } from "@material-ui/core";

import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { Grid, CardHeader, Avatar, Fab, Card } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import AlimentacaoTop from "../../Components/AlimentacaoUtente/AlimentaçãoTop";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: { flexGrow: 1, marginTop: theme.spacing(3) },
  arrow: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
  voltar: {
    margin: "0 auto",
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const AlimentacaoMap = ({ alimentacao, id, deleteAlimentacao, prop }) => {
  const classes = useStyles();

  return (
    <Container>
      <Card className={classes.card}>
        <CardHeader
          style={{
            textAlign: "center",
            marginRight: "60px",
          }}
          avatar={
            <Avatar aria-label="voltar" className={classes.voltar}>
              <Fab
                variant="contained"
                color="secondary"
                className={classes.voltar}
                onClick={() => {
                  prop.history.goBack();
                }}
              >
                <ArrowBackIcon className={classes.arrow} />
              </Fab>
            </Avatar>
          }
          title={<h1>Alimentação</h1>}
        ></CardHeader>
        <AlimentacaoTop />
        <div className={classes.root}>
          {alimentacao &&
            alimentacao.map((alimento) => {
              return (
                <div key={alimentacao.id}>
                  <AlimentacaoUtente
                    alimento={alimento}
                    id={id}
                    deleteAlimentacao={deleteAlimentacao}
                  />
                </div>
              );
            })}
        </div>
        <p></p>
      </Card>
    </Container>
  );
};

export default AlimentacaoMap;
