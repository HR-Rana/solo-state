import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ShopClient from '../shop-components/ShopClient';
import ShopHeader from '../shop-components/ShopHeader';

export default function ShopPage() {
  return (
    <>
      <Navbar />
      <main>
        <ShopHeader />
        <ShopClient />
      </main>
      <Footer />
    </>
  );
}
