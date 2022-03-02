/* pages/_app.js */
import '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <div className="currentNetwork"><p style={{width:"250px",float:"right", textAlign:"right" , marginRight:"20px"}}><small>NetWork : Mumbai Testnet<br/> (Matic)</small></p></div>
      <nav className="border-b p-6">
        <p style={{textAlign:'center', width:"100%"}} className="text-4xl font-bold">NFT Marketplace</p>
        <p style={{textAlign:'center', width:"100%" , fontSize:"0.5em"}}  ><small>Multi chain network ()</small></p> 


        <div className="flex mt-4">
          <Link href="/">
            <a className="mr-4 text-pink-500">
              Home
            </a>
          </Link>
          <Link href="/create-nft">
            <a className="mr-6 text-pink-500">
              Sell NFT
            </a>
          </Link>
          <Link href="/my-nfts">
            <a className="mr-6 text-pink-500">
              My NFTs
            </a>
          </Link>
          <Link href="/dashboard">
            <a className="mr-6 text-pink-500">
              Dashboard
            </a>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp