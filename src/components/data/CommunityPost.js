class CommunityPost{
    constructor({
        category = "",
        title = "", 
        master = "",
        createTime = new Date(2024, 10, 16),
        comment = []
    } = {} ){
        Object.assign(this, {category, title, master, createTime, comment});
    }
}

export default CommunityPost;