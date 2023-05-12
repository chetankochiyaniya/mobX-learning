import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
function Home({ store }) {
  useEffect(() => {
    console.log(store);
    console.log(store.user);
  });
  function hdlchange(){
    store.updateUser("Alex");
  }
  function hdlsubject(){
    store.addSubject("chemestry");
  }
  return (
    <>
      <div>Home</div>
      <div>{store.user.name}</div>
      <button onClick={hdlchange}>Change User</button>
      <button onClick={hdlsubject}>Add Subject</button>
    </>
  );
}

export default observer(Home);
