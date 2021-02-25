import React from "react";
import Image from "next/image";

type Props = {
    src: string
}

const Avatar = (props: Props) => {
    return (
           <Image
               src={props.src}
               height={150}
               width={150}
               alt="hehoheno"
           />
    )
}

export default Avatar