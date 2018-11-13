import React, { Component, Fragment } from 'react'
import MovieSummary from '../../MovieSummary'
import MovieSummaryLayout from '../../MovieSummaryLayout'
import ContactArea from '../../ContactArea'
import Footer from '../../Footer'
import Header from '../../Header'

// import {
//   results
// } from '../../../fixtures/top_rated.json'

import mapGenresIds from '../../../helpers/mapGenresIds'

import Api from '../../../Api'

// import Row from 'antd/lib/row'
import Col from 'antd/lib/col'

class Landing extends Component {
  state = {
    results: []
  }

  async componentDidMount () {
    if (this.props.resultsNotShell) {
      return false
    }
    else {
      try {
        const r_movies = await Api.getMovies(1).then(e => e.json())
        const r_genres = await Api.getGenres().then(e => e.json())
    
        // console.log('r_movies =>', r_movies.results)
        // console.log('r_genres =>', r_genres.genres)
        const r = mapGenresIds(r_movies.results, r_genres.genres)
        // console.log(r)
          this.setState({
            results: r
          })
       }
       catch (err) {
         console.log(err);
       }
    }
  }

  render () {
    const {
      resultsNotShell
    } = this.props

    const {
      results
    } = this.state

    const data = resultsNotShell ? resultsNotShell : results // PWA AND LOADING STATE (PLACEHOLDER) or CSR|SSR...

    console.log(data)

    return (
      <Fragment>
        <Header />
        <MovieSummaryLayout title='TOP MOVIES'>
          {
            data.map(movie => (
              <Col xs={24} sm={24} md={12} lg={8} key={movie.id}>
                <MovieSummary
                  title={movie.title}
                  movieUrl={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                  anno={movie.release_date}
                  genre={movie.genre_ids}>
                  {movie.overview}
                </MovieSummary>
              </Col>
            ))
          }
        </MovieSummaryLayout>
        <ContactArea title="CONTACT"/>
        <Footer />
      </Fragment>
    )
  }
}

export default Landing
