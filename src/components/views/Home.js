import React, { useEffect } from 'react'
import { useProductContext } from '../../contexts/ProductContext'
import CollectionGrid from '../partials/CollectionGrid'
import Header from '../partials/Header'
import Showcase from '../partials/Showcase'
import Offers from '../partials/Offers'
import NewProducts from '../partials/NewProducts'
import Footer from '../partials/Footer'


const Home = () => {
  const { featured, latest, popular, getFeaturedAsync, getLatestAsync, getPopularAsync } = useProductContext()

  useEffect(() => {
    getFeaturedAsync()
    getLatestAsync()
    getPopularAsync()
  }, [])

  return (
    <>
        <Header />
        <Showcase />
      
        <CollectionGrid title="Featured Products" items={featured} />
        <Offers />
        {/* <CollectionGrid title="New Products" items={latest} /> 
        <CollectionGrid title="Popular Products" items={popular} /> */}
        <NewProducts />
        <Footer /> 
       
    </>
  )
}

export default Home