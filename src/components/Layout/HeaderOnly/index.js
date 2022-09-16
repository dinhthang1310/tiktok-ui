import Header from "@/components/Layout/components/Header";

function HeaderOnly({children}) {
    return(
        <div>
            <Header/>
            <div className="container">
                {/*//content phải truyền từ ngoài vào dưới dạng children (props)*/}
                <div className="content">{children}</div>
            </div>
        </div>
    )
}
export default HeaderOnly