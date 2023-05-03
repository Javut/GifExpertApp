import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas en <AddCategory />', () => {

    test('Debe de cambiar el valor de la caja de texto ', () => {
      
        render(<AddCategory onNewCategory={() => {}}/>);
        const input = screen.getByRole('textbox');

        fireEvent.input(input, {target: {value: 'Saitama'} });
        expect(input.value).toBe('Saitama');
        screen.debug();

    })

    test('debe de llamar onNewCategory si el input tiene un valor ', () => {

        const inputValue = 'Saitama';

        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory}/>);
        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input(input, {target: {value: inputValue } });
        fireEvent.submit(form);

        expect(input.value).toBe('');

        expect(onNewCategory).toHaveBeenCalled(); //Esto hace referencia a que se esperaria que la función haya sido llamada
        expect(onNewCategory).toHaveBeenCalledTimes(1); //Esto hace referencia a que se esperaria que la función haya sido llamada por lo menos una vez
        // expect(onNewCategory).toHaveBeenCalledWith(inputValue); //Esto hace referencia a que se esperaria que la función haya sido llamada con el valor indicado en los params
      
    })


    test('No debe de llamar el onNewCategory si el imput está vacio', () => {

        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory}/>);

        const form = screen.getByRole('form')

        // fireEvent.input(input, {target: {value: '' } });
        fireEvent.submit(form);

        // expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled();

      
    })
    
    
    
  
})
