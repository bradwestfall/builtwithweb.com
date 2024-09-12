import { CenterContent } from '~/components/CenterContent'
import { Logo } from '~/components/Logo'
import { Slash, SlashClip, Slashes } from '~/components/Slashes'

export default function Index() {
  return (
    <>
      {/* <header className="fixed z-50 left-0 right-0 top-16 ">
        <CenterContent>
          <div className="flex gap-6 max-lg:flex-col">
            <div className="lg:flex-1">left</div>
            <nav>
              <a href="/" className="inline-block px-6 py-3">
                Link
              </a>
              <a href="/" className="inline-block px-6 py-3">
                Link
              </a>
              <a href="/" className="inline-block px-6 py-3">
                Link
              </a>
              <a href="/" className="inline-block px-6 py-3">
                Link
              </a>
            </nav>
          </div>
        </CenterContent>
      </header> */}

      <section className="hero absolute inset-0 overflow-hidden z-10">
        <div className="hero-border"></div>

        <SlashClip className="hero-slash-background from-radial-center to-radial-edge" />

        <div className="w-96 m-16">
          <Logo fill="white" />
        </div>

        <div className="fixed right-20 top-20 flex justify-between ">
          <nav className="text-white text-2xl">
            <a href="/" className="inline-block px-6 py-3">
              Home
            </a>
            <a href="/" className="inline-block px-6 py-3">
              Services
            </a>
            <a href="/" className="inline-block px-6 py-3">
              Blog
            </a>
            <a href="/" className="inline-block px-6 py-3">
              Contact
            </a>
          </nav>
        </div>

        <Slashes className="hero-double-slash">
          <Slash className="bg-white" size={30} />
        </Slashes>
      </section>

      <section className="fixed inset-0">
        <div className="absolute top-0 -left-[300px] w-[1050px] -rotate-[62.3deg]">
          <Logo fill="black" />
        </div>
      </section>

      {/* <section className="absolute inset-0 h-[200vh]">
        <div className="sticky top-0 w-screen h-screen bg-amber-100">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe atque deleniti molestiae ullam esse ratione,
          perspiciatis excepturi cum dolorum quisquam repellendus. Inventore doloremque explicabo ducimus dolores fugiat
          odio corporis debitis.
          <br />
          <br />
          <br />
        </div>
        <div className="w-screen h-screen" aria-hidden />
      </section> */}

      <div className="h-[2000px] bg-white" />
    </>
  )
}
