import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { User } from '../interfaces/model-interface';

export const addUser = createAction('[Users flow] insert new', props<{newUser: User}>());
export const clearuser = createAction('[Users flow] clear');
export const editUser = createAction('[Users flow] edit user', props<{userEdited: Update<User>}>());
export const pickUser = createAction('[Users flow] pick user', props<{userPicked: User}>());

