import './App.css';
import { Link, ImmutableXClient } from '@imtbl/imx-sdk';
import { useEffect, useState } from 'react';

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
          // response format 
          /*
          {
                "id": "<user_id>",
                "username": "Poopeye",
                "avatar": "3118e64af30fc703b9bf3328d156155c",
                ...
            }
          */
          // user as avatar URL: `https://cdn.discordapp.com/avatars/${discordUser.id}/${discordUser.avatar}.png`
          setDiscordUser(response);
          console.log(discordUser);
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
        {/* <button onClick={sdkExample}>TEST</button>
        <p>You own: {assets.length} items.</p> */}
      </header>
    </div>
  );
}

export default App;
