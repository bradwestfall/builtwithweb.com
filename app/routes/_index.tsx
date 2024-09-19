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

            <div className="hero-content absolute left-4 right-4 top-52 space-y-5 text-4xl text-center md:text-[4rem] md:text-left md:top-36 md:left-[400px] md:right-[5vw] 2xl:text-[6rem] 2xl:left-[600px]">
              <h1 className="leading-[0.9] font-bold">
                Let's Build
                <br />
                <span className="font-brush font-light inline-block scale-150 -translate-y-3 text-fuchsia-900">
                  Fantastic
                </span>{' '}
                Websites
              </h1>
              <p className="text-[0.6em] leading-tight">
                Professional web apps{' '}
                <span className="text-nowrap">
                  <span className="font-brush text-fuchsia-900 inline-block scale-150">&</span> beautiful sites
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

          <div className="services-logo text-stone-900">
            <Logo fill />
          </div>

          <div className="paint-text absolute top-10 lg:-top-5 left-0 text-nowrap">
            <span>Web Apps</span>
            <span>Web Apps</span>
          </div>

          <p className="text-4xl absolute top-52 pr-[30vw]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quia maiores nihil esse excepturi aut
            molestiae aliquam
          </p>

          <div className="absolute bottom-5 left-2 w-[800px] flex gap-6 max-lg:flex-col">
            <ServiceBox label="Design">
              Capture your audience with beautiful, accessible, amazing designs. It's the first impression that counts.
            </ServiceBox>
            <ServiceBox label="Build">
              I specialize in JavaScript applications from Node to client. I love to work with React, Remix and NextJS.
            </ServiceBox>
            <ServiceBox label="Teach">
              Level up your team! I have extensive experience training the biggest tech companies in the world at{' '}
              <a href="https://reacttraining.com">ReactTraining.com</a>.
            </ServiceBox>
          </div>
        </div>
      </section>

      <section className="absolute z-[1] inset-0 h-[610vh] overflow-clip ">
        <div className="sticky border-container bg-gradient-to-r from-theme-gradient-3/20 via-theme-gradient-2/40 to-theme-gradient-1/40 [-webkit-mask-image:linear-gradient(to_bottom,rgba(255,255,255,1)_50%,rgba(255,255,255,0))]">
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

function ServiceBox({ children, label }: { children: React.ReactNode; label: string }) {
  const before =
    'before:text-4xl before:w-[6px] before:absolute before:bottom-0 before:left-0 before:top-[1em] before:bg-black before:rounded'
  const after = 'after:h-[6px] after:absolute after:top-0 after:left-[50%] after:-right-0  after:bg-black after:rounded'
  return (
    <div className="flex-1 flex relative">
      <div className="-translate-y-4 text-4xl absolute">{label}</div>
      <div className={`border-b-[6px] border-r-[6px] border-black overflow-clip ${before} ${after}`}>
        <p className="p-6 pt-8">{children}</p>
      </div>
    </div>
  )
}
