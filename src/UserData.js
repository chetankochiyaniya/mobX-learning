import { observable, autorun, runInAction } from "mobx";

const UserData = observable({
  user: {
    id: 1,
    name: "John",
    subject: ["math", "eng", "physics"],
  },
  get totalSubject() {
    return this.user.subject.length;
  },
  updateUser(user) {
    runInAction(() => {
      this.user.name = user;
    });
  },
  addSubject(subject) {
    runInAction(() => {
      this.user.subject = [...this.user.subject, subject];
    });
  },
  logUser() {
    console.log(this.user);
  },
  fetchedData() {
    console.log("fetched data action");
  },
});

autorun(() => UserData.logUser());
runInAction(() => UserData.fetchedData());

export default UserData;
