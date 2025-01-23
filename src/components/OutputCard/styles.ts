import styled from "@emotion/styled";
import {OutputCardProps} from "./types";

export const ResultWrapper = styled.div`
    display: flex;
    width: 710px;
    background-color: rgba(11, 27, 52, 0.48); //#122D4D разложенный в rgb
    backdrop-filter: blur(8px);
    border-radius: 20px;
    padding: 20px;
`

export const WeatherAndImageWrapper = styled.div`
    display: flex;
    gap: 130px;
`

export const WeatherResultsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const WeatherParametersContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 76px;
    width: 90px;
    color: #FFFFFF
`

export const TemperatureContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 57px;
    font-weight: 500;
    width: 57px;
    height: 90px;
`

export const CityNameContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 700;
    width: 100px;
    height: 19px;
    margin-bottom: 10px;
`

export const ContentContainer = styled.div<OutputCardProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80px;
    width: 270px;
    margin-bottom: 20px;
    margin-left: 100px;
    background-image: url(${(props) => props.bgImage});
    background-size: 90px;
    background-position: center;
    background-repeat: repeat;
`

export const ErrorContainer = styled.div`
display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
`

export const ErrorAlert = styled.p`
    font-size: 57px;
    font-weight: 500;
    color: #F35E5E;
`

export const ErrorMessage = styled.p`
    font-size: 18px;
    font-weight: 400;
    color: #FFFFFF;
    margin-bottom: 20px;
`

export const ButtonsWrapper = styled.div`
display: flex;
    justify-content: center;
    align-items: center;
    gap: 130px;
    width: 100%;
    margin-left: 50px;
`

export const ButtonWrapper = styled.div`
    min-width: 155px;
`