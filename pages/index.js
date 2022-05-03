import { Navbar, Products } from '../components'
import Page from '../layouts/Page'

export default function Home() {
  return (
    <Page title='home' description = 'lol'>
      <Navbar/>
      <div>
        <h2 className='heading'>Welcome to the Redux Toolkit</h2>
        <section>
          <h3>Products</h3>
          <Products/>
        </section>
      </div>
    </Page>
  )
}
