import React, { useEffect } from 'react'
import Banner from '../components/Banner'
import ProductList from '../components/ProductList'

function HomePage() {
  useEffect(() => {
          window.scrollTo(0, 0); // Cuộn lên đầu trang
        }, [location.pathname]); // Theo dõi sự thay đổi của đường dẫn
  return (
    <div>
      <Banner/>
      <ProductList/>
    </div>
  )
}

export default HomePage
