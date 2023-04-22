
import Bootsatrap from "./Bootsatrap";
import "./tailwind.css";
import Tailwind from "./Tailwind";

import logo from "./logo.svg"
import Test from "./Test";

import styles from "./App.module.css";
import { Title } from "./Components";

function Styles(){
    <div className={styles.App}>
    <Title>{process.env.NODE_ENV}</Title>
    <Title theme="dark">{process.env.NODE_ENV}</Title>
    <p className="env">{process.env.REACT_APP_API_URL}
      <span>Test</span>
    </p>
    <Test />
    {process.env.NODE_ENV == 'production' && (
      <>
        <img src="logo192.png" alt="" />
        <img src={logo} alt="" />
      </>
    )}
    <Bootsatrap />
    <Tailwind/>
  </div>
}
export default Styles;