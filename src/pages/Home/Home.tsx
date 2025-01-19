import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import OutputCard from "../../components/OutputCard/OutputCard";

import type {WeatherSearchValue} from "./types";
import {WEATHER_SEARCH_VALUE_NAME} from "./types";

import {HomepageElementsWrapper, SearchForm, InputWrapper, ButtonWrapper} from "./styles";

import {useFormik} from "formik";
import * as Yup from 'yup';
import Spinner from "../../components/Spinner/Spinner";

function Home() {
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
            resetForm();
        }
    });

    return (
        <HomepageElementsWrapper>
            <SearchForm onSubmit={formik.handleSubmit}>
                <InputWrapper>
                    <Input name={WEATHER_SEARCH_VALUE_NAME.CITY_NAME} onChange={formik.handleChange}
                           placeholder="City" value={formik.values[WEATHER_SEARCH_VALUE_NAME.CITY_NAME]}
                           error={formik.errors[WEATHER_SEARCH_VALUE_NAME.CITY_NAME]}/>
                </InputWrapper>
                <ButtonWrapper>
                    <Button name="Search" type="submit" backgroundColor="#3678B4" spinner={<Spinner />}/>
                </ButtonWrapper>
            </SearchForm>
            <OutputCard bgImage="src/assets/clouds.png"/>
        </HomepageElementsWrapper>
    )

}

export default Home;