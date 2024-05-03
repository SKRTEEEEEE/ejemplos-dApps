import Link from "next/link";


export default function InfoBlockchainPage() {
    //style={{marginTop: 1000}} 
    return (
        
          <section id="info-blockchain-pg" className="flex flex-col gap-4 items-center justify-start">
            <h2 className="w-11/12">
             Descubre nuevas aplicaciones descentralizadas de ejemplo este Verano 2024
            </h2>
            <div className="flex flex-col md:flex-row items-center md:items-start justify-evenly gap-2">
            <article className="w-11/12 md:w-4/12">
                <h3>Billetera</h3>
                <h4>Conecta-te a tu billetera favorita.</h4><p>Si no tienes, create una. Nosotros recomendamos Metamask. </p><p  className="link"><i><Link target="_blank" href="https://chromewebstore.google.com/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn">Puedes descargarla para Chrome haciendo click aquí.</Link></i></p> <p  className="link"><i><Link href="https://metamask.io/">O descubrir mas maneras de utilizarla haciendo click aquí.</Link></i></p>
                <h4>¿Por que una billetera?</h4>
                <p>Una wallet blockchain es un software o servicio que permite almacenar, recibir y enviar transacciones. Funciona como una interfaz que gestiona las claves privadas y públicas necesarias.</p>
                <p>La mayoría de wallets o carteras son compatibles con smart contracts, lo que significa que pueden interactuar con contratos inteligentes en la blockchain. Esto permite la ejecución de lógica programable (dApps), utilizando los activos almacenados en la wallet.</p>
                <p className="link"><Link target="_blank" href="https://www.modocripto.es/blog/como-crear-una-cartera-o-wallet-en-metamask/"><i>Descubre como descargarla e interactuar con ella aquí.</i></Link></p>
                <p><b>¡Te recomendamos que si es tu primera cartera, guardes esta para solo fondos de prueba!.</b> Y te crees otra el dia que quieras utilizarla con fondos reales, recuerda que puedes tener tantas billeteras como desees😀.</p>
            </article>
            <article  className="w-11/12 md:w-4/12">
                <h3>Red ETHSepolia</h3>
                <h4>Conecta-te a la red ETHSepolia.</h4>
                <p>Todas las dApps de esta pagina están desplegadas en la red ETHSepolia.</p>
                <p>El botón de la billetera de nuestra pagina web detectara la red en la que se encuentre ahora tu billetera y te solicitara cambiar-la si no estas en ETHSepolia para interactuar con cualquier dApp, tu simplemente deberás aceptar en la ventana emergente de tu Metamask.</p>
                <h4>¿Por que ETHSepolia?</h4>
                <p>ETHSepolia es la principal red de prueba de Ethereum, replica de una forma idéntica esta red para que las personas que trabajamos con dicha red podamos utilizar-la sin grandes costes hasta el momento del despliegue oficial.</p>
                <p>Ethereum sienta las bases de la programación blockchain basada en Smart Contracts, mas del 90% de las actuales criptomonedas y Smart Contracts están basados en estos estándares.</p>
                <p>Al utilizar estas bases (ERC/ERCI) nos aseguramos una interoperabilidad entre diferentes blockchains, programas, dApps, etc...</p>
                <p><Link href="#"><i>Descubre mas información sobre Smart Contracts haciendo click aquí.</i></Link></p>
            </article>
            <article  className="w-11/12 md:w-4/12">
                <h3>Saldo para pruebas</h3>
                <h4>Consigue tokens ETHSepolia.</h4>
                <p>Si no tienes, utiliza un faucet para obtenerlos.</p>
                <p><i><Link target="_blank"  className="link" href="https://sepolia-faucet.pk910.de/">Puedes utilizar este, haciendo click aquí.</Link></i></p>
                <p>Deberás poner tu dirección publica de billetera, que tendrá un patrón parecido a: 0x0000000000000000000000000000000000000000</p>
                <p>Una vez introducida y demostrado que eres humano te permitirá <i>minar</i> ETHSepolia de prueba, espera unos 30 minutos y reclama tus ETHSepolia. 🚀</p>
                <h4>¿Por que los necesito?</h4>
                <p>Toda transacción en la blockchain requiere pagar el costo computacional de dicha transacción(fee).</p>
                <p>Esto se debe a que el costo computacional es compartido, lo que significa que los gastos computacionales son asumidos por los participantes de la red que validan y aseguran las transacciones.</p>
                <p>Estos gastos dependen de la congestion de la red blockchain usada y sus características.</p>
                <p><Link href="#"><i>Descubre mas información sobre las comisiones(fees) haciendo click aquí.</i></Link></p>
            </article>
            </div>
          </section>
    
     
    );
  }