import 'normalize.css';

import styles from "./page.module.css";
import Main_block from "@/components/main_block/main_block";
import Block from '@/components/block/block';
import Choose from '@/components/choose/choose';
import Servies from '@/components/servies/servies';
import About from '@/components/about/about';
import Footer from '@/components/footer/footer';

export default function Home() {
  return (
    <>
    <Main_block />
    <Choose />
    <About />
    <Servies />
    <Footer />
    </>
  );
}
