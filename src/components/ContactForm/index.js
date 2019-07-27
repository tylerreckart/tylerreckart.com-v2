import React from 'react';
import axios from 'axios';

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: '',
      email: '',
      subject: '',
      message: ''
    };

    this.handleFullNameInput = this.handleFullNameInput.bind(this);
    this.handleEmailAddressInput = this.handleEmailAddressInput.bind(this);
    this.handleSubjectInput = this.handleSubjectInput.bind(this);
    this.handleMessageInput = this.handleMessageInput.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  handleFullNameInput(event) {
    this.setState({ fullName: event.target.value });
  }

  handleEmailAddressInput(event) {
    this.setState({ email: event.target.value });
  }

  handleSubjectInput(event) {
    this.setState({ subject: event.target.value });
  }

  handleMessageInput(event) {
    this.setState({ message: event.target.value });
  }


  onSubmit(e) {
    e.preventDefault();

    const { fullName, email, subject, message } = this.state;

    axios({
      method: "POST",
      url: process.env.GATSBY_API_URL,
      data: {
        fullName,
        email,
        messageSubject: subject,
        message
      }
    }).then(response => {
      const { data } = response;
      if (data.MessageId.length > 0) {
        alert("Your message has been sent. I'll do my best to respond as quickly as possible.");

        this.resetForm();
      } else {
        alert(`Message failed to send. Please email me at ${process.env.GATSBY_SUPPORT_EMAIL}. I apologize for the inconvenience.`);
      }
    });
  }

  resetForm() {
    this.setState({
      fullName: '',
      email: '',
      subject: '',
      message: ''
    });

    document.getElementById("form").reset();
  }

  render() {
    return (
      <form id="form" className="contact-form" onSubmit={this.onSubmit}>
        <input type="text" placeholder="John Smith" onChange={this.handleFullNameInput} />
        <input type="email" placeholder="john.smith@yourdomain.com" onChange={this.handleEmailAddressInput} />
        <input type="text" placeholder="Software consulting opportunity" onChange={this.handleSubjectInput} />
        <textarea placeholder="Lorem ipsum..." onChange={this.handleMessageInput}></textarea>
        <input type="submit" className="contact-form__button"value="Submit Form"></input>
      </form>
    );
  }
}
