import React from 'react'
import {shallow} from 'enzyme'
import NotFound from './index'

describe('<NotFound />', () => {
  it('should display the NotFound Component', () => {
    const wrapper = shallow(<NotFound />)
    const actual = wrapper.find('.NotFoundComponent .container h4').text()
    const expected = '404 Page Not Found'
    expect(actual).toEqual(expected)
  })
})
