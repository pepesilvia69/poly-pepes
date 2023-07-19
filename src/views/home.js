import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Hola template</title>
        <meta property="og:title" content="Hola template" />
      </Helmet>
      <div className="home-navbar">
        <header data-thq="thq-navbar" className="home-navbar-interactive">
          <div className="home-branding">
            <span className="home-text">Polygon Pepes</span>
          </div>
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="home-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              className="home-nav"
            >
              <div className="home-right">
                <div className="home-links">
                  <a href="#About" className="home-link navLink">
                    About
                  </a>
                  <a href="#Roadmap" className="home-link01 navLink">
                    Roadmap
                  </a>
                  <a href="#FAQs" className="home-link02 navLink">
                    FAQ
                  </a>
                </div>
                <div className="home-button">
                  <a
                    href="https://www.scatter.art/poly-pepes?tab=mint"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-work-with-us button"
                  >
                    <span className="home-text01">Mint</span>
                    <img
                      alt="image"
                      src="/hamburger.svg"
                      className="home-image"
                    />
                  </a>
                </div>
              </div>
            </nav>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <button className="home-work-with-us1 button">
              <span className="home-text02">work with us</span>
              <img alt="image" src="/hamburger.svg" className="home-image01" />
            </button>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="home-nav1"
            >
              <div className="home-top">
                <div className="home-branding1">
                  <span className="home-text03">Poly Pepes</span>
                </div>
                <div data-thq="thq-close-menu" className="home-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home-icon">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="home-middle"
              >
                <div className="home-links1">
                  <a href="#About" className="home-link03 navLink">
                    About
                  </a>
                  <a href="#Roadmap" className="home-link04 navLink">
                    Roadmap
                  </a>
                  <a href="#FAQs" className="home-link05 navLink">
                    FAQ
                  </a>
                </div>
                <a
                  href="https://www.scatter.art/poly-pepes?tab=mint"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-work-with-us2 button"
                >
                  <span className="home-text04">Mint</span>
                </a>
              </nav>
            </div>
          </div>
        </header>
      </div>
      <div className="home-hero">
        <div className="home-header">
          <h1 className="home-text05">
            <span className="home-text06">
              Building a game with AI music and custom effects and pepe
              character for NFT holders
            </span>
            <br></br>
          </h1>
          <a
            href="https://discord.gg/Sadb3pgCKs"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link06 button"
          >
            <span>
              <span className="home-text09">Discord</span>
              <br></br>
            </span>
          </a>
          <div className="home-container1">
            <a
              href="https://discord.gg/Sadb3pgCKs"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link07"
            >
              <img alt="image" src="/mouse.svg" className="home-image02" />
            </a>
          </div>
        </div>
        <div className="home-hero-image">
          <img alt="image" src="/3-700w.png" className="home-image03" />
        </div>
      </div>
      <div id="About" className="home-who">
        <div className="home-header1">
          <div className="home-heading">
            <h2 className="home-text11">
              Gamers evolve from consumers to contributors
            </h2>
            <span className="home-text12">
              <span className="home-text13">
                Gamers have forever added value to the game in creative ways
              </span>
              <br></br>
              <span>
                Adding guides to games, building fan fiction &amp; adding flashy
                plays to establishing &amp; challenging the meta
              </span>
              <br></br>
              <span>
                Poly Pepes &amp; web3 allows gamers to guide the game in
                it&apos;s every codable instance
              </span>
              <br></br>
              <span>
                Whether it&apos;s sprites to level design to the very goals
                &amp; powers of the characters- everything will be editable by
                the gamers guild
              </span>
              <br></br>
            </span>
          </div>
        </div>
        <div className="home-preview">
          <div className="home-image04">
            <img alt="image" src="/223-600w.png" className="home-image05" />
          </div>
          <div className="home-video">
            <video src poster="/852-1200w.png" className="home-video1"></video>
          </div>
        </div>
      </div>
      <div id="Roadmap" className="home-section">
        <div className="home-case-studies">
          <div className="home-caption">
            <span className="home-text21">Roadmap</span>
            <div className="home-date-range"></div>
          </div>
          <div className="home-gallery">
            <div className="home-row">
              <div className="home-case">
                <img alt="image" src="/43-1400w.png" className="home-image06" />
                <div className="home-heading1">
                  <span className="home-text22">
                    1+ holders - Green Gang aka Gamers Guild
                  </span>
                  <span className="home-text23">
                    <span>
                      1 asset featured &amp; vote on ideas- I&apos;ll polygonize
                      the asset
                    </span>
                    <br></br>
                    <span>A basket court, a food court or a spaceship</span>
                  </span>
                </div>
              </div>
              <div className="home-case1">
                <img
                  alt="image"
                  src="/477-1400w.png"
                  className="home-image07"
                />
                <div className="home-heading2">
                  <span className="home-text27">
                    2+ holders - Yellow Gang aka Makers
                  </span>
                  <span className="home-text28">
                    <span>Suggest iterations to levels, game modes, ideas</span>
                    <br></br>
                    <span>Etch design into walls, etc</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="home-row1">
              <div className="home-case2">
                <img
                  alt="image"
                  src="/739-1400w.png"
                  className="home-image08"
                />
                <div className="home-heading3">
                  <span className="home-text32">
                    3+ holders - Purple Gang aka Levellers
                  </span>
                  <span className="home-text33">
                    Rename a level, move it, change it&apos;s size not just the
                    aesthetics
                  </span>
                </div>
              </div>
              <div className="home-case3">
                <img
                  alt="image"
                  src="/853-1400w.png"
                  className="home-image09"
                />
                <div className="home-heading4">
                  <span className="home-text34">The Maroon 5s</span>
                  <span className="home-text35">
                    At 888 supply, can&apos;t have more than 100 maroon 5s so
                    we&apos;re giving each maroon 5 a featured billboard in the
                    game where you can promote your own thing or do some weird
                    fun stuff 
                  </span>
                </div>
              </div>
            </div>
            <div className="home-row2">
              <div className="home-case4">
                <img alt="image" src="/9-1400w.png" className="home-image10" />
                <div className="home-heading5">
                  <span className="home-text36">
                    10+ - Golden Gang aka Stakers
                  </span>
                  <span className="home-text37">
                    Well whale well if isn&apos;t moby dick itself- upstage 1
                    level to your dreams, ie the entire level design and bricks,
                    ofc the assets from our fella fishes will remain
                  </span>
                </div>
              </div>
              <div className="home-case5">
                <img
                  alt="image"
                  src="/521-1400w.png"
                  className="home-image11"
                />
                <div className="home-heading6">
                  <span className="home-text38">
                    100+ - Mr beast or should I call Mr megadolon
                  </span>
                  <span className="home-text39">
                    1 challenge and custom game mechanic introduced -
                    you&apos;re basically a codev at this point
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-book">
        <div className="home-content">
          <div className="home-left">
            <h2 className="home-text40">Test the game without the NFT</h2>
            <a
              href="https://pepe-runner-pro.vercel.app/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link08 button"
            >
              <span className="home-text41">Hit it</span>
            </a>
          </div>
          <img alt="image" src="/house-1400w.png" className="home-image12" />
        </div>
      </div>
      <div id="FAQs" className="home-section1">
        <div className="home-about-us">
          <div className="home-header2">
            <span className="home-caption1">FAQ</span>
            <h2 className="home-description">
              <span className="home-text42">What Chain - Ethereum</span>
              <br></br>
              <span>What Engine - Unity</span>
              <br></br>
              <span>
                What Platform - Website
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>When Mobile - Soon</span>
              <br></br>
            </h2>
          </div>
          <div className="home-statistics">
            <div className="home-statistic">
              <span className="home-text50">888</span>
              <span className="home-text51">NFTs</span>
            </div>
            <div className="home-statistic1">
              <span className="home-text52">ERC721A</span>
              <span className="home-text53">contract</span>
            </div>
            <div className="home-statistic2">
              <span className="home-text54">69+</span>
              <span className="home-text55">Levels</span>
            </div>
            <div className="home-statistic3">
              <span className="home-text56">100+</span>
              <span className="home-text57">Assets</span>
            </div>
          </div>
          <div className="home-gallery1">
            <img
              alt="image"
              src="/pepe%20running-700w.png"
              className="home-image13"
            />
            <img
              alt="image"
              src="/shortbuilding-800w.png"
              className="home-image14"
            />
          </div>
          <div className="home-recruit">
            <a
              href="https://www.scatter.art/poly-pepes?tab=mint"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link09 button"
            >
              <span className="home-text58">
                <span>MInt</span>
                <br></br>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
