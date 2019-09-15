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
        width: fit-content;
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
        background-color: ${theme.colors.gray[1]};
        color: ${theme.colors.secondaryDark};
        padding: ${theme.space[2]}px;
        border-radius: ${theme.radii[0]};
      `}
    />
  )
}

function Link(props) {
  return (
    <Components.Link
      {...props}
      as="a"
      css={theme =>
        css`
          color: ${theme.colors.blue[7]};
        `
      }
    />
  )
}

function PageTitle(props) {
  return (
    <Components.H1
      {...props}
      css={theme =>
        css`
          color: ${theme.colors.white};
          text-align: center;
          background-image: linear-gradient(
            transparent 82%,
            ${theme.colors.primary} 0
          );
          width: fit-content;
          margin: 0 auto;
        `
      }
    />
  )
}

function SectionTitle(props) {
  return (
    <Components.H2
      {...props}
      css={theme =>
        css`
          margin: ${theme.space[7]}px 0;
        `
      }
    />
  )
}

function ParagraphTitle(props) {
  return (
    <Components.H3
      {...props}
      css={theme =>
        css`
          margin: ${theme.space[8]}px 0 ${theme.space[6]}px;
          border-bottom: 1px solid ${theme.colors.gray[2]};
        `
      }
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
        h1: PageTitle,
        h2: SectionTitle,
        h3: ParagraphTitle,
        h4: Components.H4,
        h5: Components.H5,
        h6: Components.H6,
        p: Paragraph,
        code: Code,
        inlineCode: InlineCode,
        a: Link,
      }}
    >
      <Components.ThemeProvider>
        <Components.Box as="main">
          <Components.GlobalStyles />
          {children}
        </Components.Box>
      </Components.ThemeProvider>
    </MDXProvider>
  )
}
