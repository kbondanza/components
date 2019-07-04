import { render, fireEvent } from '@testing-library/react'
import React from 'react'
import { Input, ControlledInput } from '../Input.js'
import { ThemeProvider } from '../ThemeProvider.js'

test('Input calls onChange with the event', () => {
  let handleChange = jest.fn()
  let { container } = render(
    <ThemeProvider>
      <Input onChange={handleChange} />
    </ThemeProvider>,
  )

  let input = container.querySelector('input')

  fireEvent.change(input, { target: { value: 'a' } })

  expect(handleChange).toHaveBeenCalled()
})

test('ControlledInput calls onChange', () => {
  let handleChange = jest.fn()
  let { container } = render(
    <ThemeProvider>
      <ControlledInput onChange={handleChange} />
    </ThemeProvider>,
  )

  let input = container.querySelector('input')

  fireEvent.change(input, { target: { value: 'a' } })

  expect(handleChange).toHaveBeenCalled()
})
