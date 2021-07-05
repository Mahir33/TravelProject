import React , {useState} from 'react'
import {
    slice, concat,
} from 'lodash'
import GalleryCard from './GalleryCardComponent';



const LENGHT = 50;
const DATA = [ ...Array(LENGHT).keys() ];
const IMAGE_SRC="https://source.unsplash.com/random";
const LIMIT = 10;

function ShowMoreTest(props) {
const [showMore, setShowMore] = useState(true);
const [list, setList] = useState(slice(DATA, 0, LIMIT));
const [index, setIndex] = useState(LIMIT);

const loadMore = () => {
    const newIndex = index + LIMIT;
    const newShowMore = newIndex < (LENGHT - 1);
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
}, {
    id: 2,
    photoUrl: "https://picsum.photos/300?random=2",
    imgUrl: "https://picsum.photos/300?random=11",
    name: "Adam Wrobel",
    username: "@awro",
    picDescUser: "Guess where am I, i would like to describe something more about that",
    commentsNum: 54,
    likesNum: 103
}, {
    id: 3,
    photoUrl: "https://picsum.photos/300?random=3",
    imgUrl: "https://picsum.photos/300?random=10",
    name: "Daniel Ulises",
    username: "@uuhdani",
    picDescUser: "Crazy holiday in Pakistan!",
    commentsNum: 68,
    likesNum: 214
}, {
    id: 4,
    photoUrl: "https://picsum.photos/300?random=4",
    imgUrl: "https://picsum.photos/300?random=9",
    name: "Lord Voldemort",
    username: "@voldi",
    picDescUser: "Looking for Harry Potter",
    commentsNum: 98,
    likesNum: 23
}, {
    id: 5,
    photoUrl: "https://picsum.photos/300?random=5",
    imgUrl: "https://picsum.photos/300?random=8",
    name: "Donatella Versace",
    username: "@versace",
    picDescUser: "uploader comment",
    commentsNum: 5122,
    likesNum: 75875
}, {
    id: 6,
    photoUrl: "https://picsum.photos/300?random=6",
    imgUrl: "https://picsum.photos/300?random=7",
    name: "Corona Virus",
    username: "@vicor2020",
    picDescUser: "I traveled all around the world",
    commentsNum: 21477341,
    likesNum: 468
}, {
    id: 7,
    photoUrl: "https://picsum.photos/300?random=17",
    imgUrl: "https://picsum.photos/300?random=14",
    name: "Matheus Glazier",
    username: "@zierus",
    picDescUser: "Uploader comment",
    commentsNum: 764,
    likesNum: 78
},
{
    id: 8,
    photoUrl: "https://picsum.photos/300?random=1",
    imgUrl: "https://picsum.photos/300?random=12",
    name: "Gabor Szatmari",
    username: "@szatgabor",
    picDescUser: "This pic is viral",
    commentsNum: 22,
    likesNum: 88
}, {
    id: 9,
    photoUrl: "https://picsum.photos/300?random=2",
    imgUrl: "https://picsum.photos/300?random=11",
    name: "Adam Wrobel",
    username: "@awro",
    picDescUser: "Guess where am I, i would like to describe something more about that",
    commentsNum: 54,
    likesNum: 103
}, {
    id: 10,
    photoUrl: "https://picsum.photos/300?random=3",
    imgUrl: "https://picsum.photos/300?random=10",
    name: "Daniel Ulises",
    username: "@uuhdani",
    picDescUser: "Crazy holiday in Pakistan!",
    commentsNum: 68,
    likesNum: 214
}, {
    id: 11,
    photoUrl: "https://picsum.photos/300?random=4",
    imgUrl: "https://picsum.photos/300?random=9",
    name: "Lord Voldemort",
    username: "@voldi",
    picDescUser: "Looking for Harry Potter",
    commentsNum: 98,
    likesNum: 23
}, {
    id: 12,
    photoUrl: "https://picsum.photos/300?random=5",
    imgUrl: "https://picsum.photos/300?random=8",
    name: "Donatella Versace",
    username: "@versace",
    picDescUser: "uploader comment",
    commentsNum: 5122,
    likesNum: 75875
}, {
    id: 13,
    photoUrl: "https://picsum.photos/300?random=6",
    imgUrl: "https://picsum.photos/300?random=7",
    name: "Corona Virus",
    username: "@vicor2020",
    picDescUser: "I traveled all around the world",
    commentsNum: 21477341,
    likesNum: 468
}, {
    id: 14,
    photoUrl: "https://picsum.photos/300?random=17",
    imgUrl: "https://picsum.photos/300?random=14",
    name: "Matheus Glazier",
    username: "@zierus",
    picDescUser: "Uploader comment",
    commentsNum: 764,
    likesNum: 78
}]



return(
    <>
        <div className="full-card-section">
            {list.map(() =>  <GalleryCard
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

