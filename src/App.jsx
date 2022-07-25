import {useEffect, useState} from "react";
import {firestore} from "./firebaseConfig";

const App = () => {
  const [data, setData] = useState();

  useEffect(() => {
    firestore.collection('test')
      .doc('friend')
      .get()
      .then((doc) => {
        setData(doc.data().friend_count);
      });
  }, []);

  return (
    <div className="App">
      Hello react
      {data}
    </div>
  );
};

export default App;
