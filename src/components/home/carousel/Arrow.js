
import React from 'react'
import { css, jsx } from '@emotion/react'

const Arrow = ({ direction, handleClick }) => {

  

    return(
        <div className="arrow" 
        onClick={handleClick}
      >
        {direction === 'right' ? <span>NEXT<i class="fa fa-chevron-right" aria-hidden="true"></i></span> : <span><i class="fa fa-chevron-left" aria-hidden="true"></i>PREV</span>}
      </div>
    )
 
}

export default Arrow