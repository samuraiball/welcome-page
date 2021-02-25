import axios from "axios";
import Config from "../Config";

class WelcomePageApi {
    async fetchBlogs() {
        return axios(Config().welcomePageEndpoint + "/hatena/entries");
    }

    async fetchBlogStatistics() {
        return axios(Config().welcomePageEndpoint + "/hatena/statics");

    }
}

export default WelcomePageApi