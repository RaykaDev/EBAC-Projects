import Link from "next/link";
import styles from "./CardDestino.module.css";
import { Destino } from "@/Types/types";

type Props = {
  destino: Destino;
};

const CardDestino = ({ destino }: Props) => {
  const { nome, pais, imagem, rota } = destino;

  return (
    <Link href={`/destinos/${rota}`} className={styles.link}>
      <article className={styles.card}>
        <img className={styles.imagem} src={imagem} alt={nome} />
        <h2 className={styles.nome}>{nome}</h2>
        <p className={styles.pais}>{pais}</p>
      </article>
    </Link>
  );
};

export default CardDestino;
