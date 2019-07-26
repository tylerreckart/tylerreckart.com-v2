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
    console.log(fullName, email, subject, message);
    axios({
      method: "POST",
      url: "http://localhost:4040/send-mail",
      data: {
        fullName,
        email,
        subject,
        message
      }
    }).then(response => {
      const { data } = response;

      if (data.msg === 'success') {
        alert("Message sent");

        this.resetForm();
      } else if (data.msg == 'fail') {
        alert('Message failed to send');
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
