import React from 'react'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import Title from './Title'

chai.use(chaiEnzyme())

describe('<Title />', () => {
  const title = shallow(<Title text = "test me" />)
  it('renders an h1 tag',() => {
    expect(title).to.have.tagName('h1')
  })
})
