import React from 'react';
import ReactDOM from 'react-dom';
import UserForm from '../pages/UserForm';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('Renders a loading screen without data', ()=>{
    const app = mount(<UserForm />)
    expect(app.find('h1').text()).toEqual('Loading...')
})
