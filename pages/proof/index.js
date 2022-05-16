import { useState, useEffect } from "react";
import { Footer } from "../../components/Common/Common";
import styles from "./index.module.css";

import Web3Modal from "web3modal";
import { ethers } from "ethers";
import WalletConnectProvider from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";

let web3Modal;

const providerOptions = {
  coinbasewallet: {
    package: CoinbaseWalletSDK,
    options: {
      rpc: { 97: process.env.NEXT_PUBLIC_RPC_URL }, // required
    },
  },
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      rpc: { 97: process.env.NEXT_PUBLIC_RPC_URL }, // required
    },
  },
};

if (typeof window !== "undefined") {
  web3Modal = new Web3Modal({
    cacheProvider: false,
    providerOptions, // required
  });
}

export default function proof() {
  const [isConnected, setIsConnected] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const [hasMetamask, setHasMetamask] = useState(false);
  const [web3Provider, setWeb3Provider] = useState();
  const [library, setLibrary] = useState();
  const [accounts, setAccount] = useState();
  const [message, setMessage] = useState();

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      setHasMetamask(true);
    } else {
      window.alert("Please install MetaMask");
    }
  });

  async function disconnect() {
    setAccount(null);
    setIsConnected(false);
    setConnecting(false);
    setWeb3Provider();
    setLibrary();
    await web3Modal.clearCachedProvider();
  }

  async function connect() {
    if (typeof window.ethereum !== "undefined") {
      try {
        setConnecting(true);
        const web3Provider = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(web3Provider);
        const accounts = await provider.listAccounts();
        if (accounts) setAccount(accounts[0]);
        setWeb3Provider(web3Provider);
        setLibrary(provider);
        setIsConnected(true);
      } catch (e) {
        setConnecting(false)
        setMessage('MetaMask Message Signature: User denied message signature.')
        console.log(e);
      }
    } else {
      setIsConnected(false);
    }
  }

  const status = () => {
    return isConnected ? (
      <div>
        <h1
          className={styles.heading}
          data-animation-in="fadeInDownBig"
          data-animation-delay="500"
        >
          You need to own our NFT to enter
        </h1>
        <p className={styles.lead}>
          Your connected wallet doesn't hold any PROOF Collective tokens.
        </p>
        <a className={styles.button} href='https://opensea.io/collection/proof-collective/'>Buy On Secondary</a>
      </div>
    ) : connecting ? (
      <div>
        <h1
          className={styles.heading}
          data-animation-in="fadeInDownBig"
          data-animation-delay="500"
        >
          Welcome to PROOF Collective
        </h1>
        <p className={styles.lead}>
          To get access to the portal for PROOF Collective, please connect the
          wallet where you hold a PROOF Collective NFT.
        </p>
        <div className={styles.button}>Wallet Connecting...</div>
        <p className={styles.lead}>
          Signature Request has been sent at 0xF17Ee9e0d1F1babd9bdeDD01D4f6bE4A7Ca84938. Please sign and prove
          the ownership of this address.
        </p>
      </div>
    ) : (
      <div>
        <h1
          className={styles.heading}
          data-animation-in="fadeInDownBig"
          data-animation-delay="500"
        >
          Welcome to PROOF Collective
        </h1>
        <p className={styles.lead}>
          To get access to the portal for PROOF Collective, please connect the
          wallet where you hold a PROOF Collective NFT.
        </p>
        <div className={styles.button} onClick={() => connect()}>
          Connect Wallet
        </div>
        <p className={styles.lead}> 
          {message}
        </p>
      </div>
    );
  };

  return (
    <div className={styles.bodywrap}>
      <div id="st-container" className={styles.stcontainer}>
        <div className={styles.stpusher}>
          <div className={styles.stcontent}>
            <div className={styles.stcontentinner}>
              <div className={styles.header}>
                <div className={styles.user}>
                  {accounts}
                  <div className={styles.dropdown}>
                    <button onClick={() => disconnect()}>Logout</button>
                  </div>
                </div>
              </div>
              <section className={styles.backgroundimageholder}>
                <div
                  className="slice holder-item holder-item-light has-bg-cover bg-size-cover"
                  style={{
                    backgroundImage: "url('/hero/proof.png')",
                    backgroundPosition: "center",
                    minHeight: "300px",
                    backgroundSize: "cover",
                  }}
                ></div>
              </section>
              <section className="slice-pb-0" style={{ marginTop: "-80px" }}>
                <div className={styles.container}>
                  <div className={styles.rowJustifyContentCenter}>
                    <div className={styles.col10TextCenter}>
                      <img
                        src="/hero/proof-logo.svg"
                        alt="PROOF Collective"
                        className="img-fluid img-center no-border mb-5"
                        id="brand-logo"
                        style={{ height: "100px" }}
                      />
                      <div className="text-center mb-4"> </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className={styles.blackbackground}>
                <div className={styles.collective}>
                  <div className="row justify-content-center text-center">
                    <div className="col col-lg-8">
                      {status()}
                      <p className="mt-2" x-text="message"></p>
                    </div>
                  </div>
                </div>
              </section>
              <div className={styles.footer}>
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
