import ContainerDiv from "../components/ContainerDiv"

export default function ServicesPage() {
    return (
        <>
            <div className="text-center container mb-5 pb-5">
                <h1 className="fs-1">Servicios</h1>
                <p className="fs-3">
                    En Motos Gimenez ofrecemos servicios integrales, desde
                    mantenimiento preventivo y reparaciones mecánicas hasta ajustes
                    finos y mejoras personalizadas. Especializados en restauración,
                    neumáticos,frenos y más, asegurando un rendimiento óptimo y la
                    satisfacción del propietario
                </p>
            </div>
            <ContainerDiv
                img="https://3.bp.blogspot.com/-7StMMKIR8uY/XHAlJE90j7I/AAAAAAAAHgA/5O021kzJB1A3XN9UlqsteHlza3JURFKSgCLcBGAs/s1600/Bridgestone_Moto2.jpg"
            >
                <h1>Cambio de neumaticos</h1>
                <p className="fs-4">
                En nuestro taller ofrecemos servicio esencial de cambio de 
                neumáticos para todas las marcas. Este proceso incluye la 
                evaluación de desgaste, selección de neumáticos adecuados, 
                desmontaje y montaje profesional, balanceo y alineación. 
                Garantiza un manejo seguro y óptimo rendimiento.
                </p>
            </ContainerDiv>

            <ContainerDiv
                img="https://images.prismic.io/ipone/0f49d6ad-b6ab-4f5e-9195-d1e171fe1933_Doseur_1000x1230_UseCase.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&h=&w=3200"
                imgPosition="left"
            >
                <h1>Revisiones completas</h1>
                <p className="fs-4">
                    En Motos Gimenez abarcamos un análisis exhaustivo de 
                    componentes clave. Incluye inspección de frenos, sistema 
                    de suspensión, neumáticos, fluidos, luces y batería. 
                    Además, cambio de aceite y 
                    filtro, y se identifican posibles problemas mecánicos. 
                    Este servicio asegura un rendimiento óptimo y la detección 
                    temprana de posibles fallos.
                </p>
            </ContainerDiv>

            <ContainerDiv
                img="https://img.freepik.com/fotos-premium/manos-mecanico-automoviles-primer-plano-motor-desmontado-mantenimiento-automoviles_752567-764.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698105600&semt=ais"
            >
                <h1>Averias complejas</h1>
                <p className="fs-4">
                    Frente a averías graves, ejecutamos reparaciones especializadas 
                    que pueden incluir la reconstrucción del motor, reparación 
                    de la transmisión, sustitución de componentes críticos y 
                    ajustes a sistemas eléctricos. Este enfoque experto garantiza 
                    la restauración completa y segura de la moto.
                </p>
            </ContainerDiv>

            <div className="text-center container mb-5 pb-5">
                <h1 className="mt-5 text-center">Restauraciones</h1>
                <p className="fs-3">
                Revivimos leyendas sobre dos ruedas. Descubre la magia de 
                nuestras restauraciones en el taller, donde cada moto cuenta 
                una historia única.
                </p>
            </div>

            <ContainerDiv
                img="https://s3.eu-west-1.amazonaws.com/cdn.motorbikemag.es/wp-content/uploads/2018/05/Yamaha-YZF-R1-2000-01-1200x729.jpg"
            >
                <h1>Restauración R1-2000</h1>
                <p className="fs-4">
                    A esta Yamaha YZF R1 del 2000 le realizamos una restauración 
                    completa. Reconstrucción del sistema de carburación, 
                    reemplazo de juntas y sellos, ajuste de válvulas, renovación del 
                    sistema de escape, instalación de nuevos cables y electrónica, y 
                    toda la pintura personalizada. La moto ahora exhibe un rendimiento 
                    mejorado y una estética renovada.
                </p>
            </ContainerDiv>
            <ContainerDiv
                img="https://motos.espirituracer.com/archivos/2019/03/Honda-CBR-1000-F-5.jpeg"
                imgPosition="left"
            >
                <h1>Restauración CBR 1000 F</h1>
                <p className="fs-4">
                    En Motos Gimenez transformamos esta Honda CBR 1000 F con una restauración 
                    integral. Se enfocó en la reconstrucción del sistema de frenos, 
                    ajuste fino del motor, instalación de un escape deportivo, 
                    reemplazo de la suspensión, renovación eléctrica con nuevos cables 
                    y luces LED, y una pintura personalizada. La CBR 1000 F ahora 
                    brilla con un rendimiento optimizado y un aspecto renovado.
                </p>
            </ContainerDiv>
        </>

    )
}