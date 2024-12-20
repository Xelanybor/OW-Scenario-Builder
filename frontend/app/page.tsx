import FloatingButton from '../components/FloatingButton/FloatingButton'
import Map from '../components/Map/Map'

export default function HomePage() {
  return (
    <>
      <FloatingButton buttonType="burger" side="left" position={0} />
      <FloatingButton buttonType="export" side="left" position={1} />
      <FloatingButton buttonType="pencil" side="left" position={2} />

      <FloatingButton buttonType="map" side="right" position={0} />
      <FloatingButton buttonType="layers" side="right" position={1} />
      <FloatingButton buttonType="point" side="right" position={2} />

      <Map />
    </>
  );
}
