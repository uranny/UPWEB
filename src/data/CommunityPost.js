class CommunityPost{
    constructor({
        category = "",
        title = "", 
        master = "",
        createTime = new Date(2024, 10, 16),
        comment = []
    } = {} ){
        Object.assign(this, {img, title, startTime, endTime, master, category, bookMark});
    }

    toReceiptTxt() {
        return `접수기간 ${this.startTime.toISOString().split('T')[0]} ~ ${this.endTime.toISOString().split('T')[0]}`;
    }

    toggleBookMark() {
        this.bookMark = !this.bookMark;
    }
}

export default Post;