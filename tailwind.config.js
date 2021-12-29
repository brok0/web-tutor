module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			height: {
				"(msngr-height)": "calc(100vh - 13rem)",
			},
			width: {
				"(msngr-width)": "calc(100vw - 20rem)",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
