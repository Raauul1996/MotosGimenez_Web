import ContainerDiv from "../components/ContainerDiv"

export default function HomePage () {
 return(
    <div className="mx-3">
        <div className="mt-5 d-flex flex-column">
            <h1>Motos Gimenez</h1>
            <h2>Calidad y fiablidad, abalados por más de 40 años de experiencia.</h2>
        </div>
        <ContainerDiv 
        img="https://www.motociclismo.es/uploads/s1/11/22/65/56/bmw-s-1000-rr-2023-12.jpeg"
        >
            <h1>¡Bienvenido a Motos Gimenez!</h1>
            <p className="fs-4">
                ¡Bienvenido a Motos Gimenez, donde la pasión por las motos se 
                encuentra con más de 40 años de experiencia! En nuestro taller, 
                cada revolución del motor es un testimonio de nuestra dedicación a la 
                excelencia en el servicio. Echale un vistazo a nuestras motos en venta.
            </p>
        </ContainerDiv>
        <ContainerDiv 
        img="https://img.freepik.com/fotos-premium/mecanico-automoviles-trabajando-reparando-motores-automoviles-talleres-mecanicos_179314-321.jpg"
        imgPosition="left"
        >
            <h1>Servicios</h1>
            <p className="fs-4">
                Ofrecemos un servicio integral de reparación,
                mantenimiento y personalización.
                ¡Confía en nosotros para mantener tu moto en la mejor forma y experimenta 
                la diferencia de décadas de experiencia en el mundo de las dos ruedas!
            </p>
        </ContainerDiv>
        <ContainerDiv 
        img="https://vendermotoya.com/wp-content/uploads/sites/2/2022/02/contrato-compra-venta-de-moto.jpg"

        >
            <h1>Venta Motos usadas/nuevas</h1>
            <p className="fs-4">
            En Motos Gimenez tenemos ofertas de motos nuevas y de segunda mano. 
            Desde modelos clásicos hasta las últimas novedades, encuentra la moto 
            perfecta que se adapta a tu estilo. ¡Atrévete a vivir la aventura sobre 
            dos ruedas con Motos Gimenez! 
            </p>
        </ContainerDiv>
        <ContainerDiv 
        img="/public/Location.png"
        imgPosition="left"
        
        >
            <h1>Ubicación</h1>
            <p className="fs-4">
                Ubicados en Quart de Poblet, en Av/Villalba de Lugo, 10. Somos el destino 
                confiable para los amantes de las dos ruedas que buscan calidad, 
                conocimiento y un toque de autenticidad en cada viaje. 
            </p>
        </ContainerDiv>


    </div>
 )   
}