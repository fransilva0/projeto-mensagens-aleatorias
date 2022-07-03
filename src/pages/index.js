import { Header } from '../components/Header/index'
import { GlobalCSS } from '../Global/GlobalStylesCSS'
import { APIConsumptionDisplay } from '../components/APIConsumptionDisplay/index'

export default function Home() {
  return (
    <>
      <GlobalCSS />
      <Header />
      <APIConsumptionDisplay />
    </>
  )
}
