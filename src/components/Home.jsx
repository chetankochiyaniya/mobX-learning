import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import UserData from "../UserData";
function Home() {
  useEffect(() => {
    console.log(UserData);
    console.log(UserData.user);
  });
  function hdlchange(){
    UserData.updateUser("Alex");
  }
  function hdlsubject(){
    UserData.addSubject("chemestry");
  }
  return (
    <>
      <div>Home</div>
      <div>{UserData.user.name}</div>
      <div>{UserData.user.subject.map((data)=><div>{data}</div>)}</div>
      <button onClick={hdlchange}>Change User</button>
      <button onClick={hdlsubject}>Add Subject</button>
    </>
  );
}

export default observer(Home);
