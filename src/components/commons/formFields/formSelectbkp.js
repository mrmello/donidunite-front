import React, { Fragment } from 'react'
import { Select, MenuItem, InputLabel, Avatar } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const styles = {
  selectField: {
    marginRight: "10px",
    minWidth: "100px"
  }
}

const FormSelectField = ({
  input,
  categories,
  label,
  className,
  categoryType,
  meta: { touched, error },
  ...custom
}) => {
  const filterCategory = (item) => {
    if (categoryType) {
      return item.type === categoryType;
    }
    return true
  }

  const handleAddCategoryClick = (e) => {
    console.log(e)
  }
  return (
    <Fragment>
      <InputLabel className={className}>{label}:</ InputLabel>
      <br />
      <Select
        className={className}
        error={touched && error}
        style={styles.selectField}
        {...input}
        {...custom}
      >
        {
          categories.filter(filterCategory).map((category) => {
            return (
              <MenuItem key={category._id} value={category._id}>{category.type}</MenuItem>
            )
          })
        }
        <MenuItem key="add" value="add">
          <Avatar>
            <AddIcon onClick={(e) => handleAddCategoryClick(e)} />
          </ Avatar>
        </MenuItem>
      </ Select>
    </ Fragment>
  )
}

export default FormSelectField