import { render, fireEvent } from '@testing-library/react'
import React from 'react'
import { Button } from '../Button.js'
import { ThemeProvider } from '../ThemeProvider.js'

test('it calls onClick when clicked', () => {
  let handleClick = jest.fn()
  let { container } = render(
    <ThemeProvider>
      <Button onClick={handleClick}>Foo</Button>
    </ThemeProvider>,
  )

  fireEvent.click(container.querySelector(`button`))

  expect(handleClick).toHaveBeenCalled()
})
