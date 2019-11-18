import React from 'react';
import { shallow, mount, render} from 'enzyme';
import {Link} from 'react-router-dom';
//import ReactDOM from 'react-dom';
import H from '../src/components/H';
/** test to check that we don't broke our code in the evolution */


/* snapshot tool let us to follow the evlution of our H,
 it compare the dom of our component save in file snap and the actual dom*/

/* test de rendu*/
describe('h', () => {
it('h should render correctly', () => {
  const h = shallow(<H ><div > 
                     <header > 
                     <h1>Accueil des non connectés </h1> 
                     <Link to="/signup">SignUp</Link>
                     <Link to="/login">login</Link>
                     </header>
                    </div></H>);//use render() of component
  expect(h).toMatchSnapshot();
});
/* test de fonctionnalité*/
 it('renders h', () => {
     const wrapper = shallow(<H optInValue={true} authenticated={true}/>);

     expect(wrapper.length).toEqual(1);   
  }); 

  it('h contains', () => {
    const wrapper = shallow((<header > 
                     <h1>Accueil des non connectés </h1>
                     </header>));
        expect(wrapper.contains(<h1>Accueil des non connectés </h1>)).toEqual(true);
  });

});
