import React from 'react'
import { render, fireEvent, screen } from '../testUtils'
import { Home } from '../../pages/index'
import '@testing-library/jest-dom/extend-expect'

//describe('App', () => {
//test('renders App component', () => {
//render(<Home />);
//screen.debug();
//});
//});

describe('Home page', () => {
  test('matches snapshot', () => {
    const { asFragment } = render(<Home />, {})
    expect(asFragment()).toMatchSnapshot()
  })

  test('title is correct', () => {
    render(<Home />)
    expect(screen.getByText(/Welcome/)).toBeInTheDocument()
    expect(screen.getByRole('heading')).toBeInTheDocument()
  })

  test('clicking button triggers alert', () => {
    const { getByText } = render(<Home />, {})
    window.alert = jest.fn()
    fireEvent.click(getByText('Test Button'))
    expect(window.alert).toHaveBeenCalledWith('With typescript and Jest')
  })
})
