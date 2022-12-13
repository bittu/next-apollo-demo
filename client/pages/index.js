import Link from 'next/link'
import Name from '../components/Name'

const Page = () => (
  <div>
    Welcome, <Name />
    <br/><br/>
    <Link href="/about">About</Link>

  </div>
)

export default Page
