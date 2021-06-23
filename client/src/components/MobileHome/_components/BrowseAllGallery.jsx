function BrowseAllGallery({ username, setUsername }) {

    // let randomNumber = Math.floor(Math.random() * 1000) +1
    // const randomPhoto = `https://picsum.photos/400/600?random=${randomNumber}`;

   

    return (
      <div>
        <section className="browse-all-gallery">
            <div className="gallery-container">
            <div className="col-left column">
                <div className="pic-long pic">
                    <img src="https://picsum.photos/400/600" alt="/" />
                </div>
                <div className="pic-square pic">
                    <img src="https://picsum.photos/400" alt="" />
                </div>
                <div className="pic-long pic">
                    <img src="https://picsum.photos/400/600" alt="/" />
                </div>
                <div className="pic-square pic">
                    <img src="https://picsum.photos/400" alt="" />
                </div>
                <div className="pic-long pic">
                    <img src="https://picsum.photos/400/600" alt="/" />
                </div>
                <div className="pic-square pic">
                    <img src="https://picsum.photos/400" alt="" />
                </div>
            </div>

            <div className="col-right column">
                <div className="pic-square pic">
                    <img src="https://picsum.photos/400" alt="" />
                </div>
                <div className="pic-long pic">
                    <img src="https://picsum.photos/400/600" alt="/" />
                </div>
                <div className="pic-square pic">
                    <img src="https://picsum.photos/400" alt="" />
                </div>
                <div className="pic-long pic">
                    <img src="https://picsum.photos/400/600" alt="/" />
                </div>
                <div className="pic-square pic">
                    <img src="https://picsum.photos/400" alt="" />
                </div>
                <div className="pic-long pic">
                    <img src="https://picsum.photos/400/600" alt="/" />
                </div>
            </div>
            </div>

            <button className="show-more-btn">display more</button>

            

        </section>
      </div>
    );
  }

  export default BrowseAllGallery;