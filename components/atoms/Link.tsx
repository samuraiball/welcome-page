import React from "react";
import styled from "styled-components";
import fontawesome from '@fortawesome/fontawesome'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronRight, faPencilAlt, faDove, faCodeBranch} from '@fortawesome/fontawesome-free-solid'


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

fontawesome.library.add(faChevronRight, faPencilAlt, faDove, faCodeBranch)

const selectIcon = (type: string) => {
    switch (type) {
        case 'twitter':
            return <FontAwesomeIcon icon="dove"/>
        case 'blog':
            return <FontAwesomeIcon icon="pencil-alt"/>
        case 'github':
            return <FontAwesomeIcon icon="code-branch"/>
        default:
            return <FontAwesomeIcon icon="chevron-right"/>
    }
}

const Link = (props) => {
    return (
        <Text>
            <Anchor href={props.src} target="_blank">
                {selectIcon(props.type)} {props.children}
            </Anchor>
        </Text>
    )
}

export default Link