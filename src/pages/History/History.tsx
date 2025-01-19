import Button from "../../components/Button/Button";
import OutputCard from "../../components/OutputCard/OutputCard";

import {HistoryContainer, CardsWrapper} from "./styles";

function History () {
    return(
<HistoryContainer>
<CardsWrapper>
    
</CardsWrapper>
    <Button name={"Delete all cards"} backgroundColor="#3678B4"/>
</HistoryContainer>
    )
}

export default History;