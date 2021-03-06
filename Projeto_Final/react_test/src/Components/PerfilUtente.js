import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";
import ImageAvatars from "./Perfil Utente/perfilUtente";
import Button from "@material-ui/core/Button";
import { Grid, CardHeader, Avatar, Fab, Paper } from "@material-ui/core";
import { Link } from "react-router-dom";
import BotaoFamiliar from "./Perfil Utente/BotaoFamiliar";
import EditIcon from "@material-ui/icons/Edit";
import { connect } from "react-redux"; //conecta o component com o redux
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { deleteUtente } from "../Store/Actions/UtenteActions";
import DeleteIcon from "@material-ui/icons/Delete";
import EditarUtente from "./EditarUtente";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(3),
    textAlign: "center",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  large: {
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
  voltar: {
    margin: "0 auto",
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  arrow: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
  delete: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  avatar: {},
}));

const PerfilUtente = (props) => {
  const {
    utente,
    deleteUtente,
    auth,
    match: { url },
  } = props;

  let utenteId = props.match.params.id;

  console.log(utenteId);
  console.log(utente);

  console.log(props.match.params);

  const classes = useStyles();
  if (!auth.uid) return <Redirect to="/signin" />;

  if (utente) {
    console.log(utente);
    return (
      <div
        style={{
          flex: 1,
        }}
      >
        <Container className={classes.root}>
          <Card>
            <Grid
              container
              fluid
              style={{
                flex: 1,
                alignItems: "center",
              }}
            >
              <Grid item xs={12}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="voltar" className={classes.voltar}>
                      <Fab
                        variant="contained"
                        color="secondary"
                        className={classes.voltar}
                        onClick={() => {
                          props.history.push("/");
                        }}
                      >
                        <ArrowBackIcon className={classes.arrow} />
                      </Fab>
                    </Avatar>
                  }
                  action={
                    <Avatar
                      aria-label="Delete"
                      className={classes.voltar}
                      style={{ marginTop: "8px", marginRight: "6px" }}
                    >
                      <Fab
                        variant="contained"
                        color="secondary"
                        className={classes.voltar}
                        onClick={() => {
                          deleteUtente(utenteId);
                          props.history.push("/");
                        }}
                      >
                        <DeleteIcon className={classes.delete} />
                      </Fab>
                    </Avatar>
                  }
                ></CardHeader>
              </Grid>
              <Grid
                item
                xs={12}
                md={5}
                style={{ justify: "center", alignItems: "center" }}
              >
                {/* <ImageAvatars /> */}
                {/* <img src={utente.url} /> */}

                <Avatar
                  component={Paper}
                  elevation={10}
                  src={utente.url}
                  className={classes.large}
                  style={{
                    margin: "0 auto",
                    justify: "center",
                    alignItems: "center",
                  }}
                />
              </Grid>
              <Grid
                item
                xl={4}
                sm={6}
                style={{
                  flex: 1,
                  textAlign: "justify",
                  alignItems: "center",
                }}
              >
                <span>
                  <b>Nome:</b> {utente.nomeCompleto}
                </span>
                <br />
                <span>
                  <b>Entrada:</b>{" "}
                  {new Date(utente.createdAt.seconds * 1000).toLocaleDateString(
                    "pt-PT"
                  )}
                </span>
                <br />
              </Grid>
              <Grid item xs={7} md={4} xl={4}>
                <BotaoFamiliar utenteId={utenteId} />
              </Grid>
            </Grid>

            {/* parte de baixo */}

            <Grid container fluid spacing={2}>
              <Grid item xs={6} sm={6}>
                <Link
                  exact
                  to={"/Alimentação/" + utenteId}
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    variant="contained"
                    style={{
                      width: "90%",
                      height: 80,
                      marginLeft: 25,
                      background: "white",
                    }}
                  >
                    Alimentação
                  </Button>
                </Link>
              </Grid>
              <Grid item xs={6} sm={6}>
                <Link
                  to={"/Informações/" + utenteId}
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    variant="contained"
                    style={{
                      width: "90%",
                      height: 80,
                      marginRight: 25,
                      background: "white",
                      elevation: "20",
                    }}
                  >
                    Informações
                  </Button>
                </Link>
              </Grid>
              <Grid item xs={6} sm={6}>
                <Link
                  to={"/Saúde/" + utenteId}
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    variant="contained"
                    style={{
                      width: "90%",
                      height: 80,
                      marginLeft: 25,
                      marginTop: 6,
                      background: "white",
                    }}
                  >
                    Saúde
                  </Button>
                </Link>
              </Grid>
              <Grid item xs={6} sm={6}>
                <Link
                  to={"/Bem-Estar/" + utenteId}
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    variant="contained"
                    style={{
                      width: "90%",
                      height: 80,
                      marginRight: 25,
                      marginTop: 6,
                      marginBottom: 30,
                      background: "white",
                    }}
                  >
                    Bem-Estar
                  </Button>
                </Link>
              </Grid>
            </Grid>

            <Router>
              <Route path="/editarUtente/:id" component={EditarUtente} />

              <NavLink
                to={"/editarUtente/" + utenteId}
                exact
                activeStyle={{ color: "green" }}
              >
                <Avatar aria-label="recipe" className={classes.voltar}>
                  <Fab
                    variant="contained"
                    color="secondary"
                    className={classes.voltar}
                  >
                    <EditIcon />
                  </Fab>
                </Avatar>
              </NavLink>
            </Router>
            <br />
          </Card>
        </Container>
      </div>
    );
  } else {
    return (
      <div>
        <p> A carregar Utente...</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  console.log(id);
  const utentes = state.firestore.data.utentes;
  console.log(utentes);
  const utente = utentes ? utentes[id] : null;
  console.log(utente);

  return {
    utente: utente,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUtente: (utenteId) => dispatch(deleteUtente(utenteId)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "utentes" }])
)(PerfilUtente);
