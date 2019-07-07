/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { MDXProvider } from '@mdx-js/react'

import * as Components from '@matthamlin/components'

let { useMedia } = Components

function Code(props) {
  return (
    <pre
      css={theme => css`
        background-color: ${theme.colors.gray[9]};
        color: ${theme.colors.primary};
        padding: ${theme.space[4]}px;
        margin-bottom: ${theme.space[4]}px;
      `}
    >
      <code {...props} />
    </pre>
  )
}

function InlineCode(props) {
  return (
    <code
      {...props}
      css={theme => css`
        display: inline-block;
        background-color: ${theme.colors.gray[4]};
        color: ${theme.colors.secondaryDark};
        padding: ${theme.space[2]}px;
        border-radius: ${theme.radii[0]};
      `}
    />
  )
}

function Paragraph(props) {
  return (
    <Components.Text
      {...props}
      css={theme =>
        css`
          margin-bottom: ${theme.space[4]}px;
        `
      }
    />
  )
}

export default function Layout({ children }) {
  let matches = useMedia({ query: '(min-width: 1000px)' })
  console.log({ matches })
  return (
    <MDXProvider
      components={{
        ...Components,
        h1: Components.H1,
        h2: Components.H2,
        h3: Components.H3,
        h4: Components.H4,
        h5: Components.H5,
        h6: Components.H6,
        p: Paragraph,
        code: Code,
        inlineCode: InlineCode,
      }}
    >
      <Components.ThemeProvider>
        <Components.Box
          as="main"
          css={theme =>
            css({
              maxWidth: theme.sizes.content,
              margin: '0 auto',
            })
          }
        >
          <Components.GlobalStyles />
          {children}
        </Components.Box>
      </Components.ThemeProvider>
    </MDXProvider>
  )
}
