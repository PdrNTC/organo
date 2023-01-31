import './Banner.css'

function Banner () {
    // JSX parece HTML, mas não é. O react entende o codigo e insere no dom da pagina.
    return (
        <header className="banner">
            <img src="/imagens/banner.png" alt="O banner principal"/>    
        </header>
    )
}

export default Banner