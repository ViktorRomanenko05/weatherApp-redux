export interface WeatherData {
    id: string,
    city: string,
    temperature: number,
    image: string
}

export interface WeatherAppSliceState {
    weatherHistory: WeatherData [],
    currentValue:{
    city: string,
    temperature: number,
    image: string},
    error: any,
    status: "default" | "loading" | "success" | "error"
}