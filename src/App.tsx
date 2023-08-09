
import { useEffect } from 'react'
import './App.css'
import MainLayout from './layouts/MainLayout'
import { onAuthStateChanged } from 'firebase/auth'
import { setLoading, setUser } from './redux/features/user/userSlice'
import { auth } from './lib/firebase'
import { useAppDispatch } from './redux/hook'

function App() {


  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLoading(true));

    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email!));
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
      }
    });
  }, [dispatch]);

  return (
    <div>
      <MainLayout></MainLayout>
    </div>
  )
}

export default App
