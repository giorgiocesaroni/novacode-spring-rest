const React = require("react");
const axios = require("axios");

class Employee extends React.Component {
  constructor(props) {
    super(props);
    this.state = { link: "" };

    this.delete = this.delete.bind(this);
  }

  componentDidMount() {
    this.setState({ link: this.props.employee._links.self.href });
  }

  delete() {
    axios.delete(this.state.link);
  }

  render() {
    return (
      <div className="tr">
        <div className="td">{this.props.employee.firstName}</div>
        <div className="td">{this.props.employee.lastName}</div>
        <div className="td">{this.props.employee.description}</div>
        <div className="td delete">
          <button onClick={this.delete}>❌</button>
        </div>
      </div>
    );
  }
}

exports.Employee = Employee;
