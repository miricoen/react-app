import {observable, action, computed, makeObservable, runInAction} from 'mobx';

class  MeetingStore {
    
    list = [
        {id: "758",
    serviceType: "11",
    dateTime: "2029-06-20T10:00:00.000Z",//מבנה של תאריך ושעה סטנדרטי בjs
    clientName: "אבי כהן",
    clientPhone: "050-1234567",
    clientEmail: "m@m.com"},

    {id: "787658",
    serviceType: "411",
    dateTime: "2024-01-02T10:00:00.000Z",//מבנה של תאריך ושעה סטנדרטי בjs
    clientName: "אביב כהן",
    clientPhone: "050-12374567",
    clientEmail: "my@m.com"}
    ];
    baseUrl;
    constructor(){

        makeObservable(this, {
            list: observable, // משתנה שניתן להשגיח על השינויים בו
            // updateService: action, //* פונקציה שמשנה את משתנה ה observable
            addMeeting: action,//*
            // removeService: action,//*
            getMeetingList: computed,//*
         
        });
    this.baseUrl ='http://localhost:8787/appointments';
    this.initData();
    }


    initData(){
        fetch(this.baseUrl).then((res)=>{
            res.json().then((data)=>{
                runInAction(()=>{
                    this.list = data;
                })
            });            
            
        }).catch((error)=>{
            console.log(error);
        });
    }

    addMeeting(meetingItem){

        fetch(this.baseUrl, {
            method: 'POST',
            body: meetingItem
        }).then((res)=>{
            console.log(res);
            this.list.push(meetingItem);
        }).catch((error)=>{
            console.log(error);
        })

        //axios.post(this.baseUrl, todoItem)

    }

    // removeMeeting(id){
    //     fetch(`${this.baseUrl}/${id}`, {
    //         method: 'DELETE',
    //     }).then((res)=>{
    //         console.log(res);
    //         const index = this.list.findIndex(t => t.id === id)
    //         this.list.splice(index, 1);
    //     }).catch((error)=>{
    //         console.log(error);
    //     });
    // }

    // updateMeeting(meetingItem){
    //     fetch(`${this.baseUrl}/${meetingItem.id}`, {
    //         method: 'PUT',
    //         body: meetingItem
    //     }).then((res)=>{
    //         const index = this.list.findIndex(t => t.id === serviceItem.id);
    //         runInAction(()=>{ // runInAction מסמן את הפעולה כפעולה שמשפיעה על ה OBSERVABLE
    //             this.list[index] = meetingItem;
    //         });
            
    //     }).catch((error)=>{
    //         console.log(error);
    //     })
    // }


    get getMeetingList(){
        return this.list;
    }



}
export default new MeetingStore();