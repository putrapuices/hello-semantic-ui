import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Button, Grid } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Selamat Datnag React Sematic UI</h1>
        <Button primary>Button Pertama</Button>
        <Button secondary>Button Kedua</Button>

        <Grid container columns={4}>
          <Grid.Column>1</Grid.Column>
          <Grid.Column>2</Grid.Column>
          <Grid.Column>3</Grid.Column>
          <Grid.Column>4</Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default App;
