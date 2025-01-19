import {ReactNode} from "react";

export interface OutputCardProps{
    temperature?: string;
    cityName?: string;
    children?: ReactNode;
    error?: string;
    bgImage:string;
}