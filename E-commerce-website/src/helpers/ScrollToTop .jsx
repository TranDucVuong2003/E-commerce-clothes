import { useEffect } from 'react'
import { useLocation } from 'react-router';

const ScrollToTop = () => {
    const location = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0); // Cuộn lên đầu trang
    }, [location.pathname]); // Theo dõi sự thay đổi của đường dẫn
  
    return <></>;
};

export default ScrollToTop 
