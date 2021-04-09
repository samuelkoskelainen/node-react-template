import { Container, Header } from 'semantic-ui-react';

const Home = () => {
  return (
    <Container textAlign="center">
      <Header content="Note App" as="h1" />
      <p>
        App made with React and Node.
        <br />
        Database with MongoDB.
        <br />
        Deployed to Azure.
      </p>
    </Container>
  );
};

export default Home;
