class ContactsController < ApplicationController
  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(contact_params)

    if @contact.save
      redirect_to :root, notice: t('.success')
    else
      render :new, status: :bad_request
    end
  end

  private

  def contact_params
    params.require(:contact).permit(:name, :email, :title, :content)
  end
end
