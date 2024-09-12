export function NeumorphicBoxes() {
  return (
    <div className="bg-[#ededed]">
      <div className="h-[300px]"></div>
      <div className="w-[140vw] flex gap-3 flex-col -rotate-2">
        <div className="slide-left flex gap-3 -mr-[20vw]">
          <div className="w-56 h-44 rounded-3xl neumorphic-box"></div>
          <div className="w-56 h-44 rounded-3xl neumorphic-box-inset"></div>
          <div className="w-56 h-44 rounded-3xl neumorphic-box-inset"></div>
          <div className="w-56 h-44 rounded-3xl neumorphic-box"></div>
          <div className="w-56 h-44 rounded-3xl neumorphic-box-inset"></div>
          <div className="w-56 h-44 rounded-3xl neumorphic-box-inset"></div>
        </div>
        <div className="slide-right flex gap-3 -ml-[20vw]">
          <div className="w-56 h-44 rounded-3xl neumorphic-box"></div>
          <div className="w-56 h-44 rounded-3xl neumorphic-box"></div>
          <div className="w-56 h-44 rounded-3xl neumorphic-box-inset"></div>
          <div className="w-56 h-44 rounded-3xl neumorphic-box"></div>
          <div className="w-56 h-44 rounded-3xl neumorphic-box-inset"></div>
          <div className="w-56 h-44 rounded-3xl neumorphic-box"></div>
        </div>
      </div>
      <div className="h-[3000px]"></div>
    </div>
  )
}
