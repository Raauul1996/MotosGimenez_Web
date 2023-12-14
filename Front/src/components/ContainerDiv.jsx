import useWindowSize from "../hooks/useWindowSize";

export default function ContainerDiv({ children, img, imgPosition }) {
    const { ratio, width } = useWindowSize();

    if (ratio > 1) {
        return (
            <div className="row align-items-center my-5 pb-5">
                <div className="col-12 mb-3">
                    <div className="ratio ratio-16x9">
                        <img src={img} alt="" className="rounded-4 shadow img-fluid object-fit-cover" />
                    </div>
                </div>
                <div className="col-12 ps-3 d-flex align-items-center">
                    <div className="h-100">
                        {children}
                    </div>
                </div>
            </div>
        );
    }

    if (ratio < 500/800 && width < 1080){
        if (imgPosition === "left") {
            return (
                <div className="row align-items-center my-5 pb-5" style={{ height: "75vh" }}>
                    <div className="col-12 col-sm-6 ">
                        <div className="ratio ratio-4x3">
                            <img src={img} alt="" className="rounded-4 shadow img-fluid object-fit-cover" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 ps-3 h-75 overflow-y-auto d-flex align-items-center">
                        <div className="h-100">
                            {children}
                        </div>
                    </div>
                </div>
            );
        }
    
        return (
            <div className="row align-items-center my-5 pb-5" style={{ height: "75vh" }}>
                <div className="col-12 col-sm-6 ps-3 h-75 overflow-y-auto d-flex align-items-center">
                    <div className="h-100">
                        {children}
                    </div>
                </div>
                <div className="col-12 col-sm-6">
                    <div className="ratio ratio-4x3">
                        <img src={img} alt="" className="rounded-4 shadow img-fluid object-fit-cover" />
                    </div>
                </div>
            </div>
        );
    }

    if (imgPosition === "left") {
        return (
            <div className="row align-items-center my-5 pb-5" style={{ height: "75vh" }}>
                <div className="col-12 col-sm-6 ">
                    <div className="ratio ratio-1x1">
                        <img src={img} alt="" className="rounded-4 shadow img-fluid object-fit-cover" />
                    </div>
                </div>
                <div className="col-12 col-sm-6 ps-3 h-75 overflow-y-auto d-flex align-items-center">
                    <div className="h-100">
                        {children}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="row align-items-center my-5 pb-5" style={{ height: "75vh" }}>
            <div className="col-12 col-sm-6 ps-3 h-75 overflow-y-auto d-flex align-items-center">
                <div className="h-100">
                    {children}
                </div>
            </div>
            <div className="col-12 col-sm-6">
                <div className="ratio ratio-1x1">
                    <img src={img} alt="" className="rounded-4 shadow img-fluid object-fit-cover" />
                </div>
            </div>
        </div>
    );
}