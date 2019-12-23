import React from 'react';
import { shallow, mount, render} from 'enzyme';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from '../src/components/App';
/** test to check that we don't broke our code in the evolution */


/* snapshot tool let us to follow the evlution of our app,
 it compare the dom of our component save in file snap and the actual dom*/

/* test de rendu*/
describe('App', () => {
it('App should render correctly', () => {
  const tree = renderer
    .create(<App />).toJSON();//use render() of component
  expect(tree).toMatchSnapshot();
});
/* test de fonctionnalité*/
 it('renders App', () => {
     const wrapper = shallow(<App optInValue={true} authenticated={true}/>);

     expect(wrapper.length).toEqual(1);   
  }); 



});
