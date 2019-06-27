import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`)
}

describe('renders the UI of the page', () => {
  test('renders component-app', () => {
    const wrapper = shallow(<App />)
    const appComponent = findByTestAttr(wrapper, 'component-app')
    expect(appComponent.length).toBe(1)
  })

  test('renders increment button', () => {
    const wrapper = shallow(<App />)
    const button = findByTestAttr(wrapper, 'increment-button')
    expect(button.length).toBe(1)
  })

  test('renders counter display', () => {
    const wrapper = shallow(<App />)
    const counterDisplay = findByTestAttr(wrapper, 'counter-display')
    expect(counterDisplay.length).toBe(1)
  })
})

describe('counter related tests', () => {
  test('counter starts at 0', () => {
    const wrapper = shallow(<App />)
    const initialStateCount = wrapper.state('count')
    expect(initialStateCount).toBe(8)
  })

  test('clicking button increments counter display', () => {
    const wrapper = mount(<App />)
    const button = findByTestAttr(wrapper, 'increment-button')
    const counterDisplay = findByTestAttr(wrapper, 'counter-display')
    const initialCounter = 8
    wrapper.setState({
      count: initialCounter
    })
    console.log('before counterDisplay.text()', counterDisplay.text())
    button.simulate('click')
    wrapper.update()
    console.log('after counterDisplay.text()', counterDisplay.text())
    expect(counterDisplay.text()).toContain(initialCounter + 1)
  })
})