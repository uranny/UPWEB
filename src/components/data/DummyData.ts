import BannerData from "./BannerData.ts"
import CommunityPost from "./CommunityPost.ts"
import Post from "./Post.ts"

export const communityPostList : CommunityPost[] = [
    new CommunityPost({
        category : "잡담",
        title : "제목1",
        master : "uranny",
        createTime : new Date(2024, 10, 16), 
        comment : ['', '', '']
    }),

    new CommunityPost({
        category : "잡담",
        title : "제목2",
        master : "uranny",
        createTime : new Date(2024, 10, 16), 
        comment : ["", "", ""]
    }),

    new CommunityPost({
        category : "잡담",
        title : "제목3",
        master : "uranny",
        createTime : new Date(2024, 10, 16), 
        comment : ["", "", ""]
    }),
    new CommunityPost({
        category : "잡담",
        title : "제목4",
        master : "uranny",
        createTime : new Date(2024, 10, 16), 
        comment : ["", "", ""]
    }),

    new CommunityPost({
        category : "잡담",
        title : "제목5",
        master : "uranny",
        createTime : new Date(2024, 10, 16), 
        comment : ["", "", ""]
    }),

    new CommunityPost({
        category : "잡담",
        title : "제목6",
        master : "uranny",
        createTime : new Date(2024, 10, 16), 
        comment : ["", "", ""]
    }),

    new CommunityPost({
        category : "잡담",
        title : "제목7",
        master : "uranny",
        createTime : new Date(2024, 10, 16), 
        comment : ["", "", ""]
    }),

    new CommunityPost({
        category : "잡담",
        title : "제목8",
        master : "uranny",
        createTime : new Date(2024, 10, 16), 
        comment : ["", "", ""]
    })
]

export const postList = [
    new Post({
        img : "https://img-va.myshopline.com/image/store/2000343102/1637138871395/SK3-1016.jpeg?w=1000&h=1000",
        title : "titleasdfsadfsafasfsdafsadfsfdsfafadsfadsfds", 
        startTime : new Date(2024, 10, 16), 
        endTime : new Date(2025, 10, 16), 
        master : "uranny", 
        category : "it-소프트웨어", 
        bookMark : false
    }),
    new Post({
        img : "img2",
        title : "titleasdfsadfsafasfsdafsadfsfdsfafadsfadsfds", 
        startTime : new Date(2024, 10, 16), 
        endTime : new Date(2025, 10, 16), 
        master : "uranny", 
        category : "it-소프트웨어", 
        bookMark : false
    }),
    new Post({
        img : "img3",
        title : "titleasdfsadfsafasfsdafsadfsfdsfafadsfadsfds", 
        startTime : new Date(2024, 10, 16), 
        endTime : new Date(2025, 10, 16), 
        master : "uranny", 
        category : "it-소프트웨어", 
        bookMark : false
    }),
    new Post({
        img : "img4",
        title : "titleasdfsadfsafasfsdafsadfsfdsfafadsfadsfds", 
        startTime : new Date(2024, 10, 16), 
        endTime : new Date(2025, 10, 16), 
        master : "uranny", 
        category : "it-소프트웨어", 
        bookMark : false
    }),
    new Post({
        img : "img5",
        title : "titleasdfsadfsafasfsdafsadfsfdsfafadsfadsfds", 
        startTime : new Date(2024, 10, 16), 
        endTime : new Date(2025, 10, 16), 
        master : "uranny", 
        category : "it-소프트웨어", 
        bookMark : false
    }),
    new Post({
        img : "img6",
        title : "titleasdfsadfsafasfsdafsadfsfdsfafadsfadsfds", 
        startTime : new Date(2024, 10, 16), 
        endTime : new Date(2025, 10, 16), 
        master : "uranny", 
        category : "it-소프트웨어", 
        bookMark : false
    }),
    new Post({
        img : "img7",
        title : "titleasdfsadfsafasfsdafsadfsfdsfafadsfadsfds", 
        startTime : new Date(2024, 10, 16), 
        endTime : new Date(2025, 10, 16), 
        master : "uranny", 
        category : "it-소프트웨어", 
        bookMark : false
    })
]

export const BannerDataLst = [
    new BannerData({
        title: "타이틀1",
        startTime : new Date(2024, 10, 16), 
        endTime : new Date(2025, 10, 16), 
        imgUrl : "https://cdn.m-i.kr/news/photo/202204/908783_674821_3748.png"
    }),
    new BannerData({
        title: "타이틀2",
        startTime : new Date(2024, 10, 16), 
        endTime : new Date(2025, 10, 16), 
        imgUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3VDcssTAt6qRuC4dxv_C0C_WBiZCKMS-tgA&s"
    }),
    new BannerData({
        title: "타이틀3",
        startTime : new Date(2024, 10, 16), 
        endTime : new Date(2025, 10, 16), 
        imgUrl : "https://image.ajunews.com/content/image/2015/11/03/20151103164649884420.jpg"
    })
]

export const CategoryLst : string[] = [
    "전체",
    "문학",
    "학•논문", 
    "과학•기술", 
    "IT•소프트웨어", 
    "스포츠", 
    "미술•디자인",
    "만화•캐릭터", 
    "음악",
    "댄스", 
    "오디션", 
    "사진", 
    "영상", 
    "아이디어", 
    "산업", 
    "음식", 
    "기타"
]