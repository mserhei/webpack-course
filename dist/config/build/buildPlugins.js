import { DefinePlugin, ProgressPlugin } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
export var buildPlugins = function (_a) {
    var mode = _a.mode, paths = _a.paths, analyzer = _a.analyzer, platform = _a.platform;
    var isDev = mode === "development";
    var isProd = mode === "production";
    var plugins = [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new DefinePlugin({
            __PLATFORM__: JSON.stringify(platform),
        }),
    ];
    if (isDev) {
        plugins.push(new ProgressPlugin());
    }
    if (isProd) {
        plugins.push(new MiniCssExtractPlugin({
            filename: "css/[name].css",
        }));
    }
    if (analyzer) {
        plugins.push(new BundleAnalyzerPlugin());
    }
    return plugins;
};
