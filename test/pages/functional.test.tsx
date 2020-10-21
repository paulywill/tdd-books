import React from 'react'
import { render, fireEvent, screen } from '../testUtils'
import { Home } from '../../pages/index'
import '@testing-library/jest-dom/extend-expect'

//TDD Books: User Story
describe('Home page', () => {
  //Bob logs into TDD Books using Google (or Github).
  test('login works', () => {
    fail('user not logged in')    
  })  

  //Bob can see either his book shelve he added from earlier or it's empty watching for books to be added.

  //Bob happen to see 3 of his books he added from earlier.

  //Bob decides to add the rest of the books he's currently reading or has read this year, which is 3 more.

  //Bob is able to input most of the details and get the rest of details from an API (ie book photo, ISBN, etc.).

  //There is a section for notes and rating from Bob on what he thinks of a book he's read.

  //Some simple stats are provided to Bob such as the amount of books he's read and cost of each book's cover price.

  //Bob is able to share is list of books and stats via Twitter, FB, or email.

  //Bob logs off, everything is saved, and he cracks opens a book and start reading.

})
