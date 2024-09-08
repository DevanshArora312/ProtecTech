import './App.css';
import { useEffect } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import { Login } from './pages/login';
import {Dashboard} from './pages/dashboard';
import {Alerts} from './pages/alerts';
import { Analytics } from './pages/analytics';
import { Connect } from './pages/connect';
import { FullDuplexConnection, socket } from './socket';
import Detect from './pages/detect';
import Trace from './pages/trace';
import ProtectedRoute from './components/protect';
import {useSelector} from 'react-redux';
import {RootState} from './redux/store' 
function App() {

  const {officer} = useSelector((state : RootState)=>{
    return state.profile
  })

  useEffect(()=>{
    if(!socket){
      if(officer){
        FullDuplexConnection(officer.thana_id);
      }
    }
  }, [socket]);

  return (
    <div className="h-screen">
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard/>
          </ProtectedRoute>
        }>
          <Route path="/dashboard" element={<Navigate to={"/dashboard/alerts"} replace/>}/>
          <Route path="/dashboard/alerts" element={<Alerts/>}/>
          <Route path="/dashboard/detect/:latitude/:longitude" element={<Detect/>}/>
          <Route path="/dashboard/trace/:latitude/:longitude" element={<Trace/>}/>
          <Route path="/dashboard/analytics" element={<Analytics/>}/>
          <Route path="/dashboard/connect" element={<Connect/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
