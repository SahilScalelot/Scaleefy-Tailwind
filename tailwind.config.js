module.exports = {
  darkMode: 'class',
  content: ["./public/**/*.{html,js,scss}"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '2k': '1920px',
      '4k': '2560px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '0.938rem',
        md: '0.938rem',
        lg: '0.938rem',
        xl: '1.25rem',
        '2xl': '2.25rem',
        '2k': '1rem',
      },
    },
    fontFamily: {
      'ptsans': ['PT Sans', 'sans-serif'],
      'noto': ['Noto Sans', 'sans-serif'],
    },
    extend: {
      fontSize: {
        'xs': ['.75rem', '1.2rem'],
        'sm': ['.875rem', '1.5rem'],
        'base': ['1rem', '1.625rem'],
        'lg': ['1.125rem', '1.65rem'],
        'xl': ['1.25rem', '1.875rem'],
        '2xl': ['1.5rem', '2.1rem'],
        '4xl':['2.25rem','2.875rem'],
        '5xl':['3rem','3.625rem'],
        '22' : ['1.375rem', '2rem'],
        '28': ['1.875rem', '2.375rem'],
      },
      colors: {
        primary:'#022D62',
        secondary: '#0F172A',
        gray_Slate:'#64748B',
        gray_Gull:'#94A3B8',
        black_Mirage:'#1E293B',
        geyser:'#CBD5E1',
        light_Gray:'#F5F5F7'
      },
    },
  },
  plugins: [],
}