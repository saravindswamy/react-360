import ThreeSixty from 'react-360-view'

export default function React360() {
  return (
    <div>
      <div class="v360-header text-light bg-dark">
        <span class="v360-header-title">
          36 Images - Autoplay (1 loop) - Reverse Spin
        </span>
        <span class="v360-header-description"></span>
      </div>
      <ThreeSixty
        amount={36}
        // imagePath="https://scaleflex.cloudimg.io/width/600/q35/https://scaleflex.ultrafast.io/https://scaleflex.airstore.io/demo/chair-360-36"
        imagePath="https://scaleflex.cloudimg.io/crop/1920x700/n/https://scaleflex.airstore.io/demo/360-car"
        // fileName="chair_{index}.jpg?v1"
        fileName="iris-{index}.jpeg"
      />
    </div>
  )
}
