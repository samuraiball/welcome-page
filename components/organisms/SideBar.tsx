import React from 'react';
import styled from "styled-components";
import Link from "next/link";


const TopLinkWrapper = styled.div`
  color: white;
  font-size: 24px;
  margin-left: 20px;
`

const ChildLinkWrapper = styled.div`
  margin-top: 8px;
  margin-left: 40px;
  font-size: 18px;
`
const AnchorWrapper = styled.a`
  color: white;
  tpointer-events: none;
  tcursor: default;
  text-decoration: none;

  &:hover {
    transition: 0.2s;
    color: #d4d1d1;
  }
`

const Wrapper = styled.div`

  ${ChildLinkWrapper}:nth-child(n) :before {
    content: '┣';
  }


  ${ChildLinkWrapper}:last-child :before {
    content: '┗';
  }

  background: #004643;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  padding-top: 20px;
  width: 170px;
  height: 100vh;
  box-shadow: black 0 0 5px;

  @media (max-width: 480px) {
    position: fixed;
    overflow-x: hidden;
    width: 100vh;
    height: 110px;
  }
`

const SideBar = () => {
    return (
        <Wrapper id="nav">
            <TopLinkWrapper>
                <Link href="/">
                    <AnchorWrapper>Heno</AnchorWrapper>
                </Link>
            </TopLinkWrapper>
            <ChildLinkWrapper>
                <Link href="/">
                    <AnchorWrapper>Profile</AnchorWrapper>
                </Link>
            </ChildLinkWrapper>
            <ChildLinkWrapper>
                <Link href="/blogs">
                    <AnchorWrapper>Blogs</AnchorWrapper>
                </Link>
            </ChildLinkWrapper>
        </Wrapper>
    )
}

export default SideBar