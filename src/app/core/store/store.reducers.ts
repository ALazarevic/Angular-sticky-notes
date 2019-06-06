import { StoreActions, StoreActionsEnum } from './store.actions'
import { User } from '../models/user.model';

export interface AppState {
  store: State;
}

export interface State {
  user: User;
}

const initialState = {
  user: null
}

export function storeReducers(state = initialState, action: StoreActions) {
  switch (action.type) {
    case StoreActionsEnum.UPDATE_USER:
      return {
        ...state,
        user: action.payload
      }
    default:
      return state;
  }
}