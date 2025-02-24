import {
    ResultWrapper,
    WeatherParametersContainer,
    TemperatureContainer,
    CityNameContainer,
    ContentContainer,
    ErrorAlert,
    ErrorMessage,
    ErrorContainer,
    WeatherResultsWrapper,
    WeatherAndImageWrapper,
    ButtonsWrapper,
    ButtonWrapper
} from "./styles";
import {OutputCardProps} from "./types";
import Button from "../Button/Button";

function OutputCard({
                        cityName,
                        temperature,
                        bgImage,
                        error,
                        onDeleteClick,
                        onSaveClick,
                        cardAtHomePage
                    }: OutputCardProps) {
    return (
        (cityName || error) && <ResultWrapper>
            {error ? (
                    <ErrorContainer>
                        <ErrorAlert>API error</ErrorAlert>
                        <ErrorMessage>{error}</ErrorMessage>
                        <ButtonWrapper>
                            <Button name="Delete" onClick={onDeleteClick} backgroundColor="rgba(255, 255, 255, 0.0)"
                                    border={true}/>
                        </ButtonWrapper>
                    </ErrorContainer>) :
                (<WeatherResultsWrapper>
                        <WeatherAndImageWrapper>
                            <WeatherParametersContainer>
                                <TemperatureContainer>{temperature}°</TemperatureContainer>
                                <CityNameContainer>{cityName}</CityNameContainer>
                            </WeatherParametersContainer>
                            <ContentContainer bgImage={bgImage}/>
                        </WeatherAndImageWrapper>
                        <ButtonsWrapper>
                            {cardAtHomePage &&
                                <ButtonWrapper>
                                    <Button name="Save" backgroundColor="rgba(255, 255, 255, 0.0)" onClick={onSaveClick}
                                            border={true}/>
                                </ButtonWrapper>
                            }
                            <ButtonWrapper>
                                <Button name="Delete" backgroundColor="rgba(255, 255, 255, 0.0)" onClick={onDeleteClick}
                                        border={true}/>
                            </ButtonWrapper>
                        </ButtonsWrapper>
                    </WeatherResultsWrapper>
                )}
        </ResultWrapper>
    );
}

export default OutputCard;