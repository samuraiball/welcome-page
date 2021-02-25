import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 10px;
`

const Contents = styled.div`
  display: flex;
  margin-bottom: 5px;
  margin-left: 5px;
`
const Bar = styled.div`
  --size: ${({theme}) => theme.value};
  height: 20px;
  width: var(--size);
  margin-right: 4px;
  background: #004643;
  border-radius: 3px;
  opacity: ${({theme}) => theme.opacity};
  animation: SlideIn 1.8s;

  @keyframes SlideIn {
    0% {
      width: 0;
    }
    100% {
      width: var(--size);
    }
  }
`

const BarWrapper = styled.div`
  width: 300px;
  display: flex;
`

const Item = styled.div`
  width: 40%;
  font-size: 14px;
`

type Props = {
    data: Data[]
}

type Data = {
    name: string
    number: number
}

const BarChart = (props: Props) => {

    const sortedData = props.data
        .sort((a, b) => a.number < b.number ? 1 : -1)
        .slice(0, 10)

    const biggestData = sortedData[0]

    return (
        <Wrapper>
            {sortedData
                .map((e , index) =>
                    <Contents key={index}>
                        <Item>{e.name}</Item>
                        <BarWrapper>
                            <Bar theme={{
                                opacity: (e.number / biggestData.number * 100) + '%',
                                value: (e.number / biggestData.number * 100) + '%'
                            }}/>
                            <div>{e.number}</div>
                        </BarWrapper>
                    </Contents>
                )}
        </Wrapper>
    )
}

export default BarChart