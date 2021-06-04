import React from 'react'
import { css, jsx } from '@emotion/react'

const Slide = ({ content }) => {
// console.log(content)


  return(
    <div className="slide" style={{height: '100vh',width: '100%', backgroundImage: 'url("' + content + '")'}}
    // css={css`
    //   height: 20%;
    //   width: 100%;
    //   background-image: url('${content}');
    //   background-size: cover;
    //   background-repeat: no-repeat;
    //   background-position: center;
    // `}
  />
  )
 
}

export default Slide