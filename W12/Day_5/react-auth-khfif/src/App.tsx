import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginForm } from './pages/login-page';
import { SignupForm, SvgLoader } from './pages/signup-page';
import { HomePage } from './pages/home-page';
import { Profile } from './pages/profile-page';
import axios from 'axios';
import useSWR from 'swr';
import './App.css';

const fetcher = (url: string) =>
  axios.get(url, { withCredentials: true }).then((response) => {
    return { user: response.data || null };
  });

export default function App() {
  const { data, error, isLoading, isValidating } = useSWR("http://localhost:3030/api/user", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
  });
  if (isLoading || isValidating) {
    return (<div className='h-full w-full bg-white text-black flex flex-col items-center justify-center'>
      <SvgLoader />;
      </div>)
  }
  
  return (
    <Routes>
      <Route path="/" element={error ? <HomePage /> : <Navigate to="/profile" /> } />
      <Route path="/login" element={error ? <div className='flex flex-col items-center justify-center h-screen w-screen'><LoginForm /></div> : <Navigate to="/profile" replace />} />
      <Route path="/signup" element={error ? <div className='flex flex-col items-center justify-center h-screen w-screen'><SignupForm /></div>: <Navigate to="/profile" replace />} />
      <Route path="/profile" element={data ? <Profile /> : <Navigate to="/" replace />} />
    </Routes>
  );
}
