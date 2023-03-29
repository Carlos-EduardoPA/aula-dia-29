    import styles from './Usuario.module.css'

function Usuario( {nome, idade, Cargo, foto} ) {
    return(
        <div className={styles.div_user}>
            <img className={styles.imagem} src={foto} alt={nome} />

        <h1 className={styles.titulo}>{nome}</h1>
        <p>{idade}</p>
        <p>{Cargo}</p>


        </div>

    )
}

export default Usuario