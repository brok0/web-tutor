import styles from "../styles/Home.module.css";
import { MainLayout } from "../layouts/MainLayout";
export default function Home() {
  return (
    <MainLayout>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
    </MainLayout>
  );
}
