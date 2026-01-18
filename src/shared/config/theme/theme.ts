export const theme = {
    typography: {
        fontFamily: {
            primary: `'Philosopher', serif`,
        },
        title: {
            h1: { fontSize: '40px', fontWeight: 700, lineHeight: '1.2' },
            h2: { fontSize: '32px', fontWeight: 600, lineHeight: '1.2' },
            h3: { fontSize: '28px', fontWeight: 600, lineHeight: '1.2' },
            h4: { fontSize: '24px', fontWeight: 500, lineHeight: '1.2' },
            h5: { fontSize: '20px', fontWeight: 500, lineHeight: '1.2' },
            h6: { fontSize: '16px', fontWeight: 500, lineHeight: '1.2' },
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