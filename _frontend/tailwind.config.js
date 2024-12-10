/* eslint-disable no-undef */
/** @type { import('tailwindcss').Config } */

const forms = require('@tailwindcss/forms');
const defaultTheme = require('tailwindcss/defaultTheme');

const screens = {
	...defaultTheme.screens,
	'xs': '475px',
	'max-2xl': { 'max': '1535px' },
	'max-xl': { 'max': '1279px' },
	'max-lg': { 'max': '1023px' },
	'max-md': { 'max': '767px' },
	'max-sm': { 'max': '639px' },
}

const spacing = {
	px: '1px',
	0: '0px',
	0.5: '2px',
	1: '4px',
	1.5: '6px',
	2: '8px',
	2.5: '10px',
	3: '12px',
	3.5: '14px',
	4: '16px',
	4.5: '18px',
	5: '20px',
	6: '24px',
	7: '28px',
	8: '32px',
	9: '36px',
	10: '40px',
	11: '44px',
	12: '48px',
	14: '56px',
	15: '60px',
	16: '64px',
	18: '72px',
	20: '80px',
	24: '96px',
	28: '112px',
	32: '128px',
	36: '144px',
	40: '160px',
	44: '176px',
	46: '184px',
	48: '192px',
	52: '208px',
	56: '224px',
	60: '240px',
	64: '256px',
	72: '288px',
	80: '320px',
	96: '384px',
	...screens
};

module.exports = {
	corePlugins: { preflight: true },
	content: [
		'./**/*.tsx',
		'./*.php',
		'./*.html'
	],
	theme: {
		screens,
		spacing,
		extend: {
			minWidth: {
				...spacing
			},
			minHeight: {
				...spacing
			},
			width: {
				...spacing
			},
			maxWidth: {
				...spacing
			},
			maxHeight: {
				...spacing
			},
			fontSize: {
				mini: ['7px', { lineHeight: '10px' }],
				tiny: ['8px', { lineHeight: '10px' }],
				xxs: ['9px', { lineHeight: '11px' }],
				xs: ['10px', { lineHeight: '14px' }],
				sm: ['12px', { lineHeight: '16px' }],
				base: ['14px', { lineHeight: '20px' }],
				lg: ['16px', { lineHeight: '24px' }],
				xl: ['18px', { lineHeight: '1.75em' }],
				'2xl': ['20px', { lineHeight: '1.75em' }],
				'3xl': ['24px', { lineHeight: '1.75em' }],
				'4xl': ['28px', { lineHeight: '2em' }],
				'5xl': ['32px', { lineHeight: '2em' }],
				'6xl': ['36px', { lineHeight: '2em' }],
				'7xl': ['42px', { lineHeight: '2.2em' }],
				'8xl': ['48px', { lineHeight: '2.2em' }],
			},
			borderRadius: {
				xs: '2px',
				sm: '4px',
				md: '6px',
				lg: '8px',
				xl: '16px',
				'2xl': '32px'
			},
			colors: {
				black: '#181C2F',
				'brand-bay': {
					DEFAULT: '#3639a4',
					50: '#f1f4fd',
					100: '#e0e6f9',
					200: '#c8d3f5',
					300: '#a2b6ee',
					400: '#7690e4',
					500: '#566cdb',
					600: '#4151cf',
					700: '#383fbd',
					800: '#3639a4',
					900: '#2d317b',
				},
				'brand-spray': {
					DEFAULT: '#75e8f0',
					50: '#edfefe',
					100: '#d2f9fb',
					200: '#abf3f6',
					300: '#75e8f0',
					400: '#2fd2e1',
					500: '#13b6c7',
					600: '#1392a7',
					700: '#167588',
					800: '#1b5f6f',
					900: '#1b4f5e',
				},
				'brand-bitter': {
					DEFAULT: '#ff7364',
					50: '#fff2f1',
					100: '#ffe4e1',
					200: '#ffccc7',
					300: '#ffa9a0',
					400: '#ff7364',
					500: '#f84d3b',
					600: '#e5301d',
					700: '#c12514',
					800: '#a02214',
					900: '#842218',
				},
				red: {
					DEFAULT: '#ff4d35',
					50: '#fff3f1',
					100: '#ffe3df',
					200: '#ffccc5',
					300: '#ffa99d',
					400: '#ff7664',
					500: '#ff4d35',
					600: '#ed2f15',
					700: '#c8230d',
					800: '#a5210f',
					900: '#882214',
				},
				green: {
					DEFAULT: '#36B37E',
					50: '#DBF4E9',
					100: '#C7EEDD',
					200: '#A0E2C6',
					300: '#79D6AF',
					400: '#51CB97',
					500: '#36B37E',
					600: '#2E986B',
					700: '#257C57',
					800: '#1D6144',
					900: '#154531'
				},
				blue: {
					DEFAULT: '#356CFA',
					50: '#E8EEFE',
					100: '#D4E0FE',
					200: '#ACC3FD',
					300: '#85A6FC',
					400: '#5D89FB',
					500: '#356CFA',
					600: '#0648F1',
					700: '#0537BA',
					800: '#032783',
					900: '#02174D'
				},
				yellow: {
					DEFAULT: '#ffbc27',
					50: '#fffaeb',
					100: '#fff2c6',
					200: '#ffe388',
					300: '#ffcf4a',
					400: '#ffbc27',
					500: '#f99707',
					600: '#dd7002',
					700: '#b74d06',
					800: '#943b0c',
					900: '#7a310d',
				},
				gray: {
					DEFAULT: '#e0e2e6',
					50: '#f6f7f8',
					100: '#ebecee',
					200: '#e0e2e6',
					300: '#c2c7ce',
					400: '#a4aab6',
					500: '#8e94a3',
					600: '#7d8293',
					700: '#707485',
					800: '#5e606f',
					900: '#4e505a',
				},
			}
		},
	},
	plugins: [
		forms({
			strategy: 'class',
		}),
	]
}