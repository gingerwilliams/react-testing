import React, { Component } from 'react';
import AddForm from '../components/AddForm';
import { render, fireEvent } from '@testing-library/react';

describe('AddForm add new tasks', () => {
    let component;

    //test that the component has rendered
    it('Component renders', () => {
        component = render(<AddForm />);
    });

    it('User can enter a new task item', () => {
        //Queries the target element 
        //fire an event that triggers handleChange  
        const taskInput = component.getByPlaceholderText("add task");
        fireEvent.change(taskInput, {
            target: {
                value: "Grocery Shopping"
            }
        });
        expect(taskInput.value).toBe("Grocery Shopping");
        // component.debug();
    });

    afterAll(() => {
        component.unmount(); //unmount component
    }); //after all tests are run

})