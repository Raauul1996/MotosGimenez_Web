import ContainerDiv from "../components/ContainerDiv"

export default function ContactPage() {
    return (
        <>
            <div>
                <h1>
                    Ponte en contaco con nosotros!
                </h1>
                <p className="fs-4">
                    ¡Contáctanos ahora y descubre lo que el equipo de Motos Gimenez
                    puede hacer por usted!
                </p>
            </div>
            <ContainerDiv
                img="/public/Location.png"
            >
                <div className="w-100">
                    <a href="https://www.google.es/maps/place/Motos+Gimenez/@39.4839838,-0.4510448,17z/data=!3m1!4b1!4m6!3m5!1s0xd604fffbcab4fa3:0x2da2f39e05f8b309!8m2!3d39.4839797!4d-0.4484699!16s%2Fg%2F11sqc_5rvt?entry=ttu" 
                    className="fs-3 text-decoration-none text-danger">
                        Avenida Villalba de Lugo, 10
                        <br />
                        <div className="fs-5">
                            Quart de Poblet (46930), Valencia.
                        </div>
                    </a >
                    <p className="fs-3 mt-5">
                        Telefono
                        <br />
                        <div className="fs-5">
                            (+34) 96 152 53 45
                        </div>
                    </p>
                    <p className="fs-3 mt-5">
                        Email
                        <br />
                        <div className="fs-5">
                            motos.gimenez@hotmail.com
                        </div>
                    </p>
                    <p className="fs-3 mt-5">
                        Horario
                        <br />
                        <div className="fs-5">
                            Lunes a Viernes: 
                            <br />
                            9:00-14:00 y 16:00-20:30
                            <br />
                        </div>
                    </p>
                </div>
            </ContainerDiv>
        </>
    )
}