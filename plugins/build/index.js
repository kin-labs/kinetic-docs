module.exports = function (context, options) {
	return {
		name: "build",
		configureWebpack(config, isServer) {
			return {
				resolve: {
					fallback: {
						stream: require.resolve("stream-browserify"),
						buffer: require.resolve("buffer"),
					},
				},
			};
		},
	};
};
