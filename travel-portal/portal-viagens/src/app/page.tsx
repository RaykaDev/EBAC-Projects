import styles from "./page.module.css";

export default function Home() {
  return (
    <section className={styles.page}>
      <div className={styles.hero}>
        <h1>Descubra novos destinos</h1>
        <p>
          Horizonte Aberto é um portal de viagens onde você pode explorar
          destinos turísticos e conhecer informações sobre lugares incríveis ao
          redor do mundo.
        </p>
      </div>
    </section>
  );
}
