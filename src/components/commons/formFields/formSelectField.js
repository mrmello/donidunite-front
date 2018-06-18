import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class SelectField extends React.Component {

  render() {
    const {
      classes,
      input,
      categories,
      label,
      className,
      categoryType,
      meta: { touched, error },
      displayBy,
      saveBy,
      ...custom
    } = this.props;

    const filterCategory = (item) => {
      if (categoryType) {
        return item.type === categoryType;
      }
      return true
    }

    return (
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor={label}>{label}</InputLabel>
        <Select
          className={className}
          error={touched && error != null}
          style={styles.selectField}
          {...input}
          {...custom}
          inputProps={{
            id: label,
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {
            categories.filter(filterCategory).map((category) => {
              return (
                <MenuItem key={category._id} value={category[saveBy]}>{category[displayBy]}</MenuItem>
              )
            })
          }
        </Select>
      </FormControl>
    );
  }
}

SelectField.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SelectField);
