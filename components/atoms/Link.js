import React from "react";
import styled from "styled-components";

const Text = styled.div`
  margin-top: 10px;
  font-size: 15px;
`

const Anchor = styled.a`
  tpointer-events: none;
  tcursor: default;
  text-decoration: none;
  color: #004643;

  &:hover {
    color: #f9bc60;
  }

`

const Link = (props) => {
    return (
        <Text>
            <Anchor href={props.src} target="_blank">
                -- {props.text}
            </Anchor>
        </Text>
    )
}

export default Link