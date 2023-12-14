import useWindowSize from "../hooks/useWindowSize";

export default function SalesContainer({ bike }) {
    const { ratio } = useWindowSize();

    const { name, img1, img2, img3, price, km, year, A2, power, id } = bike;

    if (ratio > 0) {
        return (
            <div className="row align-items-center justify-content-center my-5 pb-5">
                <div className={ratio > 1 ? "col-12 mb-3" : "col-8 mb-3"}>
                    <div id={`carrousel${id}`} className="carousel slide">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="ratio ratio-4x3">
                                    <img src={img1} className="d-block w-100 rounded-4 shadow img-fluid object-fit-cover" alt="..." />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="ratio ratio-4x3">
                                    <img src={img2} className="d-block w-100 rounded-4 shadow img-fluid object-fit-cover" alt="..." />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="ratio ratio-4x3">
                                    <img src={img3} className="d-block w-100 rounded-4 shadow img-fluid object-fit-cover" alt="..." />
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target={`#carrousel${id}`} data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target={`#carrousel${id}`} data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="col-12 ps-3 w-100 text-center d-flex align-items-center">
                    <div className="h-100 w-100">
                        <h1>{name}</h1>
                        <h1>{price}</h1>
                        <p>{`Kilometros: ${km}`}</p>
                        <p>{`Año: ${year}`}</p>
                        <p>{`Compatible con el A2: ${A2}`}</p>
                        <p>{`Potencia: ${power}`}</p>

                    </div>
                </div>
            </div>
        );
    }
}