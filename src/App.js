import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Button, Grid } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Selamat Datnag React Sematic UI</h1>

        <Grid container columns={4}>
          <Grid.Column>
            <Button primary>Button Pertama</Button>
            <Button secondary>Button Kedua</Button>
            <Button basic color="red">
              Button Ketiga
            </Button>
          </Grid.Column>
          <Grid.Column>2</Grid.Column>
          <Grid.Column>3</Grid.Column>
          <Grid.Column>4</Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default App;
