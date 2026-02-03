import { destinos } from "@/app/Components/data/destinos";
import styles from "./page.module.css"

const RomaPage = () => {
    const roma = destinos.find((d) => d.rota === "roma")

    if (!roma) return <p>Destino não encontrado</p>

    return (
        <>
            <section className={styles.container}>
                <h1 className={styles.titulo}>{roma.nome}</h1>

                <img className={styles.imagem} src={roma.imagem} alt={roma.nome} />

                <p className={styles.descricao}>{roma.descricao}</p>
            </section>
        </>
    )
}

export default RomaPage