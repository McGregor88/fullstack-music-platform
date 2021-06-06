import { combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';

import { playerReducer } from './playerReducer';
import { trackReducer } from './trackReducer';

const rootReducer = combineReducers({
    player: playerReducer,
    track: trackReducer
});

export const reducer = (state, action) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state, // use previous state
            ...action.payload, // apply delta from hydration
        };
        // preserve count value on client side navigation
        if (state.count) nextState.count = state.count;

        return nextState;
    } else {
        return rootReducer(state, action);
    }
};

export type RootState = ReturnType<typeof rootReducer>;