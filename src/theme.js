export const theme = {
    color: {
        primary: {
            light: '#30dbe7',
            main: '#00abc7',
            dark: '#007ba7',
        },
        extended: {
            moss: '#5e9b8b',
            teal: '#00abc7',
            sherbet: '#ffa872',
        },
        black: '#181818',
        grey: {
            light: '#ddd',
            main: '#999',
            dark: '#333',
        },
        white: '#f1f2f3',
        success: '#8ecbab',
        info: '#49a0d9',
        warning: '#df9852',
        danger: '#c16a5d',
    },
    border: {
        radius: '4px',
        width: '1px',
    },
    spacing: {
        xs: '0.25rem', extraSmall: '0.25rem',
        sm: '0.5rem', small: '0.5rem',
        md: '1rem', medium: '1rem',
        lg: '2rem', large: '2rem',
        xl: '3rem', extraLarge: '3rem',
    },
    debug: `
        border: 1px solid #f99;
        * { border: 1px solid #f99; }
    `
}
