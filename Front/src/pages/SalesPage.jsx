import SalesContainer from "../components/SalesContainer"

export default function SalesPage () {
    const bike1 = {
        id:0,
        name:"Yamaha Virago 750",
        img1: "https://listing-images.motoscout24.ch/412/9650412/1.jpg?w=1920&q=90",
        img2: "https://assets.catawiki.nl/assets/2018/4/18/e/a/8/ea89a531-befb-4c3a-8cf8-dcf0f69cc3c4.jpg",
        img3: "https://s9.pik.ba/galerija/2022-05/24/10/slika-323343-628c91b919b57-velika.jpg",
        price: "3.000€",
        km: "30.000",
        year: "1996",
        A2: "Sí",
        power: "55 cv"
    }

    const bike2 = {
        id: 1,
        name:"Kawasaki Z1000",
        img1: "https://motorbike.blob.core.windows.net/images/78ec3263-8729-4eb9-b0e3-e3d4bf9c581d.jpg",
        img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBN2sDULv7FFT6Xk50RKRG0f_k1Ad9uPixtIUhJf9RHgX_qhKaUl4XfbLaTRlUJDK5ZUc&usqp=CAU",
        img3: "https://i.ytimg.com/vi/sq_PA0TqjAg/maxresdefault.jpg",
        price: "5.500€",
        km: "35.000",
        year: "2008",
        A2: "No",
        power: "125 cv"
    }

    const bikes = [bike1, bike2]
    

    return(
        <>
            <div className="text-center container mb-5 pb-5">
                <h1>Motos de Segunda Mano</h1>
                <p className="fs-4">
                    Explora la libertad sobre ruedas con nuestras motos de 
                    segunda mano. Cada unidad, cuidadosamente seleccionada y revisada, 
                    ofrece emociones asequibles y calidad garantizada. 
                    ¡Encuentra tu próxima aventura en nuestro taller y no dude 
                    en contactarnos!
                </p>
            </div>
            {bikes.map((bike) => {
                return(
                    <SalesContainer
                    bike = {bike}
                    key={bike.id}
                    />
                )
            })}

        </>
    )
}