import Head from "next/head";

const Title = ({title}) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content="Admin Dashboard by Sikal"/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
    );
};

export default Title;