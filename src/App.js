import Header from "./component/header";
import Headline from "./component/headline";
import "./app.scss";


const tempArr = [{
  fName: 'Joe',
  lName: 'Bloggs',
  email: 'joe@gmail.com',
  age:24,
  onlineStatus: true
}]

function App() {
  return (
    <>
      <Header />
      <section className="main">
        <Headline header={1} desc="Click the button to render posts!" tempArr={tempArr} />
      </section>
    </>
  );
}

export default App;
