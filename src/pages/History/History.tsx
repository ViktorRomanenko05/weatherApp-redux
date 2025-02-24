import Button from "../../components/Button/Button";
import OutputCard from "../../components/OutputCard/OutputCard";

import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {weatherAppSliceActions, weatherAppSliceSelectors} from "../../store/redux/weatherApp/weatherAppSlice";

import {HistoryContainer, CardsWrapper, ButtonContainer} from "./styles";
import {WeatherData} from "../../store/redux/weatherApp/types";

function History () {
    const dispatch = useAppDispatch();

    const {weatherHistory} = useAppSelector(weatherAppSliceSelectors.weatherParameters);

    const deleteClick = (id: string) => dispatch(weatherAppSliceActions.deleteCard(id));
    const deleteAllClick = () => dispatch(weatherAppSliceActions.clearHistory());

    return(
<HistoryContainer>
    <CardsWrapper>
    {weatherHistory.map((cardData: WeatherData)=>

    <OutputCard cityName={cardData.city} temperature={cardData.temperature} bgImage={cardData.image} key={cardData.id} onDeleteClick={()=>{deleteClick(cardData.id)}}/>
        )}
    </CardsWrapper>
    {(weatherHistory.length) &&
        <ButtonContainer>
        <Button name={"Delete all cards"} backgroundColor="#3678B4" onClick={deleteAllClick}/>
        </ButtonContainer>}
</HistoryContainer>
    )
}

export default History;