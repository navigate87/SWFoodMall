import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import styles from "@/styles/Button.module.scss";
/* eslint-disable prettier/prettier */
export default function List() { 
    const router = useRouter();
    // console.log(router)
    return (
        <Layout>
            <h4>List</h4>
            <input type="button" onClick={() => router.push("/") } value="홈으로"/>
            <button className={styles.button_red}>List</button>
        </Layout>
    )
}