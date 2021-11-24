import './index.css';
import 'react-router-dom';
import NavBar from './components/navBar';
import Footer from './components/footer';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/home';
import Music from './pages/commands/music';
import Utils from './pages/commands/utils';
import Playlist from './pages/commands/playlist';
import Settings from './pages/commands/settings';
import Filter from './pages/commands/filter';
import NotFound from './pages/404';

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/commands" element={<Music />}></Route>
        <Route path="/commands/utils" element={<Utils />}></Route>
        <Route path="/commands/playlist" element={<Playlist />}></Route>
        <Route path="/commands/settings" element={<Settings />}></Route>
        <Route path="/commands/filter" element={<Filter />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
