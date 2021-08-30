const React = require("react");
const { Employee } = require("./Employee");

class EmployeeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { employees: [] };
  }

  componentDidUpdate(prevProps) {
    if (prevProps == this.props) return;
    this.setState({ employees: this.props.employees });
    console.log("Employee list updated.");
  }

  render() {
    const employees = this.state.employees.map((employee) => (
      <Employee
        key={employee._links.self.href}
        employee={employee}
        refresh={this.props.refresh}
      />
    ));
    return (
      <div className="list">
        <div className="thead">
          <div className="td">Nome</div>
          <div className="td">Cognome</div>
          <div className="td">Ruolo</div>
        </div>
        {employees}
      </div>
    );
  }
}

exports.EmployeeList = EmployeeList;
