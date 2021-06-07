import MobileNavbar from "../MobileNavbar/MobileNavbar";

function MobileHome({ username, setUsername }) {
  return (
    <div>
      <section className="home-header">
        <h1>Feed</h1>
        <input type="text" name="search" />
      </section>

      <MobileNavbar username={username} setUsername={setUsername} />
    </div>
  );
}

export default MobileHome;
