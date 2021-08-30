const { default: axios } = require("axios");
const React = require("react");

class SubmitForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      description: "",
    };

    this.baseState = this.state;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    axios.post("/api/employees", {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      description: this.state.description,
    });

    // Reset component state
    this.setState(this.baseState);
  }

  render() {
    return (
      <div>
        <div className="add-icon">+</div>
        <div className="form">
          <h3 className="form-description">Aggiungi alla lista</h3>
          <form onSubmit={this.handleSubmit} className="submitform">
            <input
              value={this.state.firstName}
              onChange={this.handleChange}
              type="text"
              id="firstName"
              placeholder="Nome"
            />
            <input
              value={this.state.lastName}
              onChange={this.handleChange}
              type="text"
              id="lastName"
              placeholder="Cognome"
            />
            <input
              value={this.state.description}
              onChange={this.handleChange}
              type="text"
              id="description"
              placeholder="Ruolo"
            />
            <button type="submit" value="Invia">
              Invia
            </button>
          </form>
        </div>
      </div>
    );
  }
}

exports.SubmitForm = SubmitForm;
