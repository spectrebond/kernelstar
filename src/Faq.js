import React, { useEffect, useState } from 'react'
import Footer from './component/Footer'
import './Faq.css'
import Header from './component/Header';
import Desktop from './component/Desktop'
function Faq() {
  const [faqs, setFaqs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  const URL = 'https://kernelbackend.herokuapp.com/api/faqs';

  useEffect(async () => {
    setIsLoading(true);
    const resp = await fetch(URL);
    const respData = await resp.json()
    if(respData){
      setFaqs(respData)
      setIsLoading(false);
    }
  }, [])

  const [pw, setPw] = useState();
  useEffect(() => {
    if (window.outerWidth < 800) {
      setPw(false);
    } else {
      setPw(true);
    }
  }, [document.clientWidth]);
  
  return (
    <>
      {
        pw ? (
          <div className='faq'>
            <div className="faqTop">
              <Header />
            </div>
            <div className="faqCenter">
              {

                isLoading ? (<img src={process.env.PUBLIC_URL+'./loadingblack.svg'}/>):(
                faqs.map((faq) => (
                  <div className="faqs">
                    <details className="faqContent">
                      <summary>{faq.que}</summary>
                      <p>{faq.ans}</p>
                    </details>

                  </div>
                ))
                )
              }
            </div>
            <div className="faqBottom">
              <Footer />
            </div>
          </div>
        ) : (
          <Desktop />
        )
      }
    </>
  )
}

export default Faq
