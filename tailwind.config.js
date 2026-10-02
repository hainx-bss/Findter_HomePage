/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.js'],
  theme: {
    extend: {},
  },
  safelist: [
    'bg-blue-100',
    'bg-gray-100',
    'text-blue-500',
    'text-gray-500',
    'text-blue-600',
    'bg-black',
    'bg-yellow-400',
    'bg-green-500',
    'bg-gray-400',
  ],
  plugins: [],
};
