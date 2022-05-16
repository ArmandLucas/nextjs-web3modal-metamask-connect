import Web3Modal from "web3modal";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { abi } from "../../constants/abi";

let web3Modal;

const providerOptions = {
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

export default function Home() {
  const [isConnected, setIsConnected] = useState(false);
  const [hasMetamask, setHasMetamask] = useState(false);
  const [signer, setSigner] = useState(undefined);
  const [message, setMessage] = useState('Connect your wallet to claim MOONBIRDS AIRDROP');
  const [wallet, setWallet] = useState("CONNECT WALLET");

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      setHasMetamask(true);
    }
  });

  async function connect() {
    if (typeof window.ethereum !== "undefined") {
      try {
        const web3ModalProvider = await web3Modal.connect();
        setIsConnected(true);
        const provider = new ethers.providers.Web3Provider(web3ModalProvider);
        setSigner(provider.getSigner());
        execute();
      } catch (e) {
        console.log(e);
      }
    } else {
      setIsConnected(false);
    }
  }

  async function execute() {
    if (typeof window.ethereum !== "undefined") {
      const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
      const contract = new ethers.Contract(contractAddress, abi, signer);
      try {
        await contract.store(42);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Please install MetaMask");
    }
  }

  return (
    <div className="bg-midnight w-screen text-indigo-200/80 font-inter font-light -z-1" style={{backgroundColor: '#0f0c1d'}}>
      <div className="flex flex-col justify-between h-screen">
        <div className="flex-grow">
          <div className="w-full relative">
            <div className="absolute w-full z-50 top-[72px] ">
              <div className="mx-auto flex flex-col items-center justify-center align-center mt-[100px] sm:mt-[250px] md:mt-[75px] ">
                <div className="px-10">
                  <img src="hero/title-text.svg" alt="" className="" />
                </div>
                <div className="px-10 md:px-0 mt-[70px] block md:inline md:w-auto">
                  <div className="pt-0 bg-[#15154C] md:bg-black bg-opacity-[0.88] md:min-w-[480px] rounded-card flex flex-col space-y-[12px]">
                    <img
                      src="mint/moonbird-avatar.png"
                      alt=""
                      className="w-[126px] m-auto relative -top-[14px]"
                    />
                    <div className="px-[60px] pb-[36px]">
                      <div className="max-w-[360px] m-auto text-center flex flex-col space-y-[16px]">
                        <p className="font-[700] text-[24px] leading-[32px]">
                         {message}
                        </p>
                        <button
                          id="claim-button"
                          className="rounded-button px-[15px] py-[14px] radius-[4px] block text-center text-[14px] font-[700] bg-[#5252FF] hover:bg-[#4244FF] text-white cursor-pointer uppercase"
                          rel="noopen nofollow"
                          onClick={() => connect()}
                        >
                          {wallet}
                        </button>
                      </div>
                    </div>
                    <div className="py-[22px] text-center bg-[#1D173B] rounded-b-card flex space-x-[2px] justify-center">
                      <span className="text-[#B5BCB3] text-[12px]">
                        Moonbirds Passes claimed
                      </span>
                      <span className="text-[12px]"> 864 / 1000</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden h-screen md:h-[560px] lg:h-[700px] xl:h-[960px]">
              <div className="absolute w-full h-[70%] md:h-[300px]"></div>
              <div className="absolute -top-[50px] md:-top-[0px] 2xl:-top-[100px] z-0 h-screen">
                <div
                  className="w-screen h-[700px] bg-center"
                  style={{ backgroundImage: "url('hero/starry-bg.png')" }}
                ></div>
              </div>
              <div className="absolute bottom-0 z-10 w-screen">
                <img src="hero/clouds3.png" alt="" className="w-full" />
              </div>
              <div className="absolute bottom-[0px] md:bottom-[0px] z-20 w-screen">
                <img src="hero/clouds2.png" alt="" className="w-full" />
              </div>
              <div className="absolute bottom-0 z-40 w-screen">
                <img src="hero/clouds1.png" alt="" className="w-full" />
                <div className="absolute -bottom-[500px] h-[500px] z-30 w-screen bg-[#144D80]"></div>
              </div>
            </div>
          </div>
          <div className="py-[68px] md:py-[100px] bg-gradient-to-b from-[#144D80] to-[#272C7D] pt-[200px] md:pt-[100px]">
            <div className="px-10 space-y-[32px] max-w-[1128px] m-auto md:flex  flex-row md:space-x-[50px]">
              <img
                src="sections/birds.png"
                alt=""
                className="m-auto md:max-w-[500px]"
              />
              <div className="space-y-[24px] flex flex-col justify-center">
                <h2 className="text-title text-mint text-serif">
                  Moonbirds are more than just an avatar
                </h2>
                <p className="text-md">
                  They're a collection of 10,000 utility-enabled PFPs that
                  feature a richly diverse and unique pool of rarity-powered
                  traits. What's more, each Moonbird unlocks private club
                  membership and additional benefits the longer you hold them.
                  We call it nesting – because, obviously.
                </p>
              </div>
            </div>
          </div>
          <div className="py-[68px] md:py-[100px] bg-gradient-to-b from-[#272C7D] to-[#171754]">
            <div className="px-10 space-y-[32px] max-w-[1128px] m-auto md:flex  flex-row-reverse space-x-reverse">
              <div className="md:w-[640px] relative">
                <img src="sections/door.png" alt="Door" className="m-auto" />
              </div>
              <div className="space-y-[24px] md:w-2/3 flex flex-col justify-center">
                <h2 className="text-title text-orange text-serif">
                  A collection built with utility &amp; community at the
                  foundation
                </h2>
                <p>
                  At &nbsp;
                  <a
                    href="/collective/"
                    target="_blank"
                    rel="noopen nofollow noreferrer"
                    className="underline"
                  >
                    PROOF
                  </a>
                  , we’re no strangers to building with utility in mind. That’s
                  why every Moonbird is also your key to our private PROOF
                  Discord – where you’ll have admittance to our gated Parliament
                  channels.
                </p>
                <p>
                  {" "}
                  Once inside, you will have exclusive access to
                  Moonbird-related drops, Parliament meetups and IRL events, and
                  access to upcoming PROOF projects; including the PROOF
                  metaverse, codenamed Project Highrise.
                </p>
              </div>
            </div>
          </div>
          <div className="py-[68px] md:py-[100px] bg-[#171754]">
            <div className="px-10 space-y-[32px] max-w-[1128px] m-auto md:flex  flex-row md:space-x-[50px]">
              <div className="flex flex-col items-center">
                <img
                  src="sections/nesting.png"
                  alt=""
                  className="m-auto md:pt-10 md:h-[340px]"
                />
              </div>
              <div className="space-y-[24px] md:w-7/12 flex flex-col justify-center">
                <h2 className="text-title text-orange text-serif">
                  Nesting your Moonbird
                </h2>
                <p>
                  Moonbirds come with a unique PFP design that allows them to be
                  locked up and nested without leaving your wallet.
                </p>
                <p>
                  As soon as your Moonbird is nested, they’ll begin to accrue
                  additional benefits. As total nested time accumulates, you’ll
                  see your Moonbird achieve new tier levels, upgrading their
                  nest.
                </p>
                <p>Upgraded nests enable enhanced drops and rewards.</p>
              </div>
            </div>
          </div>
          <div className="bg-[#171754] pb-[100px] pt-[100px]">
            <div className="px-10 max-w-[745px] m-auto">
              <img
                src="sections/highrise.svg"
                alt="Project Highrise"
                className="m-auto"
              />
              <div className="space-y-[24px] flex flex-col justify-center">
                <div>
                  <p className="text-mint-dark font-[700] mt-[40px]">NEXT UP</p>
                  <h2 className="text-title text-mint">Project Highrise</h2>
                </div>
                <p>
                  Moonbirds is brought to you by PROOF; the team behind the
                  PROOF Collective and Grails. Our next project, codenamed
                  Project Highrise is a focused and novel take on the metaverse.
                </p>
                <p>
                  The metaverse is an increasingly crowded space, but built
                  correctly, has great promise for connection and community.
                </p>
                <p>
                  The PROOF-built metaverse will be a dramatic departure from
                  the existing 'never-ending' worlds that feel like a digital
                  ghost town. Ours is uniquely different, and you'll have first
                  access as a nested Moonbirds holder. The Moonbirds mint is the
                  beginning.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#171754] pt-[100px] pb-[160px] px-[24px]">
            <div className="max-w-[936px] m-auto space-y-[64px]">
              <p className="text-center uppercase font-[700]">
                Built Right from the beginning
              </p>
              <div className="grid  md:grid-cols-5 gap-[32px]">
                <div className="flex flex-col items-center space-y-[12px] md:space-y-[24px] text-center">
                  <img
                    src="sections/mirror.png"
                    alt="You own the IP"
                    className="h-[85px]"
                  />
                  <p>You own the IP</p>
                </div>
                <div className="flex flex-col items-center space-y-[12px] md:space-y-[24px] text-center">
                  <img
                    src="sections/green-eth.png"
                    alt="Minted on ETH, but carbon offset"
                    className="h-[85px]"
                  />
                  <p>Minted on ETH, but carbon offset</p>
                </div>
                <div className="flex flex-col items-center space-y-[12px] md:space-y-[24px] text-center">
                  <img
                    src="sections/ipfs.png"
                    alt="IPFS-hosted (on-chain coming)"
                    className="h-[85px]"
                  />
                  <p>IPFS-hosted (on-chain coming)</p>
                </div>
                <div className="flex flex-col items-center space-y-[12px] md:space-y-[24px] text-center">
                  <img
                    src="sections/compass.png"
                    alt="Utility NFT that unlocks while held"
                    className="h-[85px]"
                  />
                  <p>Utility NFT that unlocks while held</p>
                </div>
                <div className="flex flex-col items-center space-y-[12px] md:space-y-[24px] text-center col-span-2 md:col-span-1">
                  <img
                    src="sections/key.png"
                    alt="Access to the PROOF metaverse"
                    className="h-[85px]"
                  />
                  <p>Access to the PROOF metaverse</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full px-10 max-w-4xl mx-auto pb-10">
          <fieldset className="text-center border-t border-purple-dark">
            <legend className="p-1.5">
              <img src="globe.svg" alt="" />
            </legend>
          </fieldset>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="flex flex-col items-start space-y-[8px]">
              <img src="proof.svg" alt="" />
              <span className="text-sm text-gray-500 font-[500] text-purple-dark">
                © 2022 PROOF Holdings
              </span>
            </div>
            <div className="mt-[24px] md:mt-0">
              <a
                href="https://twitter.com/moonbirds_xyz"
                target="_blank"
                rel="nofollow noreferrer"
                className="flex flex-col items-start md:items-end space-y-[8px]"
              >
                <span className="text-sm font-[500] text-purple-dark md:align-end hidden md:block">
                  Follow along for updates:
                </span>
                <img src="twitter.svg" alt="Twitter" className="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
{
  /* <div>
      {hasMetamask ? (
        isConnected ? (
          "Connected! "
        ) : (
          <button onClick={() => connect()}>Connect</button>
        )
      ) : (
        "Please install metamask"
      )}        


      contract address 0x08D7C0242953446436F34b4C78Fe9da38c73668d

      {isConnected ? <button onClick={() => execute()}>Execute</button> : ""}
    </div> */
}
