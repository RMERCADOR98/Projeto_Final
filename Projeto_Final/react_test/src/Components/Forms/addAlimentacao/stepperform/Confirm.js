import React, { Component, Fragment } from "react";
import { List, ListItemText } from "@material-ui/core";
import Button from "@material-ui/core/Button";

class Confirm extends Component {
  continue = (e) => {
    e.preventDefault();
    //Process Form -> Seria neste sitio onde iriamos processar as infos do form para a bd
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { pequenoAlmoco, almoco, lanche, jantar, alimentacao, gostou },
    } = this.props;

    console.log(this.props);

    const styles = {
      button: {
        margin: 15,
      },
    };

    return (
      <Fragment>
        <List>
          <ListItemText primary="Pequeno Almoço" secondary={pequenoAlmoco} />
          <ListItemText primary="Almoço" secondary={almoco} />
          <ListItemText primary="Lanche" secondary={lanche} />
          <ListItemText primary="Jantar" secondary={jantar} />
          <ListItemText primary="Alimentação" secondary={alimentacao} />
          <ListItemText primary="Gostou" secondary={gostou} />
        </List>
        <Button
          variant="contained"
          color="secondary"
          onClick={this.back}
          className={styles.button}
        >
          Voltar
        </Button>
        &nbsp;
        <Button
          variant="contained"
          color="primary"
          onClick={this.props.handleSubmit}
          className={styles.button}
        >
          Confirmar
        </Button>
      </Fragment>
    );
  }
}

export default Confirm;
