/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import Layout from "@/components/Layout";
import Head from "next/head";
import styles from "@/styles/Button.module.scss"
import { useRouter } from "next/router";

export default function Home() {
  // eslint-disable-next-line prettier/prettier
  const router = useRouter();
  return (
    <Layout>
      <Head>
        <title>성원 푸드몰</title>
        <meta name="description" content="성원푸드" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
    </Layout>
  );
}
