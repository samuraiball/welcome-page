import WelcomePageApi from "../lib/dirver/WelcomePageApi";
import SideBar from "../components/organisms/SideBar";
import BlogInfo from "../components/organisms/BlogInfo";
import Header from "../components/organisms/Header";
import ContentsContainer from "../components/container/ContentsContainer";


export default function Blogs(props) {
    return (
        <div>
            <Header/>
            <SideBar/>
            <ContentsContainer>
                <BlogInfo blogs={props.blogs}/>
            </ContentsContainer>
        </div>
    )
}

//todo: NetlifyでISRがサポートされたらSSGにしたい
export async function getServerSideProps() {
    const blogs = await new WelcomePageApi().fetchBlogs();

    return {
        props: {
            blogs: blogs.data,
        }
    }
}
