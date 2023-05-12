import { action,autorun,makeObservable,computed,observable,runInAction } from "mobx";

class UserData{
    user={
        id:1,
        name: "John",
        subject: ["math","eng","physics"]
    }
    constructor(){
        makeObservable(this,{
            user:observable,
            totalSubject:computed,
            updateUser:action,
            addSubject:action
        });
        autorun(()=>this.logUser());
        runInAction(()=>this.fetchedData());
    }
    logUser(){
        console.log(this.user);
    }
    fetchedData(){
        console.log("fetched data action");
    }
    get totalSubject(){
        return this.user.subject.length;
    }
    updateUser(user){
        this.user.name=user;
    }
    addSubject(subject){
        return this.user.subject=[...this.user.subject,subject];
    }
}

export default UserData;