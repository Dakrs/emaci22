import 'tailwindcss/tailwind.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
import Layout from '@components/common/layout'
import 'regenerator-runtime/runtime';
import './global.css'

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
