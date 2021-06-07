import MobileNavbar from "../MobileNavbar/MobileNavbar";

function MobileHome() {
  return (
    <div>
      <section className="home-header">
        <h1>Feed</h1>
        <input type="text" name="search" />
      </section>

      <MobileNavbar />
    </div>
  );
}

export default MobileHome;
