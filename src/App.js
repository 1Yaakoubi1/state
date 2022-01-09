
import Fullname from './profile/profilecomponent/fullname';
import Profession from './profile/profilecomponent/profession';
import Bio from './profile/bio';
import Image from './images/image';
import nader from "./images/nader.jpg";
function App() {

  const fname = "Nader Masmoudi"
  const bio = "le premier et seul médaillé dor de son pays aux Olympiades internationales de mathématiques en 1992"
  const profession = "Mathematicien " 
  return (
    <div className="App">
         <Fullname fname = {fname} />
         <Bio  bio = {bio}/>
         <Profession profession = {profession}/>
        <Image> <img height={300} width={230} src={nader} /> </Image>
    </div>
  );
}

export default App;
