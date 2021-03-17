import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import { END } from 'redux-saga';
import { store, wrapper } from '../store/store';

function MyApp({ Component, pageProps }) {
  const getInitialProps = async ({ Component, ctx }) => {
    const pageProps = {
      ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {})
    };
    if (ctx.req) {
      ctx.store.dispatch(END);
      await ctx.store.sagaTask.toPromise();
    }
    return {
      pageProps,
    };
  };
  return (<Component {...pageProps} />);
}

export default wrapper.withRedux(MyApp);
