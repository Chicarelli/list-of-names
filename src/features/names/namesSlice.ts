import { createSlice } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

export interface NamesState {
  value: string[];
}

const initialState: NamesState = {
  value: [],
}

export const namesSlice = createSlice({
  name: 'listNames',
  initialState,
  reducers: {
    addName: (state, action) => {
      state.value.push(action.payload);
    },

    popName: (state) => {
      state.value.pop();
    },

    removeByName: (state, action) => {
      state.value = state.value.filter((name) => name !== action.payload);
    },

    addIfNotExist: (state, action) => {
      const alreadyExists = state.value.find((name) => name === action.payload);

      if (alreadyExists) {
        state.value.push(action.payload);
      }
    }
  }
});

export const { addName, popName, removeByName, addIfNotExist } = namesSlice.actions;

export const selectName = (state: RootState) => state.name.value;

export default namesSlice.reducer;