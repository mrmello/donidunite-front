import React, { Fragment } from 'react'
import ButtonEdit from './buttonEdit'
import ButtonDelete from './buttonDelete'

const EditAndDeleteButtons = ({toEdit, toDelete, deleteAction, editAction}) => {
  return (
    <Fragment>
      <ButtonEdit payload={toEdit} action={editAction}/>
      <ButtonDelete payload={toDelete} action={deleteAction}/>
    </ Fragment>
  )
}

export default EditAndDeleteButtons