import React from 'react';
import { shallow} from 'enzyme';
import {Link} from 'react-router-dom';
import renderer from 'react-test-renderer';
//import ReactDOM from 'react-dom';
import H from '../src/components/H';
/** test to check that we don't broke our code in the evolution */


/* snapshot tool let us to follow the evolution of our component H,
 it compare the dom of our component save in file snap and the actual dom*/

/* snapshot*/
describe('h', () => {
it('h should render correctly', () => {
  const tree = renderer
    .create(<H />).toJSON();
  expect(tree).toMatchSnapshot();
});

/* unit test*/

 it('renders h', () => {
     const wrapper = shallow(<H optInValue={true} authenticated={true}/>);
     expect(wrapper.length).toEqual(1);  // to have one Component
  }); 

  it('h contains', () => {
    const wrapper = shallow((<div ><h1>Bienvenue </h1> 
                     < img src="../../../images/bobine-noir-blanc.png" alt="bobine de film" />
                     <Link title="inscrivez-vous" to="/signup">SignUp</Link>
                     < img src="../../../images/bobine.png" alt="bobine de film"/>
                     <Link title="connectez-vous" to="/login">login</Link><br/>
                     <div><a target="_blank" href="/icons/set/film-reel" rel="noopener noreferrer">Bobine de film icon</a> by <a target="_blank" href="https://icones8.fr" rel="noopener noreferrer">Icons8</a></div>
                     </div >
       ));
        expect(wrapper.contains(
                     <h1>Bienvenue </h1>,
                     <Link title="inscrivez-vous" to="/signup">SignUp</Link>,
                     <Link title="connectez-vous" to="/login">login</Link>
              )).toEqual(true);
  });

});
