import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import OutputCard from "../../components/OutputCard/OutputCard";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {weatherAppSliceActions, weatherAppSliceSelectors} from "../../store/redux/weatherApp/weatherAppSlice";


import type {WeatherSearchValue} from "./types";
import {WEATHER_SEARCH_VALUE_NAME} from "./types";

import {HomepageElementsWrapper, SearchForm, InputWrapper, ButtonWrapper} from "./styles";
import Spinner from "../../components/Spinner/Spinner";

import {useFormik} from "formik";
import * as Yup from 'yup';

function Home() {
    const dispatch = useAppDispatch();

    const {currentValue, error, status} = useAppSelector(weatherAppSliceSelectors.weatherParameters);
    const {city, temperature, image} = currentValue;

    let loading = false;

    if (status === "loading"){
        loading = true;
    }

    const getWeather = (value: string) => dispatch(weatherAppSliceActions.getWeather(value));
    const deleteClick = () => dispatch(weatherAppSliceActions.deleteResult());
    const saveClick = () => dispatch(weatherAppSliceActions.saveResult());

    const scheme = Yup.object().shape({
        [WEATHER_SEARCH_VALUE_NAME.CITY_NAME]: Yup.string()
            .trim()
            .required("Search field is empty")
            .min(2, "City name is too short")
            .max(30, "City name is too long")
    })
    const formik = useFormik({
        initialValues: {
            [WEATHER_SEARCH_VALUE_NAME.CITY_NAME]: "",
        } as WeatherSearchValue,
        validationSchema: scheme,
        validateOnChange: false,
        onSubmit: (values, {resetForm}) => {
            getWeather(values[WEATHER_SEARCH_VALUE_NAME.CITY_NAME]);
            resetForm();
        }
    });

    return (
        <HomepageElementsWrapper>
            <SearchForm onSubmit={formik.handleSubmit}>
                <InputWrapper>
                    <Input name={WEATHER_SEARCH_VALUE_NAME.CITY_NAME}
                           onChange={formik.handleChange}
                           placeholder="City"
                           value={formik.values[WEATHER_SEARCH_VALUE_NAME.CITY_NAME]}
                           error={formik.errors[WEATHER_SEARCH_VALUE_NAME.CITY_NAME]}/>
                </InputWrapper>
                <ButtonWrapper>
                    <Button name="Search" type="submit" backgroundColor="#3678B4" spinner={<Spinner/>} loading={loading} disabled={loading}/>
                </ButtonWrapper>
            </SearchForm>
            <OutputCard cardAtHomePage={true}
                        cityName={city}
                        temperature={temperature}
                        bgImage={image}
                        error={error}
                        onDeleteClick={deleteClick}
                        onSaveClick={saveClick}/>
        </HomepageElementsWrapper>
    )
}

export default Home;