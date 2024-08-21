import { render, screen } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"


describe('Pruebas en firstApp', ()=> {
    const title = 'Hola, soy Goku'; 
    const subTitle= 'Soy un subtitulo';

    test('debe hacer match con el snapshot', ()=>{
        const {container} = render(<FirstApp title={title}></FirstApp>);

        expect(container).toMatchSnapshot();
    })

    test('debe mostrar el  mensaje hola, soy goku', ()=>{
       render(<FirstApp title={title}></FirstApp>)
       expect(screen.getByText(title)).toBeTruthy();
    })

    test('debe mostrar el titulo en un h1', ()=>{
        render(<FirstApp title={title}></FirstApp>)
        expect(screen.getByRole('heading',{level:1}).innerHTML).toContain(title);
    })

    test('debe mostrar el subtitulo enviado por props', ()=>{
        render(
            <FirstApp title={title}
                      subTitle={subTitle}
            >
            </FirstApp>);
        
        expect(screen.getAllByText(subTitle).length).toBe(2);
    })
})