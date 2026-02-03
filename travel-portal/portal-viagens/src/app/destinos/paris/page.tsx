import { destinos } from "@/app/Components/data/destinos";
import styles from "./page.module.css"

const ParisPage = () => {
    const paris = destinos.find((d) => d.rota === "paris")

    if (!paris) return <p>Destino não encontrado</p>

    return (
        <>
            <section className={styles.container}>
                <h1 className={styles.titulo}>{paris.nome}</h1>

                <img className={styles.imagem} src={paris.imagem} alt={paris.nome} />

                <p className={styles.descricao}>{paris.descricao}</p>
            </section>
        </>
    )
}

export default ParisPage