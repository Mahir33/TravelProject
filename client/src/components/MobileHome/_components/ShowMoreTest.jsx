import React , {useState} from 'react'
import {
    slice, concat,
} from 'lodash'
import GalleryCard from './GalleryCardComponent';
import userProfiles from './dataMobileHome'



const LENGTH = 50;
const DATA = [ ...Array(LENGTH).keys() ];
const IMAGE_SRC="https://source.unsplash.com/random";
const LIMIT = 10;

function ShowMoreTest(props) {
const [showMore, setShowMore] = useState(true);
const [list, setList] = useState(slice(DATA, 0, LIMIT));
const [index, setIndex] = useState(LIMIT);

const loadMore = () => {
    const newIndex = index + LIMIT;
    const newShowMore = newIndex < (LENGTH - 1);
    const newList = concat(list, slice(DATA, index, newIndex));
    setIndex(newIndex);
    setList(newList);
    setShowMore(newShowMore)
}


const userProfiles = [{
    id: 1,
    photoUrl: "https://picsum.photos/300?random=1",
    imgUrl: "https://picsum.photos/300?random=12",
    name: "Gabor Szatmari",
    username: "@szatgabor",
    picDescUser: "This pic is viral",
    commentsNum: 22,
    likesNum: 88
}]



return(
    <>
        <div className="full-card-section">
            {list.map(() =>  
            <GalleryCard
                date={userProfiles.date}
                src={userProfiles.imgUrl}
                picDescUser={userProfiles.picDescUser}
                name={userProfiles.name}
                username={userProfiles.username}
                likesNum={userProfiles.likesNum}
            />)}
      </div>
        {showMore && <button class="show-more-btn" onClick={loadMore}>Show more</button>}
    </>
)
}

export default ShowMoreTest;

