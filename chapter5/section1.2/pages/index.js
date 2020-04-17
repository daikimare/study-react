import Link from 'next/link';
import Layout from '../components/Layout';
import style from '../static/Style';
import Image from '../static/Image';
import Counter from '../components/Counter';

export default () => (
  <Layout header ="Next" title ="Top page.">
    <p>Welcome to Next.js</p>
    <Image fname = "image.jpg" size = "250" />
    <Counter />
    <hr />
    <Link href ="./other">
      <button>Go to Other &gt;&gt;</button>
    </Link>
  </Layout>
);
// <div>
//   {/* <style jsx>
//     {`
//     h1 {
//       font-size: 68pt;
//       font-weight: bold;
//       text-align: right;
//       letter-apacing: -8px;
//       color: #f0f0f0;
//       margin: -32px 0px;
//     }
//     p {
//       margin: 0px;
//       color: #666;
//       font-size: 16pt;
//     }
//     `}
//   </style> */}
//   {style}
//   <h1>Next.js</h1>
//   <p>Welcome to Next.js!</p>
//   <hr />
//   <Counter />
//   <div>
//     <Link href ="/other">
//       <button >Go to Other &gt;&gt;</button>
//     </Link>
//   </div>
// </div>
