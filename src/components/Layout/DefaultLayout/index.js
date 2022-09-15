import Header from "@/components/Layout/components/Header";
import Sidebar from "@/components/Layout/DefaultLayout/Sidebar";

function DefaultLayout({children}) {
    return(
        <div>
            <Header/>
            <div className="container">
                <Sidebar/>
                {/*//content phải truyền từ ngoài vào dưới dạng children (props)*/}
                <div className="content">{children}</div>
            </div>
        </div>
    )
}
export default DefaultLayout