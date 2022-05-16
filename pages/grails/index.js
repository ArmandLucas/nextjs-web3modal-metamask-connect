import { NFT, VideoNFT, NFTs, Card } from "../../components/Grails/Grails";
import { Footer } from "../../components/Common/Common";

export default function grails() {
  return (
    <div className="bg-midnight text-indigo-200/80 font-inter font-light">
      <div className="w-screen min-h-screen relative overflow-x-hidden space-y-24">
        <Card />
        <div className="relative max-w-screen-2xl mx-auto px-4 lg:px-8">
          <div className="-mt-10 text-center space-y-4">
            <a
              className="inline-flex py-3 px-6 gap-3 items-center rounded-full font-poppins uppercase text-sm leading-none tracking-wider text-black bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-400"
              target="_blank"
              rel="noopener noreferrer"
              href="https://opensea.io/collection/proof-collective-grails"
            >
              <span className="text-2xl">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 0C5.36 0 0 5.36 0 12s5.36 12 12 12 12-5.36 12-12S18.64 0 12 0ZM5.92 12.4l.053-.08 3.12-4.88c.054-.08.16-.053.187.027.533 1.173.96 2.613.773 3.52-.08.373-.346.88-.613 1.333-.027.08-.08.133-.107.187-.026.026-.053.053-.08.053h-3.2c-.133 0-.186-.08-.133-.16Zm13.92 1.68c0 .053-.027.08-.053.107-.24.106-1.067.48-1.414.96-.88 1.226-1.546 2.96-3.04 2.96H9.04c-2.213 0-4-1.814-4-4.027V14c0-.053.053-.107.107-.107H8.64c.08 0 .107.054.107.134-.027.24.026.453.133.666.213.427.64.694 1.093.694h1.734v-1.36H10c-.08 0-.133-.107-.08-.16.027-.027.027-.054.053-.08.16-.24.4-.587.614-.987.16-.267.32-.56.426-.853.027-.054.054-.107.054-.16.026-.107.08-.187.08-.267.026-.08.053-.16.053-.213.053-.24.08-.507.08-.774 0-.106 0-.213-.027-.32 0-.106-.026-.24-.026-.346 0-.107-.027-.214-.054-.32a3.096 3.096 0 0 0-.106-.48l-.027-.054-.08-.32a20.218 20.218 0 0 0-.32-.96c-.053-.133-.08-.24-.133-.346-.08-.187-.16-.347-.214-.48a.43.43 0 0 0-.106-.187c-.027-.08-.08-.133-.107-.213l-.08-.16-.133-.454c-.027-.053.026-.106.08-.106l1.306.346.187.054.187.053.08.027v-.774c0-.373.293-.693.666-.693.187 0 .347.08.48.213a.642.642 0 0 1 .187.48v1.174l.133.026s.027 0 .027.027c.027.027.08.053.16.107.053.026.107.08.16.133.133.107.267.24.453.373.054.027.08.08.134.107.213.187.453.427.693.693.053.08.133.16.187.214.053.08.133.16.186.24l.24.32c.027.053.08.106.107.16.107.133.187.293.267.426.026.08.08.134.106.214.08.186.16.4.214.586.026.054.026.08.026.134a.453.453 0 0 1 .027.186c.027.214 0 .4-.027.614-.026.08-.053.16-.08.266-.026.08-.053.16-.106.267-.08.16-.16.347-.267.507-.027.053-.08.133-.107.186-.053.054-.08.134-.133.187-.053.08-.107.16-.16.213-.053.08-.107.134-.16.214a2.41 2.41 0 0 1-.24.266l-.16.16-.16.16c-.08.08-.16.16-.213.187l-.134.133c-.026.027-.053.027-.08.027h-1.066v1.36H14.4c.293 0 .587-.107.8-.293.08-.08.427-.374.827-.8.026-.027.026-.027.053-.027l3.653-1.067c.08-.026.134.027.134.107v.8h-.027Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
              View collection on OpenSea
            </a>
            <div className="space-y-1 text-indigo-300/60 font-normal">
              <div>
                Total minted: <span className="text-indigo-300">1,036</span>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-screen-2xl mx-auto px-4 lg:px-8">
          <div className="space-y-20">
            <div className="max-w-3xl mx-auto space-y-4 px-4">
              <h2 className="font-dm text-4xl text-center text-white leading-snug">
                20 artists. 20 unique pieces of&nbsp;art.
                <br />
                Artist names revealed after the&nbsp;mint.
              </h2>
              <p className="text-lg text-center leading-relaxed">
                Once live
                <a
                  className="font-medium text-purple-500 hover:text-white"
                  href="https://opensea.io/collection/proof-collective"
                >
                  PROOF Collective NFT
                </a>
                holders will have the ability to mint one Grail per PROOF
                Collective membership NFT held. During the open minting window,
                the artist identities are hidden for all. Once the minting
                window closes, PROOF will host a live streaming event to reveal
                the artists.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center -m-2 md:-m-4">
              {NFTs.map((item, i) =>
                item.type == "picture" ? (
                  <NFT
                    key={i}
                    i={i}
                    url={item.url}
                    title={item.title}
                    src={item.src}
                    owner={item.owner}
                  />
                ) : (
                  <VideoNFT
                    key={i}
                    i={i}
                    url={item.url}
                    title={item.title}
                    src={item.src}
                    owner={item.owner}
                  />
                )
              )}
            </div>
          </div>
        </div>
        <div className="max-w-screen-2xl mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-x-4 sm:pt-20 max-w-screen-xl mx-auto">
            <div className="flex items-start justify-center md:justify-start px-12 lg:px-20 pb-20">
              <div className="relative">
                <img
                  src="/proof-pass.svg"
                  alt="PROOF Collective membership card"
                  className="rotate-[-16deg] relative"
                />
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    zIndex: "-1",
                    transform: "translate(-50%, -50%)",
                    width: "40%",
                    aspectRatio: "1 / 1",
                    background: "black",
                    filter: "drop-shadow(0 0 80px rgba(117, 0, 208, 1))",
                  }}
                ></div>
                <img
                  src="/proof-pass-shadow.svg"
                  alt=""
                  aria-hidden="true"
                  className="absolute -left-10 -z-1"
                />
              </div>
            </div>
            <div className="space-y-8 md:space-y-12 pb-8 md:pb-12 lg:pb-16 text-center md:text-left">
              <div className="space-y-4">
                <h2 className="text-white text-4xl font-dm">
                  PROOF Collective NFT
                </h2>
                <p className="leading-relaxed">
                  To get in on the mint, you'll need to be holding the PROOF
                  Collective NFT. Apart from the Grails mint, your membership
                  also includes access to our private Discord, early access to
                  the PROOF podcast, in-person events, and other upcoming
                  collaborations created exclusively for PROOF Collective
                  members.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a
                  className="inline-flex py-3 px-6 gap-3 items-center rounded-full font-poppins uppercase text-sm leading-none tracking-wider text-black bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-400"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://opensea.io/collection/proof-collective"
                >
                  <span className="text-2xl">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 0C5.36 0 0 5.36 0 12s5.36 12 12 12 12-5.36 12-12S18.64 0 12 0ZM5.92 12.4l.053-.08 3.12-4.88c.054-.08.16-.053.187.027.533 1.173.96 2.613.773 3.52-.08.373-.346.88-.613 1.333-.027.08-.08.133-.107.187-.026.026-.053.053-.08.053h-3.2c-.133 0-.186-.08-.133-.16Zm13.92 1.68c0 .053-.027.08-.053.107-.24.106-1.067.48-1.414.96-.88 1.226-1.546 2.96-3.04 2.96H9.04c-2.213 0-4-1.814-4-4.027V14c0-.053.053-.107.107-.107H8.64c.08 0 .107.054.107.134-.027.24.026.453.133.666.213.427.64.694 1.093.694h1.734v-1.36H10c-.08 0-.133-.107-.08-.16.027-.027.027-.054.053-.08.16-.24.4-.587.614-.987.16-.267.32-.56.426-.853.027-.054.054-.107.054-.16.026-.107.08-.187.08-.267.026-.08.053-.16.053-.213.053-.24.08-.507.08-.774 0-.106 0-.213-.027-.32 0-.106-.026-.24-.026-.346 0-.107-.027-.214-.054-.32a3.096 3.096 0 0 0-.106-.48l-.027-.054-.08-.32a20.218 20.218 0 0 0-.32-.96c-.053-.133-.08-.24-.133-.346-.08-.187-.16-.347-.214-.48a.43.43 0 0 0-.106-.187c-.027-.08-.08-.133-.107-.213l-.08-.16-.133-.454c-.027-.053.026-.106.08-.106l1.306.346.187.054.187.053.08.027v-.774c0-.373.293-.693.666-.693.187 0 .347.08.48.213a.642.642 0 0 1 .187.48v1.174l.133.026s.027 0 .027.027c.027.027.08.053.16.107.053.026.107.08.16.133.133.107.267.24.453.373.054.027.08.08.134.107.213.187.453.427.693.693.053.08.133.16.187.214.053.08.133.16.186.24l.24.32c.027.053.08.106.107.16.107.133.187.293.267.426.026.08.08.134.106.214.08.186.16.4.214.586.026.054.026.08.026.134a.453.453 0 0 1 .027.186c.027.214 0 .4-.027.614-.026.08-.053.16-.08.266-.026.08-.053.16-.106.267-.08.16-.16.347-.267.507-.027.053-.08.133-.107.186-.053.054-.08.134-.133.187-.053.08-.107.16-.16.213-.053.08-.107.134-.16.214a2.41 2.41 0 0 1-.24.266l-.16.16-.16.16c-.08.08-.16.16-.213.187l-.134.133c-.026.027-.053.027-.08.027h-1.066v1.36H14.4c.293 0 .587-.107.8-.293.08-.08.427-.374.827-.8.026-.027.026-.027.053-.027l3.653-1.067c.08-.026.134.027.134.107v.8h-.027Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                  View on OpenSea
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-screen-2xl mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-white text-4xl font-dm text-center">
              Frequently Asked Questions
            </h2>
            <div className="divide-y divide-gray-900 leading-loose">
              <div className="py-8 space-y-4">
                <h6 className="text-white font-bold text-lg">
                  How do I participate in the mint, and what will they cost?
                </h6>
                <p>
                  To mint, you'll need to hold the PROOF Collective NFT. Apart
                  from the Grails mint, your membership includes access to our
                  private Discord, early access to the PROOF podcast, in-person
                  events, and other upcoming collaborations created exclusively
                  for PROOF Collective members.
                  <strong>Cost to mint will be .05 ETH.</strong>
                </p>
              </div>
              <div className="py-8 space-y-4">
                <h6 className="text-white font-bold text-lg">
                  I'm thinking of buying a PROOF Collective NFT. Is there
                  anything to be aware of?
                </h6>
                <p>
                  Yes. PROOF Collective membership “perks” are tied to our
                  <a
                    className="font-medium text-purple-500 hover:text-white"
                    href="/terms"
                  >
                    Terms of Use
                  </a>
                  . Additionally, if you're interested in minting a Grail, and
                  minting has begun, please check to make sure the PROOF
                  Collective NFT you are purchasing hasn't been used to mint a
                  grail, as there is only one Grails mint per PROOF Collective
                  NFT. PROOF makes no guarantee of NFT eligibility.
                </p>
              </div>
              <div className="py-8 space-y-4">
                <h6 className="text-white font-bold text-lg">
                  How do NFT sales proceeds and artist royalties work?
                </h6>
                <p>
                  100% of primary sales are pooled together and split amongst
                  participating artists. 100% of secondary sale royalties go
                  directly to the artist responsible for the work.
                </p>
              </div>
              <div className="py-8 space-y-4">
                <h6 className="text-white font-bold text-lg">
                  I'm not a PROOF Collective Member is there any other way to
                  purchase a Grail?
                </h6>
                <p>
                  Yes. As Grails members mint the NFTs, undoubtedly, some will
                  be listed for sale on the OpenSea marketplace. You can
                  purchase these before or after the reveal process.
                </p>
              </div>
              <div className="py-8 space-y-4">
                <h6 className="text-white font-bold text-lg">
                  How many Grails will be minted in total?
                </h6>
                <p>
                  There are 1,000 total PROOF Collective membership NFTs, each
                  eligible for one mint. Artists will also be gifted their
                  genesis mint (20 in total) and two additional mints (20*2=40);
                  PROOF will also mint one of each (20) for our collection and
                  gallery. Team
                  <a
                    className="font-medium text-purple-500 hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://linktr.ee/divergence_xyz"
                  >
                    divergence
                  </a>
                  (smart-contract developer) will be gifted two mints for their
                  coding support. So the theoretical maximum would be
                  1000+20+40+20+2 = 1,082 across all artworks. That said, we
                  don't expect every pass holder to mint. Minting numbers of
                  each artwork will vary based on the popularity of that
                  individual artwork.
                </p>
              </div>
              <div className="py-8 space-y-4">
                <h6 className="text-white font-bold text-lg">
                  Which chain will Grails be minted on? What about carbon
                  emissions?
                </h6>
                <p>
                  Grails NFTs will be minted on the Ethereum L1 main chain. We
                  eagerly await the upcoming Ethereum transition to
                  (eco-friendly) Proof of Stake consensus. Until then, PROOF
                  will carbon offset all smart contract deployment and initial
                  Grails mints through
                  <a
                    className="font-medium text-purple-500 hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.aerial.is/nft"
                  >
                    Aerial
                  </a>
                  . An offset certificate will be posted here once minting is
                  complete.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-screen-2xl mx-auto px-4 lg:px-8">
          <Footer />
        </div>
      </div>
    </div>
  );
}
