import React from 'react'

import Row from 'antd/lib/row'
import Col from 'antd/lib/col'

import './MovieSummary.scss'

export default ({
  title,
  anno,
  movieUrl,
  children,
  genre
}) => {
  return (
    <Row className='MovieSummary'>
      <Col xs={24} sm={12} md={12}>
        <div className='MovieSummaryImg' style={{
          backgroundImage: `url(${movieUrl})`
        }}>
          &nbsp;
        </div>
      </Col>
      <Col xs={24} sm={12} md={12}>
        <div className='MovieSummaryTitle'>
          {title}
          <span className='MovieSummaryAnno'>{anno.slice(0, 4)}</span>
          <div className='MovieSummaryGenre'>
            {genre.map(item => {
              return (
                <span key={item.id} className='MovieSummaryGenre-item'>
                  {item.name}
                </span>
              )
            })}
          </div>
        </div>
        <p className='MovieSummaryP'>
          {children}
        </p>
      </Col>
    </Row>
  )
}
