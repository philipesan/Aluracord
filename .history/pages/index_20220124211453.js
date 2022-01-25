function Titulo(props) {
    return (
        <h1>props.children!</h1>
    );
}

//Componente React
function HomePage() {
    return (
        <div>
            <Titulo>Boas Vindas de Volta!</Titulo>
            <h2>Imersão Alura React</h2>

            <style jsx>{`
                Titulo {
                    color: red;
                }
            `}</style>
        </div>
    ); 
}
  
  export default HomePage
  