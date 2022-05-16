import Dashboard from "../components/Dashboard/Dashboard";


function Home() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""></link>
      <Dashboard />
    </>
  );
}


export default Home;


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
