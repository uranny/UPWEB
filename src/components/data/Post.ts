export default class Post{
    img : string
    title : string
    startTime : Date
    endTime : Date
    master : string
    category : string
    bookMark : Boolean

    constructor({
        img = "",
        title = "", 
        startTime = new Date(2024, 10, 16),
        endTime = new Date(2025, 10, 16),
        master = "",
        category = "",
        bookMark = false 
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