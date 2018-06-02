import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import MiniDrawer from '../components/navigation_menu/components/mini-drawer'
import { withStyles } from '@material-ui/core/styles';
import withRoot from './withRoot';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
});

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <MiniDrawer />
      </BrowserRouter>
    )
  }
}

export default withRoot(withStyles(styles)(App));