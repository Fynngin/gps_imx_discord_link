import './App.css';
import { Link, ImmutableXClient } from '@imtbl/imx-sdk';
import { useState } from 'react';

function App() {
  async function sdkExample() {
    const imxAddress = '0x4764bc088a27f490353e8cf1558ba02fdc418c65';
    const link = new Link('https://link.x.immutable.com');

    // Register user, you can persist address to local storage etc.
    const { address } = await link.setup({});
    console.log(address);
    const client = await ImmutableXClient.build({ publicApiUrl: 'https://api.x.immutable.com/v1' });
    const assets = await client.getAssets({
            user: address,
            collection: imxAddress
    });
    console.log(assets);
    setAssets(assets.result);
  }

  const [assets, setAssets] = useState([] as any);

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={sdkExample}>TEST</button>
        <p>You own: {assets.length} items.</p>
      </header>
    </div>
  );
}

export default App;
