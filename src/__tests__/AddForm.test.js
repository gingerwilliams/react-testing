import React, { Component } from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import AddForm from '../components/AddForm';
import DataManager from '../components/DataManager';

describe('AddForm', () => {

    //test that the component has rendered
    it('can mount', () => {
        const component = render(<AddForm />);
    });

    it('can enter a new task item', () => {
        //render the component
        const component = render(<AddForm />);

        //Queries the target element 
        //fire an event that triggers handleChange  
        const taskInput = component.getByPlaceholderText("add a new task");
        fireEvent.change(taskInput, {
            target: {
                value: "Grocery Shopping"
            }
        });
        expect(taskInput.value).toBe("Grocery Shopping");
        // component.debug();
    });

    it('can submit a new task', () => {
        //pass prop to component
        const dataManager = new DataManager();
        //render the component
        const component = render(<AddForm dataManager={dataManager} />);
        //find the input
        const taskInput = component.getByPlaceholderText("add a new task");
        //fire a change event on the input and update value
        fireEvent.change(taskInput, {
            target: {
                value: "Grocery Shopping"
            }
        });

        console.log(taskInput.value);
        // find the submit button 
        //const submit = component.getByTestId("submit");
        // fire a click event on the submit button
        fireEvent.click(component.getByTestId("submit"));

        console.log(localStorage.getItem('tasks'));

        const tasks = JSON.parse(localStorage.getItem('tasks'));

        expect(tasks.length).toBe(1);
        expect(tasks[0]).toBe('Grocery Shopping');

    });

    afterEach(cleanup)

})