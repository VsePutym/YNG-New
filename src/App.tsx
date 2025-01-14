import DrawerFC from './components/DrawerFC/DrawerFC.tsx'
import Fish from './components/Fish/Fish.tsx'
import StepperFC from './components/Stepper/Stepper.tsx'
import About from './features/About/About.tsx'
import Header from './features/Header/Header.tsx'
import Main from './features/Main/Main.tsx'
import ParallaxBG from './features/ParallaxBG/ParallaxBG.tsx'
import Promo from './features/Promo/Promo.tsx'
import Slider from './features/Slider/Slider.tsx'
import Testing from './features/Testing/Testing.tsx'
import WelcomeBanner from './features/WelcomeBanner/WelcomeBanner.tsx'

function App() {

  return (
    <div>
      <Header />
      <Main />
      <WelcomeBanner />
      <Testing/>
      <StepperFC />
      <ParallaxBG />
      <About />
      <Fish />
      <Promo />
      <Slider />
      <DrawerFC />
      {/* <AppRouter /> */}
    </div>
  )
}

export default App
