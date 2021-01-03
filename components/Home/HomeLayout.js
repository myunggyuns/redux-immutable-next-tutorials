import React from "react";
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

const HomeLayout = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Redux-immutable-Next-tutorials</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Redux-immutable-Next-tutorials</h1>
      <main className={styles.main}>
        <Link passHref href="/counter">
          <button>Counter Page</button>
        </Link>
        <Link passHref href="/todolist">
          <button>TodoList Page</button>
        </Link>
      </main>
      <footer className={styles.footer}>z쿳쿳z</footer>
    </div>
  );
};

export default HomeLayout;
