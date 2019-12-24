import React from 'react';
import { shallow, mount, render} from 'enzyme';
import renderer from 'react-test-renderer';
import Login from '../src/components/Login';

/** test to check that we don't broke our code in the evolution */

/* mock = simulating  */



/*------ mock function --------*/

const onSubmitMock = jest.fn();
const initMock = jest.fn();


/*------ mock event -----------*/

//the code testing uses the event so we have to mock it 
// mock method preventDefault() of event
const fakeEvent = { preventDefault: () => "" };

const props = {
  pseudo : "", 
  password : "", 
  loggedin: false, 
  subscriber:true, 
  onSubmit: () => onSubmitMock(), 
  error:"", 
  init: () => initMock()
};

const formState = {pseudo: "", password: "", loggedin: false, subscriber: true};

/* snapshot */

/* snapshot tool let us to follow the evlution of our app,
 it compare the dom of our component save in file snap and the actual dom*/

describe('Login', () => {
it('Login should render correctly', () => {
  const tree = renderer
    .create(<Login {...props}/>)
    .toJSON(); 
  expect(tree).toMatchSnapshot();
});

/* unit test*/

 it('renders Login', () => {
     const wrapper = shallow(<Login  {...props}/>);
     expect(wrapper.length).toEqual(1);   
  }); 

it('should render 2 input ', () => {
     const wrapper = shallow(<Login {...props}/>);
      expect(wrapper.find("label").length).toBe(2);   
  }); 
  
  it('Should call "onSubmit" inside the handleSubmit (the props) when submit form', () => {
    const wrapper = shallow(<Login {...props}/>);
    wrapper.find('form').simulate('submit', fakeEvent);
    expect(onSubmitMock).toHaveBeenCalled();
  }); 

it('Should be equal to value before change ' , () => {
    const wrapper = shallow(<Login {...props}/>);
    expect(wrapper.find('.input').at(0).prop('value')).toEqual('');
    
  }); 


});
