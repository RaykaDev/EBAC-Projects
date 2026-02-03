import CardDestino from "@/app/Components/CardDestino";
import { destinos } from "@/app/Components/data/destinos";
import styles from "./page.module.css";

const Page = () => {
  return (
    <section className={styles.grid}>
      {destinos.map((destino) => (
        <CardDestino
          key={destino.rota} 
          destino={destino} 
        />
      ))}
    </section>
  );
};

export default Page;
