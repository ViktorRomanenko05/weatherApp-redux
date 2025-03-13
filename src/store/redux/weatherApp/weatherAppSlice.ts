import {createAppSlice} from "../../createAppSlice";
import {WeatherData, WeatherAppSliceState} from "./types";
import axios from "axios";
import {v4} from "uuid";
import {PayloadAction} from "@reduxjs/toolkit";

const APP_ID = "cb8949512c5f49588b3735c24ccab5c3";

const weatherAppInitialState: WeatherAppSliceState = {
    weatherHistory: [],
    currentValue: {
        city: "",
        temperature: 0,
        image: ""
    },
    error: undefined,
    status: "default",
}

export const weatherAppSlice = createAppSlice({
    name: "WEATHER_APP",
    initialState: weatherAppInitialState,
    reducers: create => ({
        getWeather: create.asyncThunk(
            async (city: string, thunkApi) => {

                try {
                    const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APP_ID}`);
                    return result.data;
                } catch (error: any) {
                    return thunkApi.rejectWithValue(error)
                }
            },
            {
                pending: (state: WeatherAppSliceState, action: any) => {
                    state.status = 'loading'
                    state.error = undefined
                },
                fulfilled: (state: WeatherAppSliceState, action: any) => {
                    state.status = 'success'
                    state.currentValue.city = action.payload.name;
                    state.currentValue.temperature = Math.round(action.payload.main.temp - 273.15);
                    state.currentValue.image = `http://openweathermap.org/img/w/${action.payload.weather[0].icon}.png`
                },
                rejected: (state: WeatherAppSliceState, action: any)=> {
                    if (action.payload.response?.data) {
                        state.error = `${action.payload.response.data.cod} ${action.payload.response.data.message}`;
                    } else {
                        state.error = action.payload?.message || "Unknown error";
                    }
                    state.status = "default";
                    state.currentValue.city = "";
                    state.currentValue.temperature = NaN;
                    state.currentValue.image = "";
                }
            }
        ),

        clearHistory: create.reducer((state: WeatherAppSliceState) => {state.weatherHistory = []}),

        deleteCard: create.reducer((state: WeatherAppSliceState, action: PayloadAction<string>) => {
            state.weatherHistory = state.weatherHistory.filter((card: WeatherData) => card.id !== action.payload);
        }),

        deleteResult: create.reducer ((state: WeatherAppSliceState)=>{
            state.currentValue.city = "";
            state.currentValue.temperature = 0;
            state.currentValue.image = "";
            state.error = undefined;
        }),

        saveResult: create.reducer((state: WeatherAppSliceState) => {
            state.weatherHistory = [{id: v4(),...state.currentValue}, ...state.weatherHistory];
            state.currentValue.city = "";
            state.currentValue.temperature = NaN;
            state.currentValue.image = "";
        }),

    }),

    selectors: {
        weatherParameters: (state: WeatherAppSliceState)=> state,
    }
})

export const weatherAppSliceActions = weatherAppSlice.actions;
export const weatherAppSliceSelectors = weatherAppSlice.selectors;

