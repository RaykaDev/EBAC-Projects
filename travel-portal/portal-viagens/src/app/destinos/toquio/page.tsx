import { destinos } from "@/app/Components/data/destinos";
import styles from "./page.module.css"

const ToquioPage = () => {
    const toquio = destinos.find((d) => d.rota === "toquio")

    if (!toquio) return <p>Destino não encontrado</p>

    return (
        <>
            <section className={styles.container}>
                <h1 className={styles.titulo}>{toquio.nome}</h1>

                <img className={styles.imagem} src={toquio.imagem} alt={toquio.nome} />

                <p className={styles.descricao}>{toquio.descricao}</p>
            </section>
        </>
    )
}

export default ToquioPage