import {
  Route,
  Routes
} from "react-router-dom";
import Top from './Top';
import Timer from './Timer';

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Top />} />
        <Route path='/timer' element={<Timer />} />
      </Routes>
    </>
  )
}

export default AppRoutes;