import ImageMagnifier from './components/image-magnifier/image-magnifier';

export function App() {
  return (
    <div>
      <ImageMagnifier src="https://picsum.photos/800/450" zoomLevel={2} />
    </div>
  );
}

export default App;
