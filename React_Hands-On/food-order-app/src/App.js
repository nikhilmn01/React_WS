import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';
import { useState } from 'react';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartModal = () => {
    setCartIsShown(true);
  }

  const hideCartModal = () => {
    setCartIsShown(false);
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onHide={hideCartModal}/>}
      <Header onShow={showCartModal}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
