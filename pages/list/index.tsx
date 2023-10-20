import { useRouter } from "next/router";
import Layout from "@/components/layout";
import styles from "@/styles/Button.module.scss";
/* eslint-disable prettier/prettier */
export default function List() { 
    const router = useRouter();
    // console.log(router)
    return (
        <Layout>
            <h4>HELLO</h4>
            <input type="button" onClick={() => router.push("/") } value="Push"/>
            <button className={styles.button_red}>list</button>
        </Layout>
    )
}