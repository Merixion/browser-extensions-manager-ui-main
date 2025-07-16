
export type Card = {
  id: number;
  title: string; 
  logo: string;
  description: string;
  isActive: boolean;
}

export const cards: Card[] = [
	{
		id: 1,
		title: 'DevLens',
		logo: '/images/logo-devlens.svg',
		description:
			'Quickly inspect page layouts and visualize element boundaries.',
		isActive: true,
	},
	{
		id: 2,
		title: 'StyleSpy',
		logo: '/images/logo-style-spy.svg',
		description: 'Instantly analyze and copy CSS from any webpage element.',
		isActive: true,
	},
	{
		id: 3,
		title: 'SpeedBoost',
		logo: '/images/logo-speed-boost.svg',
		description: 'Optimizes browser resource usage to accelerate page loading.',
		isActive: true,
	},
	{
		id: 4,
		title: 'JSONWizard',
		logo: '/images/logo-json-wizard.svg',
		description:
			'Formats, validates, and prettifies JSON responses in-browser.',
		isActive: true,
	},
	{
		id: 5,
		title: 'TabMaster Pro',
		logo: '/images/logo-tab-master-pro.svg',
		description: 'Organizes browser tabs into groups and sessions.',
		isActive: true,
	},
	{
		id: 6,
		title: 'ViewportBuddy',
		logo: '/images/logo-viewport-buddy.svg',
		description:
			'Simulates various screen resolutions directly within the browser.',
		isActive: true,
	},
	{
		id: 7,
		title: 'Markup Notes',
		logo: '/images/logo-markup-notes.svg',
		description:
			'Enables annotation and notes directly onto webpages for collaborative debugging.',
		isActive: true,
	},
	{
		id: 8,
		title: 'GridGuides',
		logo: '/images/logo-grid-guides.svg',
		description:
			'Overlay customizable grids and alignment guides on any webpage.',
		isActive: true,
	},
	{
		id: 9,
		title: 'Palette Picker',
		logo: '/images/logo-palette-picker.svg',
		description: 'Instantly extracts color palettes from any webpage.',
		isActive: true,
	},
	{
		id: 10,
		title: 'LinkChecker',
		logo: '/images/logo-link-checker.svg',
		description: 'Scans and highlights broken links on any page.',
		isActive: true,
	},
	{
		id: 11,
		title: 'DOM Snapshot',
		logo: '/images/logo-dom-snapshot.svg',
		description: 'Capture and export DOM structures quickly.',
		isActive: true,
	},
	{
		id: 12,
		title: 'ConsolePlus',
		logo: '/images/logo-console-plus.svg',
		description:
			'Enhanced developer console with advanced filtering and logging.',
		isActive: true,
	},
];