import { Action } from '@ngrx/store';
import { User } from '../models/user.model';

export enum StoreActionsEnum {
  UPDATE_USER = 'UPDATE_USER'
}

export class UpdateUser implements Action {
  readonly type = StoreActionsEnum.UPDATE_USER;

  constructor(public payload: User) { }
}

export type StoreActions = UpdateUser;