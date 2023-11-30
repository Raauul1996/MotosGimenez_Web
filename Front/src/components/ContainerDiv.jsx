export default function ContainerDiv ({children, img, imgPosition}) {
    return(
        <div className="d-flex align-items-center my-5">
            <div className="w-50 pe-1">
                {children}
            </div>
            <div className="w-50 ratio ratio-1x1 ">
                <img src={img} alt="" className="rounded-4 shadow-lg img-fluid object-fit-cover" />
            </div>
        </div>
    )
}