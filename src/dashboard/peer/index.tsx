import {Route, Routes} from 'react-router-dom'
import PeerMain from './PeerSections/peer';
import PeerCourseRoute from './PeerSections/peerCourse';
import PeerStudentProfile from './PeerSections/peerStudentProfile';

const Peer: React.FC = () => {
  return <Routes>
      <Route path='/' element={<PeerMain/>}/>
      <Route path='/courses/*' element={<PeerCourseRoute/>}/>
      <Route path="/student-profile" element={<PeerStudentProfile/>}/>
  </Routes>
};

export default Peer;
