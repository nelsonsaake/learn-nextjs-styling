# LESSONS
- Next.js Tutorial - 50 - Global Styles
- Next.js Tutorial - 51 - Component Level Styles
- Next.js Tutorial - 52 - SASS Support
- Next.js Tutorial - 53 - CSS in JS
    styled - components

## ADDING BOOSTRAP 

### install

    npm i bootstrap

### import in app/layout.tsx 

    import 'bootstrap/dist/css/bootstrap.min.css'

if you import in app/layout.tsx it applies to the entire code base

## ADDING SASS

### install 
    
    npm i sass

## ADDING STYLED COMPONENTS

    npm i styled-components

### import

    import { ThemeProvider } from 'styled-components';

### wrap with the base component

Here that's the @/components/theme.tsx file.

<pre>
'use client'

import { ThemeProvider } from 'styled-components';

const theme = {
    colors: {
        primary: "#355C7D",
    }
}

export default function Theme({ children }: { children: React.ReactNode; }) {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}
</pre>

### Use in your various components/pages

<pre>
'use client'
import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    font-size: 50px;
    color: ${({ theme }) => theme.colors.primary};
`

export default function CSSJSPage() {
    return (
       <Title> Hello World</Title>
    )
}
</pre>

### Optimising styled components

Styled components are supposed to run the browser; that is, rendered client side.

You can trigger rendering part of it on the server side will the browser take over after the page is loaded.

To do this, add `app/css-in-js/registry.tsx` from this example to the root of your app. And use it like it was used in: `app/css-in-js/layout.tsx`

