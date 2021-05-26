/*import { Context, createWrapper, MakeStore } from 'next-redux-wrapper';
import { createStore } from 'redux';

import { reducer, RootState } from './reducers';

const makeStore: MakeStore<RootState> = (context: Context) => createStore(reducer);
export const wrapper = createWrapper<RootState>(makeStore, { debug: true });*/

import { Context, createWrapper } from 'next-redux-wrapper';
import { createStore, Store } from 'redux';

import { reducer, RootState } from './reducers';

const makeStore = (context: Context) => createStore(reducer);
export const wrapper = createWrapper<Store<RootState>>(makeStore, { debug: true });