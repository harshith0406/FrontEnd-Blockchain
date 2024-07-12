import { useEffect, useState } from 'react';
import Web3 from 'web3';
import { create } from 'ipfs-http-client';
import { Buffer } from 'buffer';
import MediChain from './contracts/MediChain.json';
import Dashboard from './components/Dashboard.js';
import Home from './components/Home.js';
import Login from './components/Login.js';
import Register from './components/Register.js';
import Footer from './components/Footer.jsx';
import SiteNavbar from './components/SiteNavbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MediChainContract from './contracts/MediChain.json';

const ipfs = create({
  host: 'localhost',
  port: 5001,
  protocol: 'http', 
});

function App() {
  const [account, setAccount] = useState('');
  const [token, setToken] = useState('');
  const [mediChain, setMediChain] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      window.ethereum.request({ method: 'eth_requestAccounts'})
        .then(result => {
          setAccount(result[0]);
        })
        .catch(error => {
         console.log(error)
        });
      window.ethereum.on('chainChanged', () => window.location.reload());
		} else {
			alert('Please use Metamask or a Web3 enabled browser');
		}
  }

  const getContractInstance = async () => {
    const web3 = new Web3(window.ethereum || Web3.givenProvider || 'http://localhost:8545')
    const networkId = await web3.eth.net.getId()
    const networkData = MediChain.networks[networkId]
    if(networkData){
      const mediChain = new web3.eth.Contract(MediChain.abi, networkData.address)
      setMediChain(mediChain)
      console.log(await mediChain.methods.name().call())
    }else{
      alert('Smart contract not deployed on this network')
    }
  }

  useEffect(() => {
    getContractInstance()
  }, [])

  return (
    <Router>
      <SiteNavbar token={token} account={account} setAccount={setAccount} setToken={setToken}/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login mediChain={mediChain} token={token} setToken={setToken} setAccount={setAccount} connectWallet={connectWallet} account={account}/>} />
        <Route path='/dashboard' element={<Dashboard mediChain={mediChain} token={token} account={account} ipfs={ipfs}/>} />

        <Route path='/home' element={<Home />} />
                <Route path='/register' element={<Register mediChain={mediChain} ipfs={ipfs} token={token} setToken={setToken} setAccount={setAccount} connectWallet={connectWallet} account={account} />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
