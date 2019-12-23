import React from 'react';
import { shallow, mount, render} from 'enzyme';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Login from '../src/components/Login';


/* snapshot */

describe('Login', () => {
it('Login should render correctly', () => {
  const tree = renderer
    .create(<Login />)
    .toJSON(); 
  expect(tree).toMatchSnapshot();
});

/* unit test*/
 it('renders Login', () => {
     const wrapper = shallow(<Login optInValue={true} authenticated={true}/>);
     expect(wrapper.length).toEqual(1);   
  }); 
  
it('should render all 2 input ', () => {

     const wrapper = shallow(<Login />);
      expect(wrapper.find("label").length).toBe(2);   
  }); 
// for testing state only in class component
});
