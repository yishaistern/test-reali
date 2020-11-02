import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { User } from '../interfaces/model-interface';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as actions from './actions';

export interface State extends EntityState<User>  {
    currentUser: string;
    ids: string[];
    entities: any;
}


export interface AppState {
    userManage: State;
  }

export const adapter: EntityAdapter<User> = createEntityAdapter<User>({
    selectId: selectUserId,
    sortComparer: sortByName,
});

export const initialState: State = adapter.getInitialState({
    // additional entity state properties
    currentUser: '',
    ids: [],
    entities: {}
  });


export function selectUserId(a: User): string {
    return a.firstName + '_' + a.lastName;
  }

export function sortByName(a: User, b: User): number {
    return a.lastName.localeCompare(b.lastName);
}



const userReducer = createReducer(
    initialState,

    on(actions.addUser, (state, { newUser }) => {
        return adapter.addOne(newUser, state);
    }),
    on(actions.clearuser, (state) => {
      return {...state, currentUser: ''};
  }),
    on(actions.editUser, (state, { userEdited }) => {
      return adapter.updateOne(userEdited, state);
  }),
    on(actions.pickUser, (state, { userPicked }) => {
      const picked = userPicked.firstName + '_' + userPicked.lastName;
      return {...state, currentUser: picked};
  }),

);

export function reducer(state: State | undefined, action: Action) {
    return userReducer(state, action);
}

export const selectFeature = createFeatureSelector<AppState, State>('userManage');

export const selectusers = createSelector(
  selectFeature,
  (state: State) => state.ids
);

export const selectusersEntity = createSelector(
  selectFeature,
  (state: State) => state.entities
);

export const selectCurrentuser = createSelector(
    selectFeature,
    (state: State) => state.currentUser
);

export const selectAllUserState = createSelector(
  selectFeature,
  (state: State) => state
);




