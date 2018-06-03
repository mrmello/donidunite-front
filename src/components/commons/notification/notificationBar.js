import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Store from '../../../store';
import { hideFeedback } from './notificationBarActions'

const styles = theme => ({
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4,
  },
});

class NotificationBar extends React.Component {

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    Store.dispatch(hideFeedback())
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={this.props.open}
        autoHideDuration={6000}
        onClose={this.handleClose}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">{ this.props.message }</span>}
        action={[
          <Button key="undo" color={ this.props.color } size="small" onClick={this.handleClose}>
            OK
          </Button>,
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            className={classes.close}
            onClick={this.handleClose}
          >
          <CloseIcon />
          </IconButton>,
        ]}
      />
      </div>
    );
  }
}

NotificationBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    open: state.notification.showBar,
    color: state.notification.color,
    message: state.notification.message,
  };
}
export default connect(mapStateToProps, null)(withStyles(styles)(NotificationBar));
