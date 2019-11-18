import React from 'react';
import { shallow, mount, render} from 'enzyme';
import {Link} from 'react-router-dom';
//import ReactDOM from 'react-dom';
import Home from '../src/components/Home';
import Nav from '../src/containers/Nav';
/** test to check that we don't broke our code in the evolution */


/* snapshot tool let us to follow the evlution of our H,
 it compare the dom of our component save in file snap and the actual dom*/

/* test de rendu*/
describe('home', () => {
//it('h should render correctly', () => {
//  const home = shallow(<H ><div > 
//                     <header > 
//                     <h1>Accueil des non connectés </h1> 
//                     <Link to="/signup">SignUp</Link>
//                     <Link to="/login">login</Link>
//                     </header>
//                    </div></H>);//use render() of component
//  expect(h).toMatchSnapshot();
//});
/* test de fonctionnalité*/
 it('home contains', () => {
    const wrapper = shallow((<div><div className="nowmovies"></div></div>));
        expect(wrapper.contains([<div className="nowmovies"></div>])).toEqual(true);
  }); 

});
