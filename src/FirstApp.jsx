//import { Fragment } from "react";
import PropTypes from 'prop-types';

const newMessage = {
    message: 'Hola Mundo',
    title: 'Jessica Cala'
};

const getResult = (a, b) => {
    return a + b 
}

export const FirstApp = ( {title, subTitle, name } ) => {

    return (
        <>
        <h1 data-testid="test-title">{ title }</h1>
        {/* <h1> {getResult(1,2)} </h1>
        { <code>{  JSON.stringify(newMessage) }</code> } */}
            <p>{subTitle }</p>
            <p>{subTitle }</p>
            <p>{name}</p>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
}

FirstApp.defaultProps = {
    title: 'No hay titulo',
    subTitle: 'No hay subtitulo',
}