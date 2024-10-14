type Props = {
  name: string
  width?: number
}

export function Brand({ name, width = 3 }: Props) {
  return (
    <svg className="inline-block h-[1em]" style={{ width: `${width}em` }}>
      <use href={`/images/brands/${name}.svg#${name}`}></use>
    </svg>
  )
}

export function ScrollBrands({ group, ...props }: { group: number }) {
  const groups = [BrandsGroupOne, BrandsGroupTwo, BrandsGroupThree]
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
      <Brand name="pixar" />
      <Brand name="salesforce" width={2} />
      <Brand name="shopify" />
      <Brand name="slack" />
      <Brand name="godaddy" />
      <Brand name="bae-systems" />
      <Brand name="betterment" />
      <Brand name="coinbase" />
      <Brand name="college-board" width={5} />
      <Brand name="credit-karma" width={5} />
    </>
  )
}
export function BrandsGroupTwo() {
  return (
    <>
      <Brand name="the-washington-post" width={6} />
      <Brand name="under-armor" width={1} />
      <Brand name="usaf" width={2} />
      <Brand name="walmart" />
      <Brand name="new-york-times" width={5} />
      <Brand name="adobe" />
      <Brand name="american-express" width={1} />
      <Brand name="match-com" />
      <Brand name="navy" />
      <Brand name="twitch" width={2} />
      <Brand name="usaa" width={1} />
      <Brand name="virginia-tech" />
      <Brand name="vistaprint" width={5} />
      <Brand name="yale" />
    </>
  )
}
export function BrandsGroupThree() {
  return (
    <>
      <Brand name="hp" width={1} />
      <Brand name="indeed" />
      <Brand name="linkedin" width={5} />
      <Brand name="apple" width={1} />
      <Brand name="atlassian" />
      <Brand name="berkeley" />
      <Brand name="cisco" width={2} />
      <Brand name="disney" />
      <Brand name="discount-tire" />
      <Brand name="dockyard" />
      <Brand name="dreamworks" width={2} />
      <Brand name="duke" />
      <Brand name="dynatrace" width={1} />
      <Brand name="experian" />
      <Brand name="logitech" />
    </>
  )
}
