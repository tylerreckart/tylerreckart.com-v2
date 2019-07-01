import React from 'react';

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: '',
      email: '',
      subject: '',
      message: ''
    };
  }

  render() {
    return (
      <form id="form" className="contact-form">
        <input type="text" placeholder="John Smith" />
        <input type="email" placeholder="john.smith@yourdomain.com" />
        <input type="text" placeholder="Software consulting opportunity" />
        <textarea placeholder="Lorem ipsum..."></textarea>
        <input type="submit" className="contact-form__button"value="Submit Form"></input>
      </form>
    );
  }
}