import { observable, action, computed, makeObservable, runInAction } from 'mobx';
// const b={id: "758",
//     serviceType: "11",
//     dateTime: "2021-06-20T10:00:00.000Z",//מבנה של תאריך ושעה סטנדרטי בjs
//     clientName: "אבי כהן",
//     clientPhone: "050-1234567",
//     clientEmail: "m@m.com",};

//     const c={id: "787658",
//     serviceType: "411",
//     dateTime: "2021-06-20T10:00:00.000Z",//מבנה של תאריך ושעה סטנדרטי בjs
//     clientName: "אביב כהן",
//     clientPhone: "050-12374567",
//     clientEmail: "my@m.com",}
class Business {

    id = "123";
    name = "Coding Academy";
    address = "Rothschild 60 Tel Aviv";
    phone = "03-1234567";
    owner = "Yariv Katz";
    logo = "https://coding-academy.org/images/ca_logo.png";
    description = "The best coding academy in the world";
    constructor() {
        makeObservable(this, {
            id: observable,
            name: observable,
            address: observable,
            phone: observable,
            owner: observable,
            logo: observable,
            description: observable,

            changeId: action,//*
            changeName: action,//*
            changeAddress: action,//*
            changePhone: action,//*
            changeOwner: action,//*
            changeLogo: action,//*
            changeDescription: action,//*

        });
    }
}


class UserStore {
    admin = true

    constructor() {

        makeObservable(this, {
            admin: observable, // משתנה שניתן להשגיח על השינויים בו


        });
    }


}








export default new UserStore();