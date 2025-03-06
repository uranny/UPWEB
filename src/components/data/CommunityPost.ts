export default class CommunityPost {
    category: String;
    title: String;
    master: String;
    createTime: Date;
    comment: String[];

    constructor({
        category = "",
        title = "", 
        master = "",
        createTime = new Date(2024, 10, 16),
        comment = [] as string[]
    } = {}) {
        Object.assign(this, { category, title, master, createTime, comment });
    }

    toTimeTxt(){
        return `${this.createTime.toISOString().split('T')[0]}`
    }

    toCommentTxt(){
        return `${this.comment.length}`
    }
}
