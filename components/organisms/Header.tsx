import {Helmet} from "react-helmet";

const Header = () => {
    return (
        <Helmet>
            <meta property="og:title" content="Welcome Page"/>
            <meta property="og:type" content="text/html"/>
            <meta property="og:image"
                  content="https://ja.gravatar.com/userimage/126288691/c56d452d930768a5f13a966389ddf39e.png"/>
            <meta property="og:url" content="hirooak.dev"/>
            <meta property="og:description"
                  content="Software Engineer at Uzabase. Curious about Java, Linux, Vim, Container Technology, Scrum"/>
        </Helmet>
    )
}

export default Header
