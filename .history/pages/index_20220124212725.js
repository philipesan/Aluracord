function GlobalStyle()  {
    return (
        <style global jsx>{`
            * {
                background: black;
            }
        `}</style>
    );
}

function Titulo(props) {
    const Tag = props.tag;
    return (
        <>
            <Tag>{props.children}</Tag>
            <style jsx>{`
            ${Tag} {
                color: red;
                font-size:24px;
                font-weight:600;
            }
            `}</style>
        </>
    );
}

//Componente React
function HomePage() {
    return (
        <GlobalStyle />
        <div>
            <Titulo tag="h2">Boas Vindas de Volta!</Titulo>
            <h2>Imersão Alura React</h2>
        </div>
    ); 
}
  
  export default HomePage
  