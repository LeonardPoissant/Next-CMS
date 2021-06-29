import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';




export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }
    //<script async src="https://platform.twitter.com/widgets.js" charset="utf-8" type="text/javascript"></script>
    //<script async src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0" charset="utf-8" type="text/javascript"></script>
    //

    render() {
        return (
            <Html>
                <Head>

                </Head>
                <body>


                    <Main />
                    <NextScript>

                    </NextScript>
                </body>
            </Html>
        )
    }
}