import React, { memo } from 'react'

import Row from 'antd/lib/row'
// import Col from 'antd/lib/col'

import './MovieSummaryLayout.scss'

const MovieSummaryLayout =  ({
  children,
  title
}) => {
  return (
    <Row gutter={0} className='MovieSummaryLayout'>
      <span className='MovieSummaryLayoutTitle'>
        {title}
      </span>
      {children}
    </Row>
  )
}

export default memo(MovieSummaryLayout)
