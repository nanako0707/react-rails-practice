import * as React from 'react';
import { Form, Button } from 'semantic-ui-react';

type Props = {
  initialData: { [key: string]: string }
  token: string
}

const ContactForm = ({
  initialData,
  token
}: Props) => {
  const [loading, setLoading] = React.useState(false);
  const [formData, setFormData] = React.useState(initialData);

  return (
    <Form action='/contacts' method='post' onSubmit={() => setLoading(true)} loading={loading}>
      <Form.Input
        required
        label='名前'
        name='contact[name]'
        defalutValue={formData['name']}
        type='text' />

      <Form.Input
        required
        label='メールアドレス'
        name='contact[email]'
        defaultValue={formData['email']}
        type='email' />

      <Form.Input
        required
        label='件名'
        name='contact[title]'
        defaultValue={formData['title']}
        type='text' />

      <Form.TextArea
        required
        label='内容'
        name='contact[content]'
        defaultValue={formData['content']} />

      <input
        name='authenticity_token'
        type='hidden'
        value={token} />

      <Button primary>送信する</Button>
    </Form>
  )
}

export default ContactForm;
