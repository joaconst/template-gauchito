
import Hero from '@/components/sections/Hero';
import Buttons from '@/components/sections/Buttons';
import About from '@/components/sections/About'
import Combo from '@/components/sections/Combo'
import Wholesalers from '@/components/sections/Wholesalers'
import Adivace from '@/components/sections/Adivace'
import Info from '@/components/sections/Info'

export default function Home() {
  return (
    <div>
      <Hero />
      <Buttons />
      <About />
      <Combo />
      <Wholesalers />
      <Adivace />
      <Info />
    </div>
  );
}
