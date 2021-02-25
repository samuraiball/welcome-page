import React, {useEffect, useReducer} from "react";
import styled from "styled-components";
import Count from "../atoms/Count";
import {BlogsState} from "../state/BlogsState";
import BlogsReducer from "../../lib/reducer/BlogsReducer";
import XSlideInContainer from "../container/XSlideInAnimationContainer";
import SectionTitle from "../molecules/SectionTitle";
import Card from "../molecules/Card";
import YSlideInAnimationContainer from "../container/YSlideInAnimationContainer";
import BlogSearchBox from "../molecules/BlogSearchBox";

const BlogCount = styled(Count)`
`

const blogsState: BlogsState = {
    searchTerm: "",
    rowBlogs: {feed: []},
    filteredBlogs: {feed: []},
};


const BlogInfo = (data) => {
    const [state, dispatch] = useReducer(BlogsReducer, blogsState)

    useEffect(() => {
        const fetchBlogs = async () => {
            dispatch({type: `fetchBlogs`, newWord: '', payload: data.blogs})
        }
        fetchBlogs().then();
    }, [])


    const filterBlogs = (word: string) => {
        dispatch({type: "filterBlogs", newWord: word, payload: []})
    }

    return (
        <div className="blog-info">
            <XSlideInContainer>
                <SectionTitle text="Posted Blogs"/>
                <BlogSearchBox searchTerm={state.searchTerm} filterFunction={filterBlogs}/>
                <BlogCount number={state.filteredBlogs.feed.length}/>
            </XSlideInContainer>
            <YSlideInAnimationContainer>
                {state.filteredBlogs.feed.map((entry, index) => (
                    <Card
                        key={index}
                        href={entry.link.href}
                        title={entry.title}
                        summary={entry.summary}
                        tags={entry.category === null ? [] : entry.category}
                        published={entry.published}
                    />
                ))}
            </YSlideInAnimationContainer>
        </div>
    )
}

export default BlogInfo
