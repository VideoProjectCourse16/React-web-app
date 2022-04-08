import * as React from 'react';
import { RootState } from '.';

// https://github.com/lionhard83/redux-with-toolkist-sample
export const selectFavourites = (state: RootState) => state.favourites;