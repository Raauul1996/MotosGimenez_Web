export default function ContainerDiv({ children, img, imgPosition }) {
    if (imgPosition === "left") {
        return (
            <div className="row align-items-center my-5 pb-5">
                <div className="col-12 col-sm-6">
                    <div className="ratio ratio-1x1">
                        <img src={img} alt="" className="rounded-4 shadow img-fluid object-fit-cover" />
                    </div>
                </div>
                <div className="col-12 col-sm-6 ps-3 mh-100 overflow-y-scroll" style={{ height: "50vw" }}>
                    {children}
                </div>
            </div>
        );
    }

    return (
        <div className="row align-items-center my-5 pb-5">
            <div className="col-12 col-sm-6 ps-3 mh-100 overflow-y-scroll" style={{ height: "50vw" }}>
                {children}
            </div>
            <div className="col-12 col-sm-6">
                <div className="ratio ratio-1x1">
                    <img src={img} alt="" className="rounded-4 shadow img-fluid object-fit-cover" />
                </div>
            </div>
        </div>
    );
}