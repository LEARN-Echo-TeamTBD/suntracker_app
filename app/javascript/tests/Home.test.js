import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../pages/Home';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('Renders a welcome title', ()=>{
    const app = mount(<Home />)
    expect(app.find('h1').text()).toEqual('Welcome to Suntracker')
})
