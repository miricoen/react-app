import {observable, action, computed, makeObservable, runInAction} from 'mobx';
const service1 = {
    id: "11",
    name: "פגישת ייעוץ פרונטלית",
    description: "פגישת ייעוץ פרטנית בקליניקה",
    price: 250,
    duration: 45,
};
const service2 = {
    id: "11",
    name: "פגישת ייעוץ פרונטלית",
    description: "פגישת ייעוץ פרטנית בקליניקה",
    price: 550,
    duration: 60,
};
class  ServiceStore {
    list = [service1,service2];
    baseUrl;
    constructor(){

        makeObservable(this, {
            list: observable, // משתנה שניתן להשגיח על השינויים בו
            // updateService: action, //* פונקציה שמשנה את משתנה ה observable
            addService: action,//*
            // removeService: action,//*
          
        });
    this.baseUrl ='http://localhost:8787/';
    this.initData();
    }


    initData(){
        fetch("http://localhost:8787/services").then((res)=>{
            res.json().then((data)=>{
                runInAction(()=>{
                    this.list = data;
                })
            });            
            
        }).catch((error)=>{
            console.log(error);
        });
    }

    addService(serviceItem){

        fetch("http://localhost:8787/service", {
            method: 'POST',
            body: serviceItem
        }).then((res)=>{
            console.log(res);
            this.list.push(serviceItem);
        }).catch((error)=>{
            console.log(error);
        })

        //axios.post(this.baseUrl, todoItem)

    }

    // removeService(
    //     id){
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

    // updateService(serviceItem){
    //     fetch(`${this.baseUrl}/${serviceItem.id}`, {
    //         method: 'PUT',
    //         body: serviceItem
    //     }).then((res)=>{
    //         const index = this.list.findIndex(t => t.id === serviceItem.id);
    //         runInAction(()=>{ // runInAction מסמן את הפעולה כפעולה שמשפיעה על ה OBSERVABLE
    //             this.list[index] = serviceItem;
    //         });
            
    //     }).catch((error)=>{
    //         console.log(error);
    //     })
    // }


    get getServiceList(){
        return this.list;
    }


}export default new ServiceStore();