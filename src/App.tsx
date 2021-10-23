import './App.css';
import { Link, ImmutableXClient } from '@imtbl/imx-sdk';
import { useEffect, useState } from 'react';
import DiscordProfile from './DiscordProfile';

function App() {
  // async function sdkExample() {
  //   const imxAddress = '0x4764bc088a27f490353e8cf1558ba02fdc418c65';
  //   const link = new Link('https://link.x.immutable.com');

  //   // Register user, you can persist address to local storage etc.
  //   const { address } = await link.setup({});
  //   console.log(address);
  //   const client = await ImmutableXClient.build({ publicApiUrl: 'https://api.x.immutable.com/v1' });
  //   const assets = await client.getAssets({
  //           user: address,
  //           collection: imxAddress
  //   });
  //   console.log(assets);
  //   setAssets(assets.result);
  // }

  // const [assets, setAssets] = useState([] as any);

  const [discordUser, setDiscordUser] = useState();

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
          console.log(response);
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
      </header>
      {discordUser ? <DiscordProfile user={discordUser}/> : <p>Oops... Something went wrong.</p>}
    </div>
  );
}

export default App;
