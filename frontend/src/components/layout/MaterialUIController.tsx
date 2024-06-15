import { createContext, useContext, useReducer } from 'react';

const MaterialUIControllerContext = createContext(null);

export const useMaterialUIController = () => useContext(MaterialUIControllerContext);

export const setMiniSidenav = (dispatch, value) => dispatch({ type: 'SET_MINI_SIDENAV', value });
export const setTransparentSidenav = (dispatch, value) => dispatch({ type: 'SET_TRANSPARENT_SIDENAV', value });
export const setWhiteSidenav = (dispatch, value) => dispatch({ type: 'SET_WHITE_SIDENAV', value });

const initialState = {
  miniSidenav: false,
  transparentSidenav: false,
  whiteSidenav: false,
  darkMode: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_MINI_SIDENAV':
      return { ...state, miniSidenav: action.value };
    case 'SET_TRANSPARENT_SIDENAV':
      return { ...state, transparentSidenav: action.value };
    case 'SET_WHITE_SIDENAV':
      return { ...state, whiteSidenav: action.value };
    default:
      return state;
  }
};

export const MaterialUIControllerProvider = ({ children }) => {
  const [controller, dispatch] = useReducer(reducer, initialState);
  return (
    <MaterialUIControllerContext.Provider value={[controller, dispatch]}>
      {children}
    </MaterialUIControllerContext.Provider>
  );
};
