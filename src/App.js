import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import {
  Button,
  Container,
  Divider,
  Flag,
  Grid,
  Header,
  Icon,
  Image,
} from "semantic-ui-react";

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
        <Divider horizontal>Batas</Divider>
        <Grid container columns={4}>
          <Grid.Column>
            <Button primary>Button Pertama</Button>
            <Button secondary>Button Kedua</Button>
            <Button basic color="red">
              Button Ketiga
            </Button>
          </Grid.Column>
          <Grid.Column>
            <Flag name="id" />
            <Flag name="indonesia" />
            <Flag name="palestine" />
          </Grid.Column>
          <Grid.Column>
            <Header as="h3" color="red">
              <Image src="https://react.semantic-ui.com/images/avatar/large/patrick.png" />
              Rahmat Putra
            </Header>
          </Grid.Column>
          <Grid.Column>4</Grid.Column>
        </Grid>
        <Container textAlign="center">
          <Icon name="spinner" size="big" loading />
        </Container>
        <Image
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          size="tiny"
          href="https://google.com"
          target="_blank"
        />
      </div>
    );
  }
}

export default App;
