# `@matthamlin/components`

A simple component library built on top of React, Emotion, and Styled-System.

### TODO

- [ ] Publish to NPM
- [ ] Add TextInput component

### Available Components

All components extend from the base Box component, which accepts all the props
supported through styled-system, and spreads the rest onto the html element.

#### `Box`

Box accepts all the props supported through `styled-system`.

```jsx
<Box color="primary" m={[2, 4]}>
  Content
</Box>
```

#### `Text`

Text is a wrapper on top Box, that defaults to rendering as a `p` element

```jsx
<Text>Some content here</Text>
```

#### `H1, H2, H3, H4, H5, H6`

The Heading components are composed of Box components, defaulting to rendering
the relative html heading element, and defaulting the fontSize to the scale of
fontSizes within the theme.

```jsx
<H1>Page Title</H1>
```

#### `Button`

The Button component is a wrapper around an html `button` element, with a few
opinionated styles.

```jsx
<Button onClick={doSomething}>Click Here</Button>
```

#### `ThemeProvider` and `useTheme`

In order for the styles for the elements to work properly, the root of your app
should render a `ThemeProvider` component which accepts children and optionally
a `theme` override prop to override the default theme.

Additionally, you can use `useTheme` to read the theme within a function
component.

#### `Theme`

The components library also exposes the Theme object, allowing you to extend the
system.

This theme object follows the theme spec from styled-system, see
[here](https://styled-system.com/theme-specification) for more information.
