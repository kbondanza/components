/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Box } from './Box.js'

export function Button({
  unstable_Focused = false,
  isFullWidth = false,
  ...props
}) {
  return (
    <Box
      as="button"
      fontSize={1}
      pv={4}
      ph={8}
      borderRadius={0}
      width={isFullWidth ? '100%' : null}
      css={theme =>
        css({
          color: theme.colors.white,
          backgroundColor: theme.colors.primary,
          height: 50,
          border: 'none',
          ':disabled': {
            backgroundColor: theme.colors.gray[5],
            color: theme.colors.black,
          },
          ':hover:not(:disabled), :focus:not(:disabled)': {
            backgroundColor: theme.colors.primaryDark,
          },
          ':focus': {
            outline: `dashed 1px ${theme.colors.secondary}`,
          },
          ...(unstable_Focused
            ? {
                outline: `dashed 1px ${theme.colors.secondary}`,
                backgroundColor: theme.colors.primaryDark,
              }
            : {}),
        })
      }
      {...props}
    />
  )
}
