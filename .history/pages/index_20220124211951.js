function Titulo(props) {
    return (
        <>
            <h1>{props.children}</h1>
            <style jsx>{`
            h1 {
                color: red;
                font-size:56px;
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
            <Titulo>Boas Vindas de Volta!</Titulo>
            <h2>Imersão Alura React</h2>
        </div>
    ); 
}
  
  export default HomePage
  