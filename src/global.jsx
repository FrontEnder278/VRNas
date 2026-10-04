import '@/styles/index.js'
import { Head } from "minista"
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";
import Content from "@/layouts/Content";

export default function (props) {
    const {
        children,
        title,
        url
    } = props

    return (
        <>
            <Head htmlAttributes={{lang: 'en'}}>
                <title>VRNas | {title}</title>
                <script src='/src/main.js' type='module'/>
                <link rel="apple-touch-icon" sizes="180x180" href={`${import.meta.env.BASE_URL}apple-touch-icon.png`}/>
                <link rel="icon" type="image/png" sizes="32x32" href={`${import.meta.env.BASE_URL}favicon-32x32.png`}/>
                <link rel="icon" type="image/png" sizes="16x16" href={`${import.meta.env.BASE_URL}favicon-16x16.png`}/>
                <link rel="manifest" href={`${import.meta.env.BASE_URL}site.webmanifest`}/>
            </Head>
            <Header url={url}/>
            <Content>
                {children}
            </Content>
            <Footer/>
        </>
    )
}
