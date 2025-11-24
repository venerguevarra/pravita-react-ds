// src/design-system/tokens.ts

export type ColorRamp = [
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string
];

export type DesignTokens = {
    color: {
        brand: ColorRamp;
        neutral: ColorRamp;
        success: string;
        warning: string;
        danger: string;
        background: string;
        surface: string;
        surfaceAlt: string;
        text: string;
        textMuted: string;
        border: string;
    };
    typography: {
        fontFamily: string;
        fontWeight: {
            regular: number;
            medium: number;
            semibold: number;
            bold: number;
        };
        sizes: {
            h1: { fontSize: string; lineHeight: string };
            h2: { fontSize: string; lineHeight: string };
            h3: { fontSize: string; lineHeight: string };
            body: { fontSize: string; lineHeight: string };
            caption: { fontSize: string; lineHeight: string };
        };
    };
    radius: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        pill: string;
    };
    spacing: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
};

export type MainTheme = {
    light: DesignTokens;
    dark: DesignTokens;
};

// Very opinionated default – we can refine later or drive from SCSS
export const defaultTheme: MainTheme = {
    light: {
        color: {
            brand: [
                '#eef7ff',
                '#d9edff',
                '#b3dbff',
                '#86c6ff',
                '#59b0ff',
                '#2c9aff',
                '#0f7fe6',
                '#0864b4',
                '#074a83',
                '#053251',
            ],
            neutral: [
                '#fafafa',
                '#f4f4f5',
                '#e4e4e7',
                '#d4d4d8',
                '#a1a1aa',
                '#71717a',
                '#52525b',
                '#3f3f46',
                '#27272a',
                '#18181b',
            ],
            success: '#22c55e',
            warning: '#f59e0b',
            danger: '#ef4444',
            background: '#ffffff',
            surface: '#ffffff',
            surfaceAlt: '#f8fafc',
            text: '#0f172a',
            textMuted: '#475569',
            border: '#e2e8f0',
        },
        typography: {
            fontFamily:
                "'Inter', system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
            fontWeight: {
                regular: 400,
                medium: 500,
                semibold: 600,
                bold: 700,
            },
            sizes: {
                h1: { fontSize: '2.25rem', lineHeight: '1.2' },
                h2: { fontSize: '1.75rem', lineHeight: '1.25' },
                h3: { fontSize: '1.5rem', lineHeight: '1.3' },
                body: { fontSize: '1rem', lineHeight: '1.6' },
                caption: { fontSize: '0.875rem', lineHeight: '1.4' },
            },
        },
        radius: {
            xs: '4px',
            sm: '8px',
            md: '12px',
            lg: '16px',
            xl: '24px',
            pill: '999px',
        },
        spacing: {
            xs: '0.25rem',
            sm: '0.5rem',
            md: '0.75rem',
            lg: '1rem',
            xl: '1.25rem',
        },
    },
    dark: {
        // For now, dark is mostly copy + tweak – we can refine later
        color: {
            brand: [
                '#0b1a26',
                '#0e2536',
                '#12324a',
                '#17415f',
                '#1c5276',
                '#20638d',
                '#287ab0',
                '#2e8fcf',
                '#38a7f2',
                '#4db6ff',
            ],
            neutral: [
                '#0b1220',
                '#111827',
                '#1f2937',
                '#273449',
                '#334155',
                '#475569',
                '#64748b',
                '#94a3b8',
                '#cbd5e1',
                '#e2e8f0',
            ],
            success: '#34d399',
            warning: '#f59e0b',
            danger: '#f87171',
            background: '#0b0d18',
            surface: '#121529',
            surfaceAlt: '#0f152b',
            text: '#f6f7fb',
            textMuted: '#cbd5e1',
            border: '#2b3245',
        },
        typography: {
            fontFamily:
                "'Inter', system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
            fontWeight: {
                regular: 400,
                medium: 500,
                semibold: 600,
                bold: 700,
            },
            sizes: {
                h1: { fontSize: '2.25rem', lineHeight: '1.2' },
                h2: { fontSize: '1.75rem', lineHeight: '1.25' },
                h3: { fontSize: '1.5rem', lineHeight: '1.3' },
                body: { fontSize: '1rem', lineHeight: '1.6' },
                caption: { fontSize: '0.875rem', lineHeight: '1.4' },
            },
        },
        radius: {
            xs: '4px',
            sm: '8px',
            md: '12px',
            lg: '16px',
            xl: '24px',
            pill: '999px',
        },
        spacing: {
            xs: '0.25rem',
            sm: '0.5rem',
            md: '0.75rem',
            lg: '1rem',
            xl: '1.25rem',
        },
    },
};
