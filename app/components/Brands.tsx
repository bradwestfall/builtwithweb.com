type Props = {
  name: string
  width?: number
  scale?: number
}

export function Brand({ name, width = 3, scale = 1 }: Props) {
  return (
    <svg className="inline-block h-[1em]" style={{ width: `${width}em`, transform: `scale(${scale})` }}>
      <use href={`/images/brands/${name}.svg#${name}`}></use>
    </svg>
  )
}

export function ScrollBrands({ group, ...props }: { group: number }) {
  const groups = [BrandsGroupOne, BrandsGroupTwo, BrandsGroupThree, BrandsGroupFour, BrandsGroupFive, BrandsGroupSix]
  const Comp = groups[group - 1]
  return (
    <div {...props} className="scroll-brands">
      <div>
        <Comp />
      </div>
      <div aria-hidden="true">
        <Comp />
      </div>
      <div aria-hidden="true">
        <Comp />
      </div>
    </div>
  )
}

export function BrandsGroupOne() {
  return (
    <>
      <Brand name="microsoft" width={5} />
      <Brand name="mozilla" />
      <Brand name="netflix" />
      <Brand name="navy" />
      <Brand name="salesforce" scale={1.5} />
      <Brand name="shopify" />
      <Brand name="godaddy" />
      <Brand name="bae-systems" />
      <Brand name="betterment" />
      <Brand name="coinbase" />
      <Brand name="college-board" width={5} />
      <Brand name="credit-karma" width={5} />
      <Brand name="slack" />
    </>
  )
}
export function BrandsGroupTwo() {
  return (
    <>
      <Brand name="the-washington-post" width={6} />
      <Brand name="under-armor" width={1} />
      <Brand name="usaf" width={2} />
      <Brand name="walmart" width={5} />
      <Brand name="new-york-times" width={5} />
      <Brand name="adobe" />
      <Brand name="american-express" width={1} scale={1.5} />
      <Brand name="match-com" />
      <Brand name="pixar" width={5} />
      <Brand name="twitch" width={2} />
      <Brand name="usaa" width={1} />
      <Brand name="virginia-tech" />
      <Brand name="vistaprint" width={5} />
      <Brand name="yale" width={5} />
    </>
  )
}
export function BrandsGroupThree() {
  return (
    <>
      <Brand name="dockyard" />
      <Brand name="discount-tire" />
      <Brand name="atlassian" />
      <Brand name="berkeley" />
      <Brand name="duke" />
      <Brand name="cisco" width={2} />
      <Brand name="disney" />
      <Brand name="hp" width={1} />
      <Brand name="indeed" />
      <Brand name="linkedin" width={5} />
      <Brand name="apple" width={1} />
      <Brand name="dreamworks" width={2} />
      <Brand name="experian" />
      <Brand name="logitech" />
    </>
  )
}

export function BrandsGroupFour() {
  return (
    <>
      <Brand name="dockyard" />
      <Brand name="under-armor" width={1} />
      <Brand name="the-washington-post" width={6} />
      <Brand name="match-com" />
      <Brand name="cisco" width={2} />
      <Brand name="navy" />
      <Brand name="linkedin" width={5} />
      <Brand name="slack" />
      <Brand name="discount-tire" />
      <Brand name="betterment" />
      <Brand name="pixar" width={5} />
      <Brand name="duke" />
      <Brand name="yale" width={5} />
    </>
  )
}
export function BrandsGroupFive() {
  return (
    <>
      <Brand name="logitech" />
      <Brand name="berkeley" />
      <Brand name="hp" width={1} />
      <Brand name="american-express" width={1} scale={1.5} />
      <Brand name="shopify" />
      <Brand name="usaf" width={2} />
      <Brand name="mozilla" />
      <Brand name="dreamworks" width={2} />
      <Brand name="twitch" width={2} />
      <Brand name="apple" width={1} />
      <Brand name="godaddy" />
      <Brand name="disney" />
      <Brand name="netflix" />
      <Brand name="navy" />
    </>
  )
}
export function BrandsGroupSix() {
  return (
    <>
      <Brand name="logitech" />
      <Brand name="disney" />
      <Brand name="new-york-times" width={5} />
      <Brand name="virginia-tech" />
      <Brand name="indeed" />
      <Brand name="adobe" />
      <Brand name="walmart" width={5} />
      <Brand name="microsoft" width={5} />
      <Brand name="salesforce" scale={1.5} />
      <Brand name="shopify" />
      <Brand name="atlassian" />
      <Brand name="mozilla" />
      <Brand name="coinbase" />
      <Brand name="experian" />
    </>
  )
}
