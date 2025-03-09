export default class BannerData {
    title: string;
    startTime : Date;
    endTime : Date;
    imgUrl : string;

    constructor({
        title = "", 
        startTime = new Date(2024, 10, 16),
        endTime = new Date(2025, 10, 16),
        imgUrl = ""
    } = {}) {
        Object.assign(this, { title, startTime, endTime, imgUrl});
    }

    toTimeTxt(){
        return `신청기간 : ${this.startTime.toISOString().split('T')[0]} ~ ${this.endTime.toISOString().split('T')[0]}`
    }
}
