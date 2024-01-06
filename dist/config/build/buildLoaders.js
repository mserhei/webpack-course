import MiniCssExtractPlugin from "mini-css-extract-plugin";
export var buildLoaders = function (options) {
    var isDev = options.mode === "development";
    var assetLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
    };
    var svgrLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [
            {
                loader: "@svgr/webpack",
                options: {
                    icon: true,
                    svgoConfig: {
                        plugins: [
                            {
                                name: "convertColors",
                                params: {
                                    currentColor: true,
                                },
                            },
                        ],
                    },
                },
            },
        ],
    };
    var cssLoaderWithModules = {
        loader: "css-loader",
        options: {
            modules: {
                localIdentName: isDev
                    ? "[path][name]__[local]--[hash:base64:5]"
                    : "[hash:base64:8]",
            },
        },
    };
    var cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            !isDev ? MiniCssExtractPlugin.loader : "style-loader",
            // Creates `style` nodes from JS strings
            // "style-loader",
            // Translates CSS into CommonJS
            cssLoaderWithModules,
            // Compiles Sass to CSS
            "sass-loader",
        ],
    };
    var tsLoader = {
        test: /.tsx?$/,
        exclude: /node_modules/,
        use: [
            {
                loader: "ts-loader",
                options: {
                    transpileOnly: true,
                    experimentalWatchApi: true,
                },
            },
        ],
    };
    return [assetLoader, svgrLoader, cssLoader, tsLoader];
};
