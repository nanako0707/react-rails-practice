module ContactsHelper
  def contact_form_props(contact, token)
    {
      initialData: {
        name: contact.name,
        email: contact.email,
        title: contact.title,
        content: contact.content
      },
      token: token
    }
  end
end
