import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // class 기반 다크 모드 설정
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
              color: '#000000', // 라이트 모드에서 제목 색상 (검정)
            },
            h2: {
              color: '#000000',
            },
            h3: {
              color: '#000000',
            },
            h4: {
              color: '#000000',
            },
            h5: {
              color: '#000000',
            },
            strong: {
              color: '#000000',
            },
            code: {
              color: '#000000',
            },
            a: {
              color: theme('colors.blue.500'),
              '&:hover': {
                color: theme('colors.blue.700'),
              },
            },
          },
        },
        dark: {
          css: {
            h1: {
              color: '#FFFFFF', // 다크 모드에서 제목 색상 (흰색)
            },
            h2: {
              color: '#FFFFFF',
            },
            h3: {
              color: '#FFFFFF',
            },
            h4: {
              color: '#FFFFFF',
            },
            h5: {
              color: '#FFFFFF',
            },
            strong: {
              color: '#FFFFFF',
            },
            code: {
              color: '#FFFFFF',
            },
            a: {
              color: theme('colors.blue.300'), // 다크 모드에서 링크 색상
              '&:hover': {
                color: theme('colors.blue.500'),
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
