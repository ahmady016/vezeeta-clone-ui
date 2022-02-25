import React from 'react'

function formReducer (state: any, { type, payload }: any) {
  switch (type) {
    case 'change':
      return {
        ...state,
        [payload.key]: payload.value
      }
    default:
      return state
  }
}

export default function useForm (initialState: {}) {
  const [state, dispatch] = React.useReducer(formReducer, initialState)
  const fields = Object.keys(initialState).reduce((fields: any, key) => {
    fields[key] = {
      id: key,
      name: key,
      value: state[key],
      onChange: (e: { target: { value: any } }) =>
        void dispatch({
          type: 'change',
          payload: { key, value: e.target.value }
        })
    }
    return fields
  }, {})
  return [fields, state]
}
