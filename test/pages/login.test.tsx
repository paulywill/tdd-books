import React from 'react'
import { render, fireEvent, screen } from '../testUtils'
import { Home } from '../../pages/index'
import '@testing-library/jest-dom/extend-expect'

describe('Login', () => {
  
  test('Login with Google', () => {
    render(<Home />);
    fail('Google authentication not setup yet.')    
  
  });

  test('Login with Github', () => {
    render(<Home />);
    fail('Github authentication not setup yet.')    
  });
});