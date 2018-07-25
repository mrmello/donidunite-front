import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Store from '../../../store'

const styles = () => ({
  button: {
    margin: 0,
  },
});

const ButtonAddToCart = props => {
  const { classes, action, payload} = props;

  const deleteRecord = () => (
    Store.dispatch(action(payload))
  )

  return (
    <IconButton className={classes.button} aria-label="Excluir" onClick={() => deleteRecord()}>
      <ShoppingCartIcon />
    </IconButton>
  )
}

ButtonAddToCart.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAddToCart)