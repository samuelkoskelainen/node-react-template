import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { Button, Form, Input, TextArea } from 'semantic-ui-react';
import { useStore } from '../../stores/store';

const NoteForm = () => {
  const { noteStore } = useStore();
  const { postNote, postLoading } = noteStore;

  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  return (
    <Form>
      <Input
        name="title"
        placeholder="title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextArea
        name="description"
        placeholder="description..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={2}
        style={{ maxHeight: 100 }}
      />
      <Button
        content="+ Add Note"
        positive
        type="submit"
        onClick={() => {
          postNote(title, description);
          setTitle("")
          setDescription("")
        }}
        loading={postLoading}
      />
    </Form>
  );
};

export default observer(NoteForm);
