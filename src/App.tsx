import './App.css';
import { Link } from '@imtbl/imx-sdk';
import { useEffect, useState } from 'react';
import DiscordProfile, { DiscordUser } from './DiscordProfile';
import styles from './connectBtnStyle.module.css';

function App() {
  const [discordUser, setDiscordUser] = useState({} as DiscordUser);

  async function handleConnectButtonClick() {
    const address = await getImxAddress();
    verifyUser(address, discordUser.id);
  }

  async function getImxAddress(): Promise<string> {
    const link = new Link('https://link.x.immutable.com');
    const { address } = await link.setup({});
    return address;
  }

  async function verifyUser(imxAddress: string, userId: string) {
    await fetch(`https://fynngin.api.stdlib.com/greenpark-nft-verification@dev?user=${userId}&address=${imxAddress}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
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
        })
        .catch(console.error);
    };

    if (accessToken) {
      fetchUsers();
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {discordUser.id 
          ? <>
              <DiscordProfile user={discordUser}/>
              <button className={styles.square_btn} onClick={() => handleConnectButtonClick()}>
                <h2 className={styles.connectBtnText}>Connect</h2>
                <img className={styles.imx_logo} src={`${process.env.PUBLIC_URL}/imx_logo.svg`} alt='ImmutableX Logo'/>
                </button>
            </> 
          : <p>Oops... Something went wrong with the Discord Authentication.</p>
        }
      </header>
    </div>
  );
}

export default App;
