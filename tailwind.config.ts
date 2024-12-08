import forms from '@tailwindcss/forms';
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors:{
        'neutral': '#F4F2FF',
        'dark-blue': '#2B1887',
        'neutral-red': '#E42C5F',
        'neutral-yellow': '#ECB800',
        'neutral-blue' : '#2D41A7',
        'neutral-purple': '#D5CCFF',
      }
    }
  },

  plugins: [forms]
} satisfies Config;
