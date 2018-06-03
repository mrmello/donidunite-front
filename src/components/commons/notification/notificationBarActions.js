import types from '../../../actions/types';

export const showSuccessFeedback = () => ({
  type: types.OPERATION_SUCCEEDED
})

export const showFailureFeedback = () => ({
  type: types.OPERATION_FAILED
})

export const hideFeedback = () => ({
  type: types.HIDE_FEEDBACK
})
