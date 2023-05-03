import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components";
import { GifExpertApp } from "../../src/GifExpertApp"

describe('Pruebas en el componente <GifExpertApp />', () => {

    const title = 'GifExpertApp';
    const onNewCategory = jest.fn();

    test('Debe renderizar el title de la pagina ', () => {

        render(<GifExpertApp/>);

        const headingText = screen.getByText('GifExpertApp');

        expect(headingText).toMatchSnapshot();
      
    })


    test('Debe renderizar los componentes de la pagina ', () => {

        render(<GifExpertApp/>);
        const button = screen.getByRole('button')

        const headingText = screen.getByText('GifExpertApp');

        expect(headingText).toMatchSnapshot();
        // expect(<AddCategory/>).toBeTruthy();
        expect(button).toBeTruthy();
      
    })

    const newCategory = "Saitama";

    test('should Add new categories', () => {

        render(<GifExpertApp/>);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: newCategory } });
        fireEvent.submit(form);

        fireEvent.input(input, {target: {value: newCategory + '2' } });
        fireEvent.submit(form);

        expect(screen.getAllByRole('heading', {level: 3}).length).toBe(3);

      
    })

    test('should no Add repeat category', () => {

        render(<GifExpertApp/>);
        screen.debug();
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: newCategory } });
        fireEvent.submit(form);

        fireEvent.input(input, {target: {value: newCategory } });
        fireEvent.submit(form);

        expect(screen.getAllByRole('heading', {level: 3}).length).toBe(2);


      
    })
    
    
  
})
