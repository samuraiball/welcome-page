import React from "react";
import SectionTitle from "../molecules/SectionTitle";
import Link from "../atoms/Link";
import Avatar from "../atoms/Avatar";
import styled from "styled-components";
import BarChart from "../molecules/BarChart";
import {BlogsState, BlogStatistics} from "../state/BlogsState";
import Card from "../molecules/Card";
import XSlideInContainer from "../container/XSlideInAnimationContainer";
import YSlideInAnimationContainer from "../container/YSlideInAnimationContainer";

const ProfileLink = styled(Link)`
  margin-top: 10px;
`

const Contents = styled.div`
  width: auto;
  margin-left: 10px;

  & > p {
    margin: 5px 0 0 0;
    line-height: 1.7rem;
  }

  @media (max-width: 480px) {
    margin-left: 0;

  }
`

const Title = styled.div`
  width: 478px;
  font-size: 23px;
  margin-top: 10px;
  margin-bottom: 7px;

  @media (max-width: 480px) {
    width: auto;
  }
`

const BlogStatisticsContainer = styled.div`
  width: 1024px;
  display: flex;

  @media (max-width: 480px) {
    width: auto;
    display: block;
  }
`

const CardContainer = styled.div`
  margin-left: -10px;
  animation: SlideCardIn 1.5s;

  @media (max-width: 480px) {
    margin-left: -5px;
  }

  @keyframes SlideCardIn {
    0% {
      opacity: 0;
      transform: translateY(-10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

const initStatistics: BlogStatistics = {data: []}

const blogsState: BlogsState = {
    searchTerm: "",
    rowBlogs: {feed: []},
    filteredBlogs: {feed: []},
};

function Profile(data) {
    return (
        <div className="profile">
            <XSlideInContainer>
                <Avatar src="/images/henohenomoheji.png"/>
                <SectionTitle text="About Me"/>
                <Contents>
                    <p>
                        名前：ヒロオカ
                    </p>
                    <p>
                        ユーザベースのソフトウェアエンジニア<br/>
                        Java(エコシステム含む), Linux, Vim, コンテナ技術, アジャイル開発あたりに興味があります。<br/>
                    </p>
                </Contents>
                <SectionTitle text="About This Site"/>
                <Contents>
                    <p>
                        このサイトは、私がCSSやフロントエンドの勉強のために作っています。<br/>
                        以下の技術スタックや設計手法を使って、作成してます。
                    </p>
                    <ul>
                        <li>React</li>
                        <li>Typescript</li>
                        <li>Next.js</li>
                        <li>styled-component</li>
                        <li>Atomic Design</li>
                    </ul>
                    <p>
                        すべて生のCSSで作っていて（styled-componentは使っていますが）、CSSフレームワークやコンポーネントフレームワークは使っていません。<br/>
                    </p>
                </Contents>
                <Contents/>
                <SectionTitle text="Links"/>
                <Contents>
                    <ProfileLink type="twitter" logo="logo-twitter"
                                 src="https://twitter.com/yuya_hirooka">Twitter</ProfileLink>
                    <ProfileLink type="github" logo="logo-github"
                                 src="https://github.com/samuraiball">GitHub</ProfileLink>
                    <ProfileLink type="blog" logo="pencil-outline"
                                 src="https://yuya-hirooka.hatenablog.com/">はてなブログ</ProfileLink>
                </Contents>
            </XSlideInContainer>
            <YSlideInAnimationContainer>
                <SectionTitle text="Blog Statistics"/>
            </YSlideInAnimationContainer>
            <BlogStatisticsContainer>
                <Contents>
                    <YSlideInAnimationContainer>
                        <Title>Latest Posts</Title>
                    </YSlideInAnimationContainer>
                    <CardContainer>
                        {data.blogs.feed.slice(0, 3).map((entry, index) => (
                            <Card
                                key={index}
                                href={entry.link.href}
                                title={entry.title}
                                summary=""
                                tags={entry.category === null ? [] : entry.category}
                                published={entry.published}
                            />
                        ))}
                    </CardContainer>
                </Contents>
                <Contents>
                    <YSlideInAnimationContainer>
                        <Title>Top 10 Tags</Title>
                    </YSlideInAnimationContainer>
                    <BarChart data={data.statistics.categoryStatistics}/>
                </Contents>
            </BlogStatisticsContainer>
        </div>
    )
}


export default Profile
