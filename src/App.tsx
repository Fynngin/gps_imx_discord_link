import './App.css';
import { Link } from '@imtbl/imx-sdk';
import { useEffect, useState } from 'react';
import DiscordProfile, { DiscordUser } from './DiscordProfile';
import styles from './connectBtnStyle.module.css';

enum PageStatus {
  Initializing,
  DiscordError,
  DiscordConnected,
  ImxError,
  ImxConnected,
  RoleGrantingError,
  RoleGranted
}

function App() {
  const [discordUser, setDiscordUser] = useState({} as DiscordUser);
  const [pageStatus, setPageStatus] = useState(PageStatus.Initializing);

  async function handleConnectButtonClick() {
    startImxProcess().then(({address}) => {
      setPageStatus(PageStatus.ImxConnected);
      verifyUser(address, discordUser.id);
    }).catch(() => {
      setPageStatus(PageStatus.ImxError);
    })

  }

  function startImxProcess(): Promise<{address: string, starkPublicKey: string}> {
    const link = new Link('https://link.x.immutable.com');
    return link.setup({});
  }

  async function verifyUser(imxAddress: string, userId: string) {
    await fetch(`https://fynngin.api.stdlib.com/greenpark-nft-verification@dev/nft-role-grant?user=${userId}&address=${imxAddress}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(() => {
      setPageStatus(PageStatus.RoleGranted);
    }).catch(() => {
      setPageStatus(PageStatus.RoleGrantingError);
    })
  }


  useEffect(() => {
    // parse access_token and token_type that were inserted by Discord into redirect URL
    const fragment = new URLSearchParams(window.location.hash.slice(1));
    const [accessToken, tokenType] = [fragment.get('access_token'), fragment.get('token_type')];
    const fetchUsers = () => {
        fetch('https://discord.com/api/users/@me', {
          headers: {
            authorization: `${tokenType} ${accessToken}`,
          },
        })
        .then(result => result.json())
        .then(response => {
          setDiscordUser(response);
          setPageStatus(PageStatus.DiscordConnected)
        })
        .catch(() => {
          setPageStatus(PageStatus.DiscordError);
          console.error()
        });
    };

    if (accessToken) {
      fetchUsers();
    } else {
      setPageStatus(PageStatus.DiscordError);
    }
  }, []);

  function switchContents() {
    switch (pageStatus) {
      case PageStatus.Initializing:
        return(<p>Getting discord information...</p>)
      case PageStatus.DiscordError:
        return(<p>There was an error linking your Discord account. Please try again.</p>)
      case PageStatus.DiscordConnected:
        return(
          <>
            <DiscordProfile user={discordUser}/>
            <button className={styles.square_btn} onClick={() => handleConnectButtonClick()}>
              <h2 className={styles.connectBtnText}>Connect</h2>
              <img className={styles.imx_logo} src={`${process.env.PUBLIC_URL}/imx_logo.svg`} alt='ImmutableX Logo'/>
            </button>
          </>
        )
      case PageStatus.ImxError:
        return(<p>There was an error linking your Immutable Wallet. Please try again.</p>)
      case PageStatus.ImxConnected:
        return(<p>Immutable Wallet connected! Checking assets and granting the role...</p>)
      case PageStatus.RoleGrantingError:
        return(<p>Couldn't grant the Discord Role. Do you own a Greenpark NFT?</p>)
      case PageStatus.RoleGranted:
        return(<p>Role successfully granted! Enjoy :)</p>)
      default:
        return(<p>An unknown error occured. Please try again.</p>);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        {switchContents()}
      </header>
    </div>
  );
}

export default App;
