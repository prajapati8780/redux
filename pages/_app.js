import '@/styles/globals.css'
import { Provider } from 'react-redux';
import store from '@/reducer/store';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function App({ Component, pageProps }) {
  return(

    <Provider store={store}>
  <Component {...pageProps} />
</Provider>
  )

}
