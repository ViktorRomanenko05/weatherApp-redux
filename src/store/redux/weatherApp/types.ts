export interface WeatherParameters {
    id: string,
    city: string,
    temperature: string,
    image: string
}

export interface weatherAppSliceData {
    weather: WeatherParameters,
    error: any,
    status: "default" | "loading" | "success" | "error"
}