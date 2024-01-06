import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import classes from './App.module.scss';
import { Link, Outlet } from "react-router-dom";
import ImagePng from '@/assets/image.png';
import ImageJpg from '@/assets/image.jpg';
import ImageSvg from '@/assets/image.svg';
var TODO = function (a) {
    return a;
};
var App = function () {
    var _a = useState(0), count = _a[0], setCount = _a[1];
    var counter = function () {
        setCount(function (prev) { return prev + 1; });
    };
    if (__PLATFORM__ === 'mobile') {
        return _jsx("div", { children: "ismobile" });
    }
    if (__PLATFORM__ === 'desktop') {
        return _jsx("div", { children: "isdesktop" });
    }
    TODO('slsd');
    return (_jsxs(_Fragment, { children: [_jsx("div", { children: __PLATFORM__ }), _jsx("img", { width: '100', height: 'auto', src: ImagePng }), _jsx("img", { width: '100', height: 'auto', src: ImageJpg }), _jsx(ImageSvg, { color: "gray", width: '100', height: '100' }), _jsx(Link, { to: "/", children: "home" }), _jsx("br", {}), _jsx(Link, { to: "/about", children: "about" }), _jsx("br", {}), _jsx(Link, { to: "/shop", children: "shop" }), "a", _jsx("br", {}), _jsx("div", { children: "hello world" }), _jsxs("p", { children: ["counter: ", count] }), _jsx("button", { className: classes.button, onClick: counter, children: _jsx("span", { children: "\u041F\u0440\u0438\u0431\u0430\u0432\u0438\u0442\u044C" }) }), _jsx(Outlet, {})] }));
};
export default App;
