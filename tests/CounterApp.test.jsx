import { fireEvent, render, screen } from "@testing-library/react"
import { CounterApp } from "../src/CounterApp";


describe('pruebas en CounterApp', () => {
    const initialValue = 10;
    const value = 100;
    test('debe hacer match con el snapshot', () => {
        const {container} = render(<CounterApp value={initialValue}></CounterApp>);
        expect(container).toMatchSnapshot();
    })

    test('debe mostrar el valor inicial de 100', () => {
        render(<CounterApp value={value}></CounterApp>);
        expect(screen.getByText('100')).toBeTruthy();
    } )

    test('se debe incrementar el valor en +1', () => {
        render(<CounterApp value={initialValue}></CounterApp>);
        fireEvent.click( screen.getByText('+1'));
        expect(screen.getByText('11')).toBeTruthy();
    })

    test('se debe decrementar el valor en -1', () => {
        render(<CounterApp value={initialValue}></CounterApp>);
        fireEvent.click( screen.getByText('-1'));
        expect(screen.getByText('9')).toBeTruthy();
    })

    test('debe funcionar el boton de reset', () => {
        render(<CounterApp value={initialValue}></CounterApp>);
        fireEvent.click( screen.getByText('+1'));
        fireEvent.click( screen.getByText('+1'));
        fireEvent.click( screen.getByText('+1'));
        fireEvent.click( screen.getByText('Reset'));
        expect(screen.getByText(initialValue)).toBeTruthy();
    })
})