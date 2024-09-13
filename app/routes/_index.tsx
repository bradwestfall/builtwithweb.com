// import { CenterContent } from '~/components/CenterContent'
import { Logo } from '~/components/Logo'
import { Slash, Slashes } from '~/components/Slashes'

export default function Index() {
  return (
    <>
      <div className="site-border" />

      <section className="hero absolute inset-0 overflow-hidden z-[3]">
        <div className="hero-logo text-white absolute z-20">
          <Logo fill />
        </div>

        <div className="hero-slash-mask border-container from-radial-center to-radial-edge">
          <div className="absolute right-20 top-20 flex justify-between ">
            <nav className="text-white text-2xl">
              <a href="/" className="inline-block px-6 py-3 text-inherit">
                Home
              </a>
              <a href="/a" className="inline-block px-6 py-3 text-inherit">
                Services
              </a>
              <a href="/b" className="inline-block px-6 py-3 text-inherit">
                Blog
              </a>
              <a href="/c" className="inline-block px-6 py-3 text-inherit">
                Contact
              </a>
            </nav>
          </div>
          <div className="">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, voluptatum maxime laudantium ab,
            voluptatibus temporibus asperiores iure veniam omnis assumenda, obcaecati adipisci esse. Labore quod, earum
            quis rerum laboriosam animi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis minima maxime
            blanditiis. Distinctio et necessitatibus cupiditate quo numquam labore eius minima, molestias fugit. Iste,
            cum natus magnam quia aspernatur ut.
          </div>
        </div>

        <Slashes className="hero-double-slash">
          <Slash className="bg-white w-52" />
          <Slash className="bg-white w-52" />
        </Slashes>
      </section>

      {/* <div className="sticky top-20 z-index[100000] right-20 top-20 flex justify-between">
        <nav className="text-black text-2xl">
          <a href="/" className="inline-block px-6 py-3 text-inherit">
            Home
          </a>
          <a href="/" className="inline-block px-6 py-3 text-inherit">
            Services
          </a>
          <a href="/" className="inline-block px-6 py-3 text-inherit">
            Blog
          </a>
          <a href="/" className="inline-block px-6 py-3 text-inherit">
            Contact
          </a>
        </nav>
      </div> */}

      <section id="services" className="absolute z-[2] inset-0 h-[210vh] overflow-clip">
        <div className="sticky top-0 border-container bg-white">
          <div className="services-logo text-stone-900">
            <Logo fill />
          </div>

          {/* <SlashClip className="services-slash-background from-blue-400 to-green-400" /> */}

          {/* <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe atque deleniti molestiae ullam esse ratione,
            perspiciatis excepturi cum dolorum quisquam repellendus. Inventore doloremque explicabo ducimus dolores
            fugiat odio corporis debitis.
          </p> */}
        </div>
      </section>

      <section className="absolute z-[1] inset-0 h-[410vh] overflow-clip ">
        <div className="sticky top-0 border-container bg-green-100">
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
