import ReactDOMServer from "react-dom/server";

export const BalloonContentLayout = (layoutFactory, Component) => {
	const html = ReactDOMServer.renderToString(Component);
	const Layout = layoutFactory.createClass(`<div id="balloon">${html}</div>`, {
		build: function () {
			Layout.superclass.build.call(this);
		}
	});

	return Layout;
};