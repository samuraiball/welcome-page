import Profile from "../components/organisms/Profile";
import WelcomePageApi from "../lib/dirver/WelcomePageApi";
import SideBar from "../components/organisms/SideBar";
import Header from "../components/organisms/Header";
import ContentsContainer from "../components/container/ContentsContainer";

export default function Home(props) {
    return (
        <div>
            <Header/>
            <SideBar/>
            <ContentsContainer>
                <Profile
                    blogs={props.blogs}
                    statistics={props.statistics}
                />
            </ContentsContainer>
        </div>
    )
}


export async function getStaticProps() {

    const statistics = await new WelcomePageApi().fetchBlogStatistics();
    const blogs = await new WelcomePageApi().fetchBlogs();

    return {
        props: {
            blogs: blogs.data,
            statistics: statistics.data,
        },
        revalidate: 3600,
    }
}

