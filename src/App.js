
import './App.css';
import Registration from './Component/Registration';
import { useSelector } from 'react-redux';
import StepTwo from './Component/StepTwo';
import StepThree from './Component/StepThree';




function App() {
  const { route } = useSelector((state) => state.form);
  return (
   
  
    route === 0 ?
      <Registration /> 
      :
       
      route === 1 ?
      <StepTwo /> 
      :
  
      <StepThree /> 
     
   
 );
}
export default App;
