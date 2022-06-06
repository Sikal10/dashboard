import 'antd/dist/antd.css';
import "../sass/main.scss";
import Layout from "../components/Layout";
import {DarkModeContextProvider} from "../context/DarkModeContext";

function MyApp({Component, pageProps}) {
    return <DarkModeContextProvider>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </DarkModeContextProvider>
}

export default MyApp
