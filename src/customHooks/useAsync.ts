import React from 'react';

/**
 *
 * Custom Hook for async api calls to replace redux-saga pattern. See below example for use in component.
 * const state = useAsync(fetchApiData);
 * const { loading, data, error } = state;
 *
 */

const asyncReducer = (_, action) => {
  switch (action.type) {
    case 'LOADING': {
      return { loading: true, data: null, error: null };
    }
    case 'SUCCESS': {
      return { loading: false, data: action.data, error: null };
    }
    case 'ERROR': {
      return { loading: false, data: null, error: action.error };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export const useAsync = asyncCallback => {
  const [state, dispatch] = React.useReducer(asyncReducer, {
    data: null,
    loading: false,
    error: null,
  });
  React.useEffect(() => {
    dispatch({ type: 'LOADING' });
    asyncCallback().then(
      data => {
        dispatch({ type: 'SUCCESS', data });
      },
      error => {
        dispatch({ type: 'ERROR', error });
      },
    );
  }, [asyncCallback]);
  return state;
};
