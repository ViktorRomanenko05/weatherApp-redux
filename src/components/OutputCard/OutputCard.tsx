import {
    ResultWrapper,
    WeatherParametersContainer,
    TemperatureContainer,
    CityNameContainer,
    ContentContainer,
    ErrorAlert,
    ErrorMessage,
    ErrorContainer,
    WeatherResultsWrapper
} from "./styles";
import {OutputCardProps} from "./types";

function OutputCard({cityName, temperature, children, error}: OutputCardProps) {
    return (
        <ResultWrapper>
            {error ? (
                    <ErrorContainer>
                        <ErrorAlert>API error</ErrorAlert>
                        <ErrorMessage>{error}</ErrorMessage>
                    </ErrorContainer>) :
                (<WeatherResultsWrapper>
                        <WeatherParametersContainer>
                            <TemperatureContainer>18°</TemperatureContainer>
                            <CityNameContainer>Colorado</CityNameContainer>
                        </WeatherParametersContainer>
                        <ContentContainer bgImage="src/assets/clouds.png"/>
                    </WeatherResultsWrapper>
                )}
        </ResultWrapper>
    );
}

export default OutputCard;