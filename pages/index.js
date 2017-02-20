import Footer from '../components/footer'
import Head from '../components/head'
import Header from '../components/header'
import Main from '../components/main'

const $ = require('jquery');
global.$ = $;
global.jQuery = $;

export default () => (
  <div>
    <Head />
    <Header />
    <Main />
    <Footer />
  </div>
)
