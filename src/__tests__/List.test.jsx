import React, { Component } from 'react';
import { render } from '@testing-library/react';
import DataManager from '../components/DataManager';
import List from '../components/List';

describe('Task List', () => {
    it('renders a list of tasks', () => {
        const dataManager = new DataManager();
        dataManager.addTasks('Bring Umbrella');
        dataManager.addTasks('Pick up mama');
        const component = render(<List tasks={dataManager.getTasks()} />);
        expect(component.getByTestId('task-0').textContent).toBe('Bring Umbrella');
    })
});