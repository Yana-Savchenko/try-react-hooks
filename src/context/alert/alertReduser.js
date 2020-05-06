import { SHOW_ALERT, HIDE_ALERT } from "../types";


const handlers = {
  [SHOW_ALERT]: (state, action) => action.payload,
  [HIDE_ALERT]: () => null,
  DEAULT: state => state,
}

export const alertReduser = (state, action) => {

  const handler = handlers[action.type] || handlers.DEAULT;
  return handler(state, action);

}