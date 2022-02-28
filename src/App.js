import React, { Component } from "react";
import {
  Header,
  Home,
  Service,
  Portfolio,
  Testimonial,
  Contact,
} from "./components";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  withRouter,
} from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.js";

const HeaderWithRouter = withRouter(Header);
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollTop: 0,
    };
  }
  onScroll = (e) => {
    const scrollTop = e.target.scrollTop;
    this.setState({
      scrollTop: scrollTop,
    });
  };
  render() {
    return (
      <Router>
        <div className="App d-flex flex-column" onScroll={this.onScroll}>
          <HeaderWithRouter scrollTop={this.state.scrollTop} />
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/service" component={Service} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/testimonial" component={Testimonial} />
            <Route path="/contact" component={Contact} />
            <Redirect to="/home" />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
