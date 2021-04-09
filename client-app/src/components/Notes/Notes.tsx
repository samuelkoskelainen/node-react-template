import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { Button, Card, Container, Grid, GridColumn, Icon } from 'semantic-ui-react';
import { useStore } from '../../stores/store';
import {format} from 'date-fns'
import NoteForm from './NoteForm';
import { getUTCDate } from '../../util/utc';
import NotesPlaceholder from './NotesPlaceholder';

const Notes = () => {
  const { noteStore } = useStore();
  const { loadNotes, loading, notes, deleteNote } = noteStore;

  useEffect(() => {
    loadNotes();
  }, [loadNotes]);

  if (loading) return <NotesPlaceholder />;

  return (
    <Container>
      <Grid stackable>
        <GridColumn width={8}>
          <Card centered>
            <Card.Content>
              <Card.Header>Add a Note</Card.Header>
              <NoteForm />
            </Card.Content>
          </Card>
        </GridColumn>
        <Grid.Column width={8}>
          {notes.map((note, index) => (
            <Card key={index} centered>
              <Card.Content>
                <Button icon floated="right" color="google plus" onClick={() => deleteNote(note._id)}>
                  <Icon name="remove circle" />
                </Button>
                <Card.Header>{note.title}</Card.Header>
                <Card.Meta>{format(getUTCDate(note.date), "dd.M HH.mm")}</Card.Meta>
                <Card.Description>{note.description}</Card.Description>
              </Card.Content>
            </Card>
          ))}
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default observer(Notes);
