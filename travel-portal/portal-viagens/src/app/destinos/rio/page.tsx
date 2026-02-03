import { destinos } from "@/app/Components/data/destinos";
import styles from "./page.module.css"

const RioPage = () => {
    const rio = destinos.find((d) => d.rota === "rio")

    if (!rio) return <p>Destino não encontrado</p>

    return (
        <>
            <section className={styles.container}>
                <h1 className={styles.titulo}>{rio.nome}</h1>

                <img className={styles.imagem} src={rio.imagem} alt={rio.nome} />

                <p className={styles.descricao}>{rio.descricao}</p>
            </section>
        </>
    )
}

export default RioPage