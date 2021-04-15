import '../css/main.css'

function MobileNavbar() {
  return (
        <div class="mobile-navbar">
          <ul>
              <li><a href="/"><i className="fas fa-home"></i></a></li>
              <li><a href="/"><i className="fas fa-search"></i></a></li>
              <li><button><i className="fas fa-plus"></i></button></li>
              <li><a href="/"><i className="far fa-comment"></i></a></li>
              <li><a href="/"><i className="fas fa-user"></i></a></li>
          </ul>
        <div className="underline"></div>
        </div> 
  );
}

export default MobileNavbar;