import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import NewArrivalClient from '../new-arrival-components/NewArrivalClient';
import NewArrivalHeader from '../new-arrival-components/NewArrivalHeader';

export default function NewArrivalsPage() {
  return (
    <>
      <Navbar />
      <main>
        <NewArrivalHeader />
        <NewArrivalClient />
      </main>
      <Footer />
    </>
  );
}
