import React, { memo, Fragment } from 'react'

import './Header.scss'

const Header =  () => {
  return (
    <Fragment>
      <div className='HeaderTitle'>
        FIMLS & MORE
      </div>
      <div className='Header'>
        <div className='HeaderImg'>
          &nbsp;
        </div>
      </div>
    </Fragment>
  )
}

export default memo(Header)

