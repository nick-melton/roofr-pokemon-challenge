import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    firstHero: null,
    secondHero: null,
    log: null
  },
  reducers: {
    setFirstHero: (state: any, action: PayloadAction<object>) => {
      state.firstHero = action.payload;
    },
    setSenondHero: (state: any, action: PayloadAction<object>) => {
      state.secondHero = action.payload;
    },
    setLog: (state: any, action: PayloadAction<string>) => {
      state.log = action.payload;
    }
  },
})

export const { setFirstHero, setSenondHero, setLog } = pokemonSlice.actions

export default pokemonSlice.reducer