import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Button, Container, Grid } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <div>
        <Container textAlign="left">
          Kiri Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Doloribus eveniet libero ullam beatae, impedit modi optio nesciunt,
          corporis doloremque dolores veritatis molestias obcaecati tempora
          natus maxime nostrum voluptatem similique minima.*30
        </Container>
        <br />
        <br />

        <Container textAlign="right">
          Kiri Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Doloribus eveniet libero ullam beatae, impedit modi optio nesciunt,
          corporis doloremque dolores veritatis molestias obcaecati tempora
          natus maxime nostrum voluptatem similique minima.*30
        </Container>
        <br />
        <br />
        <Container textAlign="center">
          Kiri Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Doloribus eveniet libero ullam beatae, impedit modi optio nesciunt,
          corporis doloremque dolores veritatis molestias obcaecati tempora
          natus maxime nostrum voluptatem similique minima.*30
        </Container>
        <br />
        <br />
        <Container textAlign="justified">
          Kiri Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Doloribus eveniet libero ullam beatae, impedit modi optio nesciunt,
          corporis doloremque dolores veritatis molestias obcaecati tempora
          natus maxime nostrum voluptatem similique minima.*30
        </Container>
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
