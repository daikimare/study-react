import Link from 'next/link';
import Layout from '../components/Layout';
import style from '../static/Style';

const h1 = {
  fontSize: '72pt',
  fontWeight: 'bold',
  textAlign: 'right',
  letterSpacing: '-8px',
  color: '#f0f0f0',
  margin: '-40px 0px'
}
const p = {
  margin: '0px',
  color: '#666',
  fontSize: '16pt'
}

export default () =>(
  <Layout header ="Other" title ="Other page">
    <p>This is Other page</p>
    <hr />
    <div>
      <Link href ="/">
        <button>&lt;&lt;Back to Top</button>
      </Link>
    </div>
  </Layout>
)
{/* <div>
  {style}
  <h1>Next.js</h1>
  <p>This is Other page.</p>
  <hr />
  <div>
    <Link href ="/">
      <button>&lt;&lt;Back to Index page</button>
    </Link>
  </div>
</div> */}