import React from "react";
import styled from "styled-components";

const Wrapper = styled.input`
  margin: 20px 0 10px 10px;
  height: 30px;
  width: 250px;
  border-radius: 5px;


  @media (max-width: 480px) {
    margin: 20px 0 10px 0;
  }

  ::-webkit-input-placeholder {
    font-size: 15px;
  }

  ::-moz-placeholder { 
    font-size: 15px;
  }

  :-ms-input-placeholder {
    font-size: 15px;
  }
`

type Props = {
    searchTerm: string,
    filterFunction: any
}

const handleChange = (event: React.ChangeEvent<HTMLInputElement>, filterFunction) => {
    filterFunction(event.target.value)
}

const BlogSearchBox = (props: Props) => {
    return <Wrapper type="text"
                    placeholder="Search"
                    value={props.searchTerm}
                    onChange={e => handleChange(e, props.filterFunction)}/>
}

export default BlogSearchBox