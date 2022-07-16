import { Controller } from 'egg'
import { createElement } from 'react'
import { renderToString } from 'react-dom/server'
import App from '../../webpack/client/components/app'

export default class SsrController extends Controller {
  async render() {
    const { ctx } = this
    const content = renderToString(createElement(App))
    // const html = `
    //   <!DOCTYPE html>
    //   <html lang="en">
    //   <head>
    //     <meta charset="UTF-8">
    //     <meta http-equiv="X-UA-Compatible" content="IE=edge">
    //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //     <title>egg-next</title>
    //   </head>
    //   <body>
    //     <div id="root">${content}</div>
    //     <script defer="defer" src="public/client.cbb98336a3df7693ce9b.js"></script>
    //   </body>
    //   </html>
    // `
  
    // ctx.body = html
    await ctx.render('page.nj', { html: content, title: 'egg-react-ssr', desc: 'egg-react-ssr-native' })
  }
}