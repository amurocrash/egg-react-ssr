# egg-react-ssr

使用原生react + egg + webpack搭建react ssr功能
没有使用任何ssr第三方框架，类似next.js等
核心难点:同构。仅使用ReactDom.renderToString()仅能得到静态html，无法实现页面点击事件等响应能力

