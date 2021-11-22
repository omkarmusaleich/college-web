import Dropdown from './components/Dropdown';
import { useState, useEffect, useContext } from 'react';
import AuthContext from './store/conText/AuthContext';
import './App.css';
import Navigation from './components/Navigation';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import DetailItem from './components/DetailItem';
import Cart from './pages/Cart';
import OrderHistory from './pages/OrderHistory';
import ContactUs from './pages/ContactUs';
import Login from './components/Login';


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const authCtx = useContext(AuthContext);

  const toggle = () => {
    setIsOpen((state) => !state)
  }

  useEffect(() => {
    const hidemenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    }
    window.addEventListener('resize', hidemenu);

    return () => window.removeEventListener('resize', hidemenu)
  })

  return (
    <>
      {authCtx.isLoggedIn && <Navigation toggle={toggle} />}
      {authCtx.isLoggedIn && <Dropdown isOpen={isOpen} toggle={toggle} />}
      <Switch>
        {!authCtx.isLoggedIn && <Route path='/' exact>
          <Redirect to='/auth'></Redirect>
        </Route>}
        {!authCtx.isLoggedIn && <Route path='/auth' exact>
          <Login />
        </Route>}

        {authCtx.isLoggedIn && <Route path='/' exact>
          <Redirect to='/home'></Redirect>
        </Route>}

        {authCtx.isLoggedIn && <Route path='/home' exact>
          <Home />
        </Route>}

        {authCtx.isLoggedIn && <Route path='/contactus' exact>
          <ContactUs />
        </Route>}

        {authCtx.isLoggedIn && <Route path='/order-history' exact>
          <OrderHistory />
        </Route>}

        {authCtx.isLoggedIn && <Route path='/cart' exact>
          <Cart />
        </Route>}

         {authCtx.isLoggedIn && <Route path='/home/:itemId' exact>
          <DetailItem />
        </Route>}

        <Route path='*'>
         <Redirect to='/auth'></Redirect>
        </Route>

      </Switch>

    </>
  );
}

export default App;
