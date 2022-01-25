function GlobalStyle()  {
    return (
        <style global jsx>{`
            * {
                background: black;
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            body {
                font-family: sans-serif;
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
        <div>
            <GlobalStyle />
            <Titulo tag="h2">Boas Vindas de Volta!</Titulo>
            <h2>Imersão Alura React</h2>
        </div>
    ); 
}
  
  export default HomePage
  