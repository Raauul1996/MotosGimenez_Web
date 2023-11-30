import ContainerDiv from "../components/ContainerDiv"

export default function HomePage () {
 return(
    <div className="mx-3">
        <div className="mt-5 d-flex flex-column align-items-center">
            <h1>Motos Gimenez</h1>
            <h2>Calidad y fiablidad, abalados por más de 40 años de experiencia.</h2>
        </div>
        <ContainerDiv img="https://www.motociclismo.es/uploads/s1/11/22/65/56/bmw-s-1000-rr-2023-12.jpeg">
            <h1>Hola</h1>
            <p className="fs-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est omnis soluta quaerat et expedita recusandae assumenda magni, tempora praesentium hic nisi ex sit reiciendis perferendis nesciunt explicabo, tempore, sunt ut.
            </p>
        </ContainerDiv>
    </div>
 )   
}