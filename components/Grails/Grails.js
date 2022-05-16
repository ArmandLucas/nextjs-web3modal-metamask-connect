export const NFT = ({ i, url, src, title, owner }) => {
  return (
    <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 2xl:w-1/6 p-2 md:p-4 flex flex-col items-center gap-2">
      <a
        className="w-full aspect-square transition duration-500 hover:scale-105 flex flex-auto items-center justify-center"
        href={url}
        style={{ position: "relative" }}
      >
        <img
          src={src}
          alt={title}
          title={title}
          className="w-full aspect-square object-contain"
        />
        <div
          className="erd_scroll_detection_container erd_scroll_detection_container_animation_active"
          style={{
            visibility: "hidden",
            display: "inline",
            width: "0px",
            height: "0px",
            zIndex: "-1",
            overflow: "hidden",
            margin: "0px",
            padding: "0px",
          }}
        >
          <div
            dir="ltr"
            className="erd_scroll_detection_container"
            style={{
              position: "absolute",
              flex: "0 0 auto",
              overflow: "hidden",
              zIndex: "-1",
              visibility: "hidden",
              width: "100%",
              height: "100%",
              left: "0px",
              top: "0px",
            }}
          >
            <div
              className="erd_scroll_detection_container"
              style={{
                position: "absolute",
                flex: "0 0 auto",
                overflow: "hidden",
                zIndex: "-1",
                visibility: "hidden",
                inset: "-18px -17px -17px -18px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  flex: "0 0 auto",
                  overflow: "scroll",
                  zIndex: "-1",
                  visibility: "hidden",
                  width: "100%",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: "0px",
                    top: "0px",
                    width: "280px",
                    height: "280px",
                  }}
                ></div>
              </div>
              <div
                style={{
                  position: "absolute",
                  flex: "0 0 auto",
                  overflow: "scroll",
                  zIndex: "-1",
                  visibility: "hidden",
                  width: "100%",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    width: "200%",
                    height: "200%",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </a>
      <div className="flex flex-col gap-1 items-center text-center">
        <div className="text-white font-normal leading-tight">
          {i}. {title}
        </div>
        <div className="text-xs font-normal">{owner}</div>
      </div>
    </div>
  );
};

export const VideoNFT = ({ i, url, src, title, owner }) => {
  return (
    <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 2xl:w-1/6 p-2 md:p-4 flex flex-col items-center gap-2">
      <a
        className="w-full aspect-square transition duration-500 hover:scale-105 flex flex-auto items-center justify-center"
        href={url}
        style={{ position: "relative" }}
      >
        <video
          title={title}
          className="w-full aspect-square object-contain"
          autoPlay=""
          playsInline=""
          loop=""
        >
          <source src={src} type="video/mp4" />
        </video>
        <div
          className="erd_scroll_detection_container erd_scroll_detection_container_animation_active"
          style={{
            visibility: "hidden",
            display: "inline",
            width: "0px",
            height: "0px",
            zIndex: "-1",
            overflow: "hidden",
            margin: "0px",
            padding: "0px",
          }}
        >
          <div
            dir="ltr"
            className="erd_scroll_detection_container"
            style={{
              position: "absolute",
              flex: "0 0 auto",
              overflow: "hidden",
              zIndex: "-1",
              visibility: "hidden",
              width: "100%",
              height: "100%",
              left: "0px",
              top: "0px",
            }}
          >
            <div
              className="erd_scroll_detection_container"
              style={{
                position: "absolute",
                flex: "0 0 auto",
                overflow: "hidden",
                zIndex: "-1",
                visibility: "hidden",
                inset: "-18px -17px -17px -18px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  flex: "0 0 auto",
                  overflow: "scroll",
                  zIndex: "-1",
                  visibility: "hidden",
                  width: "100%",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: "0px",
                    top: "0px",
                    width: "280px",
                    height: "280px",
                  }}
                ></div>
              </div>
              <div
                style={{
                  position: "absolute",
                  flex: "0 0 auto",
                  overflow: "scroll",
                  zIndex: "-1",
                  visibility: "hidden",
                  width: "100%",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    width: "200%",
                    height: "200%",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </a>
      <div className="flex flex-col gap-1 items-center text-center">
        <div className="text-white font-normal leading-tight">
          {i}. {title}
        </div>
        <div className="text-xs font-normal">{owner}</div>
      </div>
    </div>
  );
};

export const Grails = () => {
  return (
    <div className="relative">
      <img
        src="/grails/card-side.svg"
        alt="Grails logo"
        className="w-full absolute mt-[6%]"
        style={{
          transform:
            "translateX(-58%) translateY(12%) rotate(-12deg) translateZ(0px)",
        }}
      />
      <img
        src="/grails/card-side.svg"
        alt="Grails logo"
        className="w-full absolute mt-[6%]"
        style={{
          transform:
            "translateX(58%) translateY(12%) rotate(12deg) translateZ(0px)",
        }}
      />
      <img
        src="/grails/card-center.svg"
        alt="Grails logo"
        className="w-full relative"
      />
    </div>
  );
};

export const NFTs = [
  {
    url: "/grails/01",
    src: "https://proofcollective.imgix.net/grails/art/01.jpg?w=300&amp;h=300&amp;dpr=2&amp;fm=jpg",
    title: "What do you “B”",
    owner: "Gary Vaynerchuk",
    type: "picture",
  },
  {
    url: "/grails/02",
    src: "https://proofcollective.imgix.net/grails/art/02.gif?w=300&amp;h=300&amp;dpr=2&amp;fm=mp4",
    title: "MIRROR, MIRROR.",
    owner: "Lucréce",
    type: "video",
  },
  {
    url: "/grails/03",
    src: "https://proofcollective.imgix.net/grails/art/03.png?w=300&amp;h=300&amp;dpr=2&amp;fm=jpg",
    title: "ON THE SHOULDERS OF",
    owner: "Alexis Ohanian",
    type: "picture",
  },
  {
    url: "/grails/04",
    src: "https://proofcollective.imgix.net/grails/art/04.gif?w=300&amp;h=300&amp;dpr=2&amp;fm=mp4",
    title: "I've got your cat, please follow&nbsp;me.",
    owner: "Kiszkiloszki",
    type: "video",
  },
  {
    url: "/grails/05",
    src: "https://proofcollective.imgix.net/grails/art/05.gif?w=300&amp;h=300&amp;dpr=2&amp;fm=mp4",
    title: "Second&nbsp;Moon",
    owner: "Nicolas Sassoon",
    type: "video",
  },
  {
    url: "/grails/06",
    src: "https://proofcollective.imgix.net/grails/art/06.png?w=300&amp;h=300&amp;dpr=2&amp;fm=jpg",
    title: "how many times can a heart be broken?",
    owner: "yosnier",
    type: "picture",
  },
  {
    url: "/grails/07",
    src: "https://proofcollective.imgix.net/grails/art/07.gif?w=300&amp;h=300&amp;dpr=2&amp;fm=mp4",
    title: "Choices",
    owner: "What Is Real?",
    type: "video",
  },
  {
    url: "/grails/08",
    src: "https://proofcollective.imgix.net/grails/art/08-thumbnail.mp4?w=300&amp;h=300&amp;dpr=2&amp;fm=mp4",
    title: "Renewal",
    owner: "Marlo",
    type: "video",
  },
  {
    url: "/grails/09",
    src: "https://proofcollective.imgix.net/grails/art/09-thumbnail.mp4?w=300&amp;h=300&amp;dpr=2&amp;fm=mp4",
    title: "euphoria",
    owner: "Rachel Ryle",
    type: "video",
  },
  {
    url: "/grails/10",
    src: "https://proofcollective.imgix.net/grails/art/10.gif?w=300&amp;h=300&amp;dpr=2&amp;fm=mp4",
    title: "Iteration 0",
    owner: "grelysian",
    type: "video",
  },
  {
    url: "/grails/11",
    src: "https://proofcollective.imgix.net/grails/art/11.png?w=300&amp;h=300&amp;dpr=2&amp;fm=jpg",
    title: "Protoglyph",
    owner: "Larva Labs",
    type: "picture",
  },
  {
    url: "/grails/12",
    src: "https://proofcollective.imgix.net/grails/art/12.gif?w=300&amp;h=300&amp;dpr=2&amp;fm=mp4",
    title: "Dream Loaf",
    owner: "Sarah Zucker",
    type: "video",
  },
  {
    url: "/grails/13",
    src: "https://proofcollective.imgix.net/grails/art/13-thumbnail.mp4?w=300&amp;h=300&amp;dpr=2&amp;fm=mp4",
    title: "WAGMI",
    owner: "Hackatao",
    type: "video",
  },
  {
    url: "/grails/14",
    src: "https://proofcollective.imgix.net/grails/art/14-thumbnail.mp4?w=300&amp;h=300&amp;dpr=2&amp;fm=mp4",
    title: "In My Head",
    owner: "Mike Shinoda",
    type: "video",
  },
  {
    url: "/grails/15",
    src: "https://proofcollective.imgix.net/grails/art/15-thumbnail.mp4?w=300&amp;h=300&amp;dpr=2&amp;fm=mp4",
    title: "Ixian No-Ships",
    owner: "IX Shells",
    type: "video",
  },
  {
    url: "/grails/16",
    src: "https://proofcollective.imgix.net/grails/art/16.png?w=300&amp;h=300&amp;dpr=2&amp;fm=jpg",
    title: "c.u.l.t.",
    owner: "Claire Silver",
    type: "picture",
  },
  {
    url: "/grails/17",
    src: "https://proofcollective.imgix.net/grails/art/17.jpg?w=300&amp;h=300&amp;dpr=2&amp;fm=jpg",
    title: "How to Start a War",
    owner: "Tim Ferriss",
    type: "picture",
  },
  {
    url: "/grails/18",
    src: "https://proofcollective.imgix.net/grails/art/18.jpg?w=300&amp;h=300&amp;dpr=2&amp;fm=jpg",
    title: "report",
    owner: "Dmitri Cherniak",
    type: "picture",
  },
  {
    url: "/grails/19",
    src: "https://proofcollective.imgix.net/grails/art/19.jpg?w=300&amp;h=300&amp;dpr=2&amp;fm=jpg",
    title: "Wall",
    owner: "Tyler Hobbs",
    type: "picture",
  },
  {
    url: "/grails/20",
    src: "https://proofcollective.imgix.net/grails/art/20.gif?w=300&amp;h=300&amp;dpr=2&amp;fm=mp4",
    title: "Wall",
    owner: "Gremplin",
    type: "video",
  },
];

export const Card = () => {
  return (
    <div className="w-2/3 max-w-[320px] mx-auto">
      <div className="relative z-1 pt-24">
        <div
          className="absolute inset-0 mx-[-240%] mt-[-180%] mb-[-145%] bg-no-repeat bg-contain bg-top"
          style={{ backgroundImage: "url('/grails/bg.svg')" }}
        ></div>
        <Grails />
      </div>
      <img
        src="/grails/brand.svg"
        alt="Grails logo"
        className="w-full relative mt-6"
      ></img>
      <div className="absolute top-16 inset-x-0 text-center font-dm uppercase text-white text-xs tracking-[0.6em]">
        PROOF Presents
      </div>
    </div>
  );
};
