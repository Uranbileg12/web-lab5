import './App.css';
import dugui from './NPPOLNN1060D5.jpg';
import played from './images.png';
import dot from './600px-Symbol_rain_64.svg.png';

import { Head } from "./components/Head/index1";
import {Comment} from "./components/Classt/index";
const Ontslog= () => {
  return(
<div className="Neg">
<td className="feature"><img src={played}/></td>
<td className="features">
  <p><span>Features</span>A song of its time, began as a flashback 80’s vibe , then became a lockdown anthem.</p><span className="b">REAM OUR FEATURES</span>
  </td>
</div>
  );
};

const Medeeelel = (props) => {
  return(
    <div className="Hoyr">
      <div className="container"><td className="detail"><span>Details</span></td>
      <td className="dot"><img src={dot}></img>
      </td>
      </div>
      <td className="zurag"><tr><img src={dugui}/></tr>
      <tr><img src={dugui}/></tr>
      <tr><img src={dugui}/></tr>
      <tr><img src={dugui}/></tr>
      <tr><img src={dugui}/></tr></td>
      <td className="medeelel">
        <tr className="d"><p><p className="ehlel">Lorem ipsum dolor sit ame</p>{props.medee1}<em className="suul"> proident minim</em></p></tr>
        <tr className="d"><p><p className="ehlel">Lorem ipsum dolor sit ame</p>{props.medee1}<em className="suul"> proident minim</em></p></tr>
        <tr className="d"><p><p className="ehlel">Lorem ipsum dolor sit ame</p>{props.medee1}<em className="suul"> proident minim</em></p></tr>
        <tr className="d"><p><p className="ehlel">Lorem ipsum dolor sit ame</p>{props.medee1}<em className="suul"> proident minim</em></p></tr>
        <tr className="d"><p><p className="ehlel">Lorem ipsum dolor sit ame</p>{props.medee1}<em className="suul"> proident minim</em></p></tr>
      </td>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">  
    <Head />
    <Ontslog/>
    <Medeeelel medee1="Dolore ex deserunt aute nulla ea sunt aliqua nisi cupidatat eu. Nostrud in laboris labore nisi amet do dolor eu fugiat consectetur elit cillum esse"/>
        <Comment/>  

      </header>
    </div>
  );
}

export default App;
