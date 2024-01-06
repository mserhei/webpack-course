export var buildResolvers = function (options) {
    return {
        extensions: [".tsx", ".ts", ".js"],
        alias: {
            '@': options.paths.src,
        }
    };
};
