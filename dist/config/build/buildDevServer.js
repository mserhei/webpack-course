export var buildDevServer = function (options) {
    var _a;
    return {
        open: true,
        port: (_a = options.port) !== null && _a !== void 0 ? _a : 3000,
        historyApiFallback: true,
    };
};
