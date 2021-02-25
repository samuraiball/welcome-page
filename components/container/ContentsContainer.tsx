import React, {ReactNode} from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-left: 200px;
  margin-bottom: 30px;

  @media (max-width: 480px) {
    margin: 140px 10px 20px 10px;
  }
`

type Props = {
    children: ReactNode
}

const ContentsContainer = (props: Props) => {
    return (
        <Wrapper>
            {props.children}
        </Wrapper>
    )
}

export default ContentsContainer

