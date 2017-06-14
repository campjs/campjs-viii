import Document, { Head, Main, NextScript } from 'next/document'
import { cxs } from 'axs'
import ReactDOM from 'react-dom'
import flush from 'styled-jsx/server'

import {
  Html
} from '../components'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const {html, head, errorHtml, chunks} = renderPage()
    const styles = flush()
    const css = cxs.getCss()
    // Reset the cache for other page renders
    cxs.reset()
    return { html, head, errorHtml, chunks, styles, css }
  }

  render () {
    return (
      <Html>
        <Head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='shortcut icon' href='/static/favicon.ico' />
          <link href='/static/minimal.css' rel='stylesheet' />
          <style type='text/css' data-glamor>{this.props.css}</style>
          <link href='/static/font.css' rel='stylesheet' />
          <link href='/static/font-google.css' rel='stylesheet' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
