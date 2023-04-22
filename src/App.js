import Button from "./components/Button";
import Tab from "./components/Tab";
import "./tailwind.css"

function App() {
 const style={color:'gray',backgroundColor:'black'};
 const name ='Mehmet';
  return (
   <>
    {/* <></> fragment kullanımı önemli*/}
    <div style={{padding:20}}>
      <Tab activeTab={1}>
      <Tab.panel title="profil" >1.tab</Tab.panel>
      <Tab.panel title="hakkında" >2.tab</Tab.panel>
      <Tab.panel title="ayarlar" >3.tab</Tab.panel>
      </Tab>
    </div>
    <Button text="Buton örneği"/>
    <Button text="Buton örneği" variant="success"/>
    <Button text="Buton örneği" variant="warning"/>
    <Button text="Buton örneği" variant="danger"/>
    <h1 style={{color:'red',backgroundColor:'yellow'}}>mehmetturanders.com</h1>
    <h1 style={style} >alpbugraders.com</h1>
    {name}
   </>
  );
}

export default App;
