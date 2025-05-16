import './home.css'

export default function Home() {
  return (
    <div className="home-container">
      <label style={{
        fontSize: '50px'
      }}>Welcome to</label>
      <label style={{
        fontSize: '150px',
        fontFamily : '"Audiowide", sans-serif'
      }}>SPACEFEST</label>
      <label style={{
        fontSize: '50px',
        marginTop: '30px'
      }}>'Venturing Beyond Boundaries'</label>
      <label style={{
        fontSize: '50px',
        marginTop: '20px'
      }}>Nov 9-10 '24 | IIT Kharagpur</label>
    </div>
  );
}
