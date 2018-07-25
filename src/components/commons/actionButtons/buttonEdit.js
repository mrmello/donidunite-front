import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Store from '../../../store'

const styles = () => ({
  button: {
    margin: 0,
  },
});

const ButtonEdit = props => {
  const { classes, action, payload} = props;
  const updateRecord = () => (
    Store.dispatch(action(payload))
  )

  return (
    <IconButton className={classes.button} aria-label="Editar" onClick={() => updateRecord()}>
      <EditIcon />
    </IconButton>
  )
}

ButtonEdit.propTypes = {
  classes: PropTypes.object.isRequired,
  payload: PropTypes.object.isRequired,
  action: PropTypes.func
};

export default withStyles(styles)(ButtonEdit)