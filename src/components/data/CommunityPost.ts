export default class CommunityPost {
    category: string;
    title: string;
    master: string;
    createTime: Date;
    comment: string[];

    constructor({
        category = "",
        title = "", 
        master = "",
        createTime = new Date(2024, 10, 16),
        comment = [] as string[]
    } = {}) {
        Object.assign(this, { category, title, master, createTime, comment });
    }
}
