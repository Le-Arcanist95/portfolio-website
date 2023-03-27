module.exports = {
    content: ['./src/**/*.{html,js,ts,jsx,tsx}', './public/index.html'],
    theme: {
        extend: {
            screens: {
                'xs': '375px',
                'sm': '640px',
                'md': '768px',
                'lg': '1024px',
                'xl': '1280px',
                '2xl': '1536px',
            },
            colors: {
                'primary': '#3b82f6',
                'secondary': '#6b7280',
                'success': '#10b981',
                'danger': '#ef4444',
                'warning': '#f59e0b',
                'info': '#3b82f6',
                'dark': '#1f2937',
                'light': '#f3f4f6',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        color: theme('colors.gray.800'),
                        a: {
                            color: theme('colors.primary'),
                            '&:hover': {
                                color: theme('colors.primary'),
                            },
                        },
                        h1: {
                            color: theme('colors.gray.900'),
                        },
                        h2: {
                            color: theme('colors.gray.900'),
                        },
                        h3: {
                            color: theme('colors.gray.900'),
                        },
                        h4: {
                            color: theme('colors.gray.900'),
                        },
                        h5: {
                            color: theme('colors.gray.900'),
                        },
                        h6: {
                            color: theme('colors.gray.900'),
                        },
                        strong: {
                            color: theme('colors.gray.900'),
                        },
                        code: {
                            color: theme('colors.gray.900'),
                        },
                        figcaption: {
                            color: theme('colors.gray.500'),
                        },
                        blockquote: {
                            color: theme('colors.gray.900'),
                            borderLeftColor: theme('colors.gray.200'),
                        },
                    },
                },
            })
        }
    },
    variants: {
        extend: {
            opacity: ['disabled']
        }
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
    ],
    darkMode: 'class',
}