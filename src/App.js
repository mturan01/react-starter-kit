
import "./style.scss"
function App() {
 const style={color:'gray',backgroundColor:'black'};
 const name ='Mehmet';
  return (
   <main>
    {/* <></> fragment kullanımı önemli*/}
    <h1 style={{color:'red',backgroundColor:'yellow'}}>mehmetturanders.com</h1>
    <h1 style={style} >alpbugraders.com</h1>
    {name}
   </main>
  );
}

export default App;
