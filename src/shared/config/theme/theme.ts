export const theme = {
    typography: {
        fontFamily: {
            primary: `'Philosopher', serif`,
        },
        title: {
            fontSize: '40px',
            fontWeight: 700,
            lineHeight: '1.2',
        },
        text: {
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '1.5',
        },
    },
    colors: {
        primaryText: '#2D4030',
    },
};

export type AppTheme = typeof theme;