import './gallery.css'

export default function Home() {
  return (
    <div className="gallery-container">
      
      <label className='gallery-page-title'>Gallery</label>

      <div className="gallery">
        <div className="rectangle r1">
          <div className="masked-text r1-text">Arena</div>
        </div>
        <div className="square s1">
          <div className="masked-text s1-text">Arena</div>
        </div>
        <div className="square s2">
          <div className="masked-text s2-text">Arena</div>
        </div>
        <div className="rectangle r2">
          <div className="masked-text r2-text">Arena</div>
        </div>
      </div>
    </div>
  );
}
