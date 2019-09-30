import React from 'react';
import { shallow, mount, render} from 'enzyme';
import ReactDOM from 'react-dom';
import App from '../src/components/App';


//describe('App', () => {
//it('renders without crashing', () => {
//  ReactDOM.render(<App/>, document.getElementById('root'));
//  //ReactDOM.unmountComponentAtNode(div);
//});
//});
it('App should render correctly', () => {
  const app = shallow(<App />);
  expect(app).toMatchSnapshot();
});

