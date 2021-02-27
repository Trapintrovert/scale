import React, {useEffect } from 'react'
import Head from 'next/head'
import dynamic from "next/dynamic";
import AOS from "aos";
import CountUp from 'react-countup';



const OwlCarousel = dynamic(import("react-owl-carousel"), {
  ssr: false,
});


export default function Home() {
  useEffect(() => {
    AOS.init();
  }, [])

  const options = {
    loop:true,
    nav:false,
    dots:false,
    margin:30,
    autoplay:true,
    autoplayTimeout:1000,
    smartSpeed:1200,
    autoplayHoverPause:true,
    lazyLoad:true,
    responsive:{
      0:{
          items:1
      },
      500:{
          items:2
      },
      992:{
          items:3
      },
      1300:{
          items:4,
      }
    }
  }

  const option2 = {
    loop:true,
    nav:false,
    dots:false,
    autoplay:true,
    margin:30,
    autoplayTimeout:4000,
    smartSpeed:1200,
    autoplayHoverPause:true,
    lazyLoad:true,
    responsive:{
          0:{
              items:1
          },
          576:{
              items:2
          },
          1550:{
              items:3
          }
      },
  }

  const option3 = {
    loop:true,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:4000,
    smartSpeed:1200,
    autoplayHoverPause:true,
    lazyLoad:true,
    responsive:{
      0:{
          items:2
      },
      768:{
          items:3
      },
      992:{
          items:4
      },
      1200:{
          items:4
      }
    }
  }

  return (
    <div className="main-page-wrapper">
      <Head>
        <title>Scale - Peer 2 Peer Telegram Bot for Crypto Trading</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script> 
      </Head>
      <div className="html-top-content">
			
				<div className="theme-top-section">

          <header className="theme-main-menu">
            <div className="container">
              <div className="menu-wrapper clearfix">
                <div className="logo">
                  <a href="/">
                    <img
                      src="/logo.png"
                      alt="Picture of the author"
                    />
                  </a>
                </div>
                
              </div>
            </div> 
          </header> 
          
          
          <div id="theme-banner" className="theme-banner-one">
						<img src="/multi-sig.png"  alt="Icon" className="illustration"/>
						<img src="/1.png" alt="Icon" className="icon-shape-one"/>
						<img src="/2.png" alt="Icon" className="icon-shape-two"/>
						<img src="/3.png" alt="Icon" className="icon-shape-three"/>
						<div className="round-shape-one"></div>
						<div className="round-shape-two"><img src="/4.png" alt="Icon" /></div>
						<div className="round-shape-three"></div>
						<div className="container">
							<div className="main-text-wrapper">
								<h1>Peer 2 Peer <br/>Exchange<br/>Bot.</h1>
								<p className="col-md-6 col-sm-12">An Escrow Bot built on blockchain to provide secure infrastructure for P2P crypto exchange on Telegram</p>
								<ul className="button-group clearfix">
									<li><a href="#">Trade Now</a></li>
								</ul>
							</div>
						</div>

						<div className="container">
              <div className="stock-market-price">
                <div id="market-rate">
                <OwlCarousel  
                { ...options}
                >  
                  <div className="item">
										<div className="main-wrapper">
								 			<div className="amount">$1,154,600</div>
								 			<h6 className="title">Market Cap.</h6>
								 			<div className="current-info range-down">
								 				<i className="icon flaticon-down-caret"></i>
								 				<span className="rate">-2.30</span>
								 			</div>
								 		</div>
									</div>
								 	<div className="item">
										<div className="main-wrapper">
								 			<div className="amount">2,79,108</div>
								 			<h6 className="title">Total Users</h6>
								 			<div className="current-info range-up">
								 				<i className="icon flaticon-up-carret"></i>
								 				<span className="rate">+1.42</span>
								 			</div>
								 		</div>
									</div>
								 	<div className="item">
										<div className="main-wrapper">
								 			<div className="amount">$7,421,210</div>
								 			<h6 className="title">Trade Volume</h6>
								 			<div className="current-info range-up">
								 				<i className="icon flaticon-up-carret"></i>
								 				<span className="rate">+2.30</span>
								 			</div>
								 		</div>
									</div>
								 	<div className="item">
										<div className="main-wrapper">
								 			<div className="amount">0.0044559</div>
								 			<h6 className="title">Exchange Rate</h6>
								 			<div className="current-info range-down">
								 				<i className="icon flaticon-down-caret"></i>
								 				<span className="rate">-0.63</span>
								 			</div>
								 		</div>
									</div> 
                </OwlCarousel> 
                </div>
                 
							</div>
						</div>
					</div>
				</div> 

        <div className="our-features-one" id="features">
          <div className="container">
            <div className="theme-title">
              <h2>Fast Rising <span>Peer 2 Peer</span> <br/>Trading Bot</h2>
            </div>
            <div className="row">
              <div className="col-md-12 col-xs-12">
                <div className="single-feature">
                  <p>You want to be smart with your contracts in these times of P2P crypto trading. You want to be able to increase your transactions and profits without the fear of fraud. You want to consummate your transactions within minutes in a safe environment. You want to be a successful crypto trader. <br/>YOU WANT TO USE SCALE.</p>
                </div>
              </div> 
              
            </div>
          </div>
        </div> 

        <div className="our-feature-two" id="services">
          <div className="container">
            <div className="row single-block">
              <div className="col-lg-6">
                <div className="text">
                  <div className="number">01</div>
                  <h2 className="title"><span>Safety First,</span> Always.</h2>
                  <p>Scale’s primary goal is to ensure transactions are done in a safe and secure environment; hence, why we built it on a blockchain platform.</p>
                </div> 
              </div> 
              <div className="col-lg-6 img-box"><div><img src="/encrypted.png" alt=""/></div></div>
            </div>

            <div className="row single-block">
              <div className="col-lg-6 order-lg-last">
                <div className="text">
                  <div className="number">02</div>
                  <h2 className="title"><span>Trust</span> is a Strong Commodity.</h2>
                  <p>To use Scale means you do not have to be familiar with strangers before earning their trusts. It is what Scale is built upon. Trust is out of your worries as you go about your crypto business.</p>
                </div> 
              </div> 
              <div className="col-lg-6 order-lg-first img-box"><div><img src="/trust.png" alt=""/></div></div>
            </div>

            <div className="row single-block">
              <div className="col-lg-6">
                <div className="text">
                  <div className="number">03</div>
                  <h2 className="title"><span>Speed</span> is Important to Scale.</h2>
                  <p>We are dedicated to helping you scale as a crypto exchanger; this is why we have built a system that speeds up transaction processes with our seamless bot interface.</p>
                </div> 
              </div> 
              <div className="col-lg-6 img-box"><div><img src="/speed.png" alt=""/></div></div>
            </div> 
          </div> 
        </div> 

        <div className="apps-overview color-one" id="apps-review">
          <div className="overlay-bg" style={{backgroundImage: `url('/bg2.png')`}}>
            <div className="container">
              <div className="inner-wrapper">
                <img src="/s8.png" alt="" className="s8-mockup" data-aos="fade-down" data-aos-duration="2500"/>
                <img src="/x.png" alt="" className="x-mockup" data-aos="fade-up" data-aos-duration="2500"/>
                <div className="row">
                  <div className="col-lg-5 offset-lg-7">
                    <div className="text">
                      <h2>Telegram Escrow Bot for Faster Transaction.</h2>
                      <h6>You don’t need to download another App!</h6>
                      <p>Telegram is fast becoming a go-to marketplace for cryptocurrency exchanges. The bot is built modelling your day-to-day conversations during a P2P crypto transaction on Telegram.</p>
                      <ul className="button-group">
                        <li><a href="#">Start trading</a></li>
                      </ul>
                    </div> 
                  </div>
                </div>
              </div> 
            </div>
          </div> 
        </div> 

        <div className="theme-counter">
          <div className="container">
            <div className="bg-image">
              <div className="row theme-title">
                <div className="col-lg-6 order-lg-last">
                  <h2><span>Fastest</span> Rising Crypto Escrow Bot</h2>
                </div>
                <div className="col-lg-6 order-lg-first">
                  <p>Scale is the first of its kind. A P2P chatbot that helps bring balance to the imbalances in the cryptocurrency P2P market.</p>
                </div>
              </div>

              <div className="counter-wrapper">
                <div className="row">
                  <div className="col-sm-4">
                    <h2 className="number"><span className="timer"><CountUp end={12} /></span>K</h2>
                    <p>Transactions</p>
                  </div>
                  <div className="col-sm-4">
                    <h2 className="number"><span className="timer"><CountUp end={150} /></span></h2>
                    <p>Users</p>
                  </div>
                  <div className="col-sm-4">
                    <h2 className="number"><span className="timer"><CountUp end={4} /></span></h2>
                    <p>Coins</p>
                  </div>
                </div>
              </div> 
            </div> 
          </div> 
        </div> 

        <div className="our-work-progress bg-color" id="progress">
          <div className="main-wrapper clearfix">
            <div className="section-title-wrapper clearfix">
              <div className="theme-title">
                <div className="upper-heading">Process</div>
                <h2>How <span>Scale </span>works</h2>
                <p>We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
              </div>
            </div> 
            <div className="progress-slider-wrapper">
              <div className="progress-slider">
                <OwlCarousel {...option2}>
                  <div className="item">
                  <div className="inner-block">
                    <div className="icon"><img src="/11.png" alt="icon"/></div>
                    <h3>Generate Invoice</h3>
                    <p>Buyer and Seller meets. Either party creates an invoice.</p>
                    <div className="num">1</div>
                  </div>
                </div>
                <div className="item">
                  <div className="inner-block">
                    <div className="icon"><img src="/12.png" alt="icon"/></div>
                    <h3>Confirm Invoice</h3>
                    <p>Both parties review and confirm for satisfaction.</p>
                    <div className="num">2</div>
                  </div> 
                </div>
                <div className="item">
                  <div className="inner-block">
                    <div className="icon"><img src="13.png" alt="icon"/></div>
                    <h3>Escrow Coins</h3>
                    <p>Scale provides respective crypto asset wallet for seller to credit to be escrowed.</p>
                    <div className="num">3</div>
                  </div>
                </div>
                <div className="item">
                  <div className="inner-block">
                    <div className="icon"><img src="11.png" alt="icon"/></div>
                    <h3>Upload Hash</h3>
                    <p>Hash is uploaded and credit confirmed by Scale’s on the Blockchain and proceeds to authorizes Buyer to credit Seller via preferred fiat choice.</p>
                    <div className="num">4</div>
                  </div> 
                </div>
                <div className="item">
                  <div className="inner-block">
                    <div className="icon"><img src="12.png" alt="icon"/></div>
                    <h3>Scale Confirms</h3>
                    <p>Buyer proceeds to upload proof to Scale.</p>
                    <div className="num">5</div>
                  </div> 
                </div>
                <div className="item">
                  <div className="inner-block">
                    <div className="icon"><img src="/11.png" alt="icon"/></div>
                    <h3>Complete Transaction</h3>
                    <p>Upon successful confirmation of Fiat settlement by seller, Scale releases coins to Buyer.</p>
                    <div className="num">6</div>
                  </div> 
                </div>
                </OwlCarousel>
              </div> 
            </div> 
          </div> 
        </div> 
     
        <div className="partner-section">
          <div className="container">
            <div className="partner-slider">
              <OwlCarousel {...option3}>
                <div className="item"><img src="/bitcoin.png" alt=""/></div>
                <div className="item"><img src="/tether.png" alt=""/></div>
                <div className="item"><img src="/dogecoin.png" alt=""/></div>
                <div className="item"><img src="/litecoin.png" alt=""/></div>
              </OwlCarousel>
            </div>
          </div>
        </div>

        <footer className="theme-footer">
          <div className="container">
            <div className="inner-wrapper">
              <div className="top-footer-data-wrapper">
                <div className="row">
                  <div className="col-lg-12 col-sm-6 footer-logo">
                    <div className="theme-title text-center">
                      <h2>Contact<span> Us</span></h2>
                    </div>
                    <a href="#" className="email text-center">info@scale.ai</a>
                    <a href="#" className="email text-center">+2348023982011</a>
                    
                  </div>
                  
                </div>
              </div> 

              <div className="bottom-footer clearfix">
                <p className="copyright">&copy; 2021 <a href="#">Scale</a> All Right Reserved</p>
                <ul>
                  {/* <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li> */}
                  <li><a href="https://twitter.com/SurtiiHQ"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                  <li><a href="https://www.instagram.com/p2pbyscale/"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                </ul>
              </div> 
            </div>
          </div>
        </footer>
			

      </div>
      

 
    </div>

  )
}
