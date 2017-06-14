export default {
  breakpoints: [
    '(min-width:40em)',
    '(min-width:48em)',
    '(min-width:56em)'
  ].map(w => `@media screen and ${w}`),
  typeScale: [
    '1rem', '1.25rem', '1.5625rem', '1.9375rem', '2.4375rem', '3.0625rem', '3.8125rem'
  ],
  scale: [
    0, 2, 4, 8, 16, 32, 64, 128, 256
  ],
  borderRadius: 2,
  bold: 700,
  colors: {
    dark: '#21302F',
    green: '#87D337'
  }
}
