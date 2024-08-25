import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom';
import { Login } from './pages/login';
import {Dashboard} from './pages/dashboard';
import {Alerts} from './pages/alerts';
import { Analytics } from './pages/analytics';
import { Connect } from './pages/connect';
function App() {
  return (
    <div className="h-screen">
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}>
          <Route path="/dashboard" element={<Navigate to={"/dashboard/alerts"} replace/>}/>
          <Route path="/dashboard/alerts" element={<Alerts/>}/>
          <Route path="/dashboard/analytics" element={<Analytics/>}/>
          <Route path="/dashboard/connect" element={<Connect/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
