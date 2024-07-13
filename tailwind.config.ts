import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      typography: (theme: any) => ({
        DEFAULT: {
          css: {
            h1: {
              color: '#F0F0F0', // 제목 색상
            },
            h2: {
              color: '#F0F0F0', // 제목 색상
            },
            h3: {
              color: '#F0F0F0', // 제목 색상
            },
            h4: {
              color: '#F0F0F0', // 제목 색상
            },
            h5: {
              color: '#F0F0F0', // 제목 색상
            },
            strong: {
              color: '#F0F0F0',
            },
            code: {
              color: '#F0F0F0',
            },
            a: {
              color: theme('colors.blue.500'),
              '&:hover': {
                color: theme('colors.blue.700'),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
};
export default config;
