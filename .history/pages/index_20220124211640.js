function Titulo(props) {
    return (
        <h1>{props.children}</h1>
        <style jsx>{`
        Titulo {
            color: red;
        }
    `}</style>
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
  