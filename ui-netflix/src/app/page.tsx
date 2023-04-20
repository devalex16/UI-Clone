import Header from '../components/Header';
import Menu from '../components/Menu';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Timeline from '../components/Timeline';


export default function Home() {
  return (
    <>
      <header className="w-screen h-28 flex flex-col justify-start items-start p-3 mb-3">
        <Header/>
        <Menu/>
      </header>
      <main className="flex flex-col items-center">
        <Banner />
        <Timeline />
      </main>
      <footer className="bg-black py-3 w-full fixed bottom-0">
        <Footer />
      </footer>
    </>
  )
}