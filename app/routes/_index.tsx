// import { CenterContent } from '~/components/CenterContent'
import { NavLink } from '@remix-run/react'

import { Logo } from '~/components/Logo'
import { Slashes } from '~/components/Slashes'

export default function Index() {
  return (
    <>
      <div className="main-border" aria-hidden />

      <section className="hero absolute border-container z-[10]">
        <div className="text-white w-32 absolute z-20 top-7 mx-auto left-7 right-7 md:right-auto">
          <Logo fill />
        </div>

        <div className="hero-mask text-white">
          <div className="hero-mask-child">
            <nav className="primary-nav text-lg absolute top-[10px] left-[10px] right-[10px] mx-auto w-fit md:left-auto">
              <NavLink to="/" className="inline-block px-3 py-2 sm:px-6 sm:py-3 text-inherit">
                Home
              </NavLink>
              <NavLink to="/a" className="inline-block px-3 py-2 sm:px-6 sm:py-3 text-inherit">
                Services
              </NavLink>
              <NavLink to="/b" className="inline-block px-3 py-2 sm:px-6 sm:py-3 text-inherit">
                Blog
              </NavLink>
              <NavLink to="/c" className="inline-block px-3 py-2 sm:px-6 sm:py-3 text-inherit">
                Contact
              </NavLink>
            </nav>

            <div className="hero-content absolute left-4 right-4 top-52 space-y-5 text-4xl text-center md:text-[4rem] md:text-left md:top-36 md:left-[20vw] md:right-[5vw] 2xl:text-[6rem] 2xl:left-[600px]">
              <h1 className="leading-[0.9] font-bold">
                Let's Build
                <br />
                <span className="font-brush font-light inline-block scale-150 text-fuchsia-950/70">Fantastic</span>{' '}
                Websites
              </h1>
              <p className="text-[0.6em] leading-tight">
                Professional web apps{' '}
                <span className="text-nowrap">
                  <span className="font-brush text-fuchsia-950/70 inline-block scale-150">&</span> beautiful sites
                </span>
              </p>
              {/* <div>
                <a href="#services">Link</a>
              </div> */}
            </div>

            <div className="hero-double-slashes">
              <Slashes />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="absolute z-[9] inset-0 h-[210vh] overflow-clip">
        <div className="sticky border-container bg-white">
          <div className="services-logo text-stone-900">
            <Logo fill />
          </div>

          <nav className="primary-nav-black absolute text-lg top-[10px] left-[10px] right-[10px] mx-auto w-fit md:left-auto">
            <div className="animated-border" />
            <div className="nav-wrap">
              <NavLink to="/" className="inline-block px-3 py-2 sm:px-6 sm:py-3 text-stone-900">
                Home
              </NavLink>
              <NavLink to="/a" className="inline-block px-3 py-2 sm:px-6 sm:py-3 text-stone-900">
                Services
              </NavLink>
              <NavLink to="/b" className="inline-block px-3 py-2 sm:px-6 sm:py-3 text-stone-900">
                Blog
              </NavLink>
              <NavLink to="/c" className="inline-block px-3 py-2 sm:px-6 sm:py-3 text-stone-900">
                Contact
              </NavLink>
            </div>
          </nav>

          <div className="paint-text absolute top-10 lg:-top-10 left-0 text-nowrap">
            <span>Web Apps</span>
            <span>Web Apps</span>
          </div>
        </div>
      </section>

      <section className="absolute z-[1] inset-0 h-[410vh] overflow-clip ">
        <div className="sticky border-container bg-green-100">
          <div className="absolute -left-[300px] w-[1050px] -rotate-[62.3deg] z-10">
            <Logo fill />
          </div>
        </div>
      </section>

      {/* <section className="absolute z-[1] h-full inset-0 bg-gradient-to-tr from-slate-200 to-slate-300">
        <div className="hero-logo">
          <Logo fill="black" />
        </div>
      </section> */}

      <div className="h-[10000px] bg-white" />
    </>
  )
}
