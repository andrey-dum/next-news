import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import { ThemeProvider } from 'styled-components';
import theme from "../theme"
import { Header } from '../components/Header'
import Head from 'next/head'


function MyApp({ Component, pageProps }: AppProps) {
  return (
  
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Next News</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"></link>

      </Head>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          <Component {...pageProps} />
        </ThemeProvider>
      </MuiThemeProvider>
    </>
    
  )
}

export default MyApp