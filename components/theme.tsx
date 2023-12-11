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