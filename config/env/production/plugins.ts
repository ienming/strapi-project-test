module.exports = ({ env }) => ({
	upload: {
		config: {
			provider: 'cloudinary',
			providerOptions: {
				cloud_name: env('CLOUDINARY_NAME'),
				api_key: env('CLOUDINARY_KEY'),
				api_secret: env('CLOUDINARY_SECRET'),
			},
			actionOptions: {
				upload: {},
				delete: {},
			},
			breakpoints: {
				thumbnail: 100,
				small: 100,
				medium: 200,
				large: 300,
			},
		},
	},
});
