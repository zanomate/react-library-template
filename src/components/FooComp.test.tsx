import { render, screen } from '@testing-library/react'
import React from 'react'
import { FooComp } from './FooComp'

describe('<FooComp />', () => {

  const renderFooComp = (fooOptions) => render(
    <FooComp fooOptions={fooOptions} />,
  )

  it('renders default text', async () => {
    await renderFooComp({})
    const text = await screen.findByText('foo')
    expect(text).toBeVisible()
  })

  it('renders string specified in "fooString" option', async () => {
    await renderFooComp({ fooString: 'test' })
    const text = await screen.findByText('test')
    expect(text).toBeVisible()
  })
})
