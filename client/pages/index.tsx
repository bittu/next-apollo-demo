import Name from '../components/Name';

const Page = () => (
  <main className="main">
    <h1 className="title" data-testid="heading">
      Welcome, <Name />
    </h1>
  </main>
)

export default Page
