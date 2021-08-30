const React = require("react");
const ReactDOM = require("react-dom");
const axios = require("axios");
const { EmployeeList } = require("./EmployeeList");
const { SubmitForm } = require("./SubmitForm");
const stompClient = require("./websocket-listener");
// import "../resources/static/main.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { employees: [] };

    this.refresh = this.refresh.bind(this);
  }

  componentDidMount() {
    // Axios API call
    axios.get("/api/employees").then((res) => {
      this.setState({ employees: res.data._embedded.employees });
    });

    // WebSocket
    stompClient.register([
      { route: "/topic/newEmployee", callback: this.refresh },
      { route: "/topic/deleteEmployee", callback: this.refresh },
    ]);
  }

  refresh() {
    axios.get("/api/employees").then((res) => {
      console.log(res);
      this.setState({ employees: res.data._embedded.employees });
    });
  }

  render() {
    return (
      <div className="App">
        <EmployeeList refresh={this.refresh} employees={this.state.employees} />
        <SubmitForm refresh={this.refresh} />
      </div>
    );
  }
}

// React initialization
ReactDOM.render(<App />, document.getElementById("react"));
