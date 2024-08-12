import { createReducer, on } from '@ngrx/store';
import {changeStateSidePanel, closeSidePanel, openSidePanel} from './home.actions';

export interface StateSideMenu {
  sidePanel: boolean
}

export const initialState: StateSideMenu = {
  sidePanel: true
}

export const sideMenuReducer = createReducer(
  initialState,
  on(closeSidePanel, (state) => ({...state, sidePanel: false})),
  on(openSidePanel, (state) => ({...state, sidePanel: true})),
  on(changeStateSidePanel, (state) => ({...state, sidePanel: !state.sidePanel})),
);
