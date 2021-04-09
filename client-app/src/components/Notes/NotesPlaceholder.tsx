import {
  Card,
  Container,
  Grid,
  Placeholder,
  Button,
  Icon,
} from 'semantic-ui-react';

const NotesPlaceholder = () => {
  return (
    <Container>
      <Grid stackable>
        <Grid.Column width={8}>
          <Card centered>
            <Card.Content>
              <Card.Header>Add a Note</Card.Header>
              <Placeholder>
              <Placeholder.Image />
              </Placeholder>
              <Button disabled content="+ Add Note" />
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column width={8}>
          <Card centered>
            <Card.Content>
                <Button disabled icon floated="right">
                  <Icon name="remove circle" />
                </Button>
              <Placeholder>
                <Placeholder.Header />
                <Placeholder.Line />
                <Placeholder.Paragraph>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Paragraph>
              </Placeholder>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default NotesPlaceholder;
