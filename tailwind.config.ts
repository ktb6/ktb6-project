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
      /*
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      */
      colors: {
        light: {
          text: {
            DEFAULT: '#020617',
            1: '#0f172a',
            2: '#1e293b',
            3: '#1e293b',
            4: '#475569',
            5: '#64748B',
            blue: {
              DEFAULT: '#3B82F6',
            },
          },
        },
        dark: {
          text: {
            DEFAULT: '#F8FAFC',
            1: '#F1F5F9',
            2: '#E2E8F0',
            3: '#CBD5E1',
            4: '#94A3B8',
            5: '#64748B',
            blue: {
              DEFAULT: '#60A5FA',
            },
          },
        },
      },
      /*
      typography: (theme: any) => ({
        DEFAULT: {
          css: {
            h1: {
              color: '#333333', // 제목 색상
            },
            h2: {
              color: '#333333', // 제목 색상
            },
            h3: {
              color: '#333333', // 제목 색상
            },
            h4: {
              color: '#333333', // 제목 색상
            },
            h5: {
              color: '#333333', // 제목 색상
            },
            strong: {
              color: '#333333',
            },
            code: {
              color: '#333333',
            },
            a: {
              color: theme('colors.blue.500'),
              '&:hover': {
                color: theme('colors.blue.700'),
              },
            },
            p: {
              color: '#333333',
            },
          },
        },
        dark: {
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
            p: {
              color: '#F0F0F0',
            },
          },
        },
      }),*/
    },
  },
  variants: {
    extend: {
      typography: ['dark'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
};
export default config;
