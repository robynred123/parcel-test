import React from 'react';
import renderer from 'react-test-renderer';
import Button from './Button'

it('renders the button component successfully', () => {
    const component = renderer.create(
        <Button className='button' children='button' onClick={() => jest.fn()}/>
    )
    let testJson = component.toJSON();
    expect(testJson).toMatchSnapshot()
})