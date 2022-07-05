import React, { FC } from 'react'
import { FooOptions } from '../helpers/fooHelper'

export interface FooCompProps {
  fooOptions: FooOptions
}

export const FooComp: FC<FooCompProps> = (props) => {
  const { fooOptions } = props

  return (
    <span>{fooOptions.fooString || 'foo'}</span>
  )
}
