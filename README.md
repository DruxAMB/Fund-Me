## Fund Me
is a [Next.js](https://nextjs.org) project bootstrapped with [`create-onchain`]().


## Getting Started

First, install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

<br />

## Setup

To ensure all components work seamlessly, set the following environment variables in your `.env` file using `.env.local.example` as a reference.

You can find the `API key` and `projectID` on the [Coinbase Developer Portal's OnchainKit page](https://portal.cdp.coinbase.com/products/onchainkit). If you don't have an account, you will need to create one. 

```sh
NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME=Fund-Me
NEXT_PUBLIC_ONCHAINKIT_WALLET_CONFIG=smartWalletOnly

# Check https://portal.cdp.coinbase.com/products/onchainkit
NEXT_PUBLIC_CDP_API_KEY="GET_FROM_COINBASE_DEVELOPER_PLATFORM"

# Check https://portal.cdp.coinbase.com/projects
NEXT_PUBLIC_CDP_PROJECT_ID="GET_FROM_COINBASE_DEVELOPER_PLATFORM"

```
<br />

### Walkthrough

1. **Get your Project ID**: Obtain your Project ID from the Coinbase Developer Platform Dashboard.
2. **Add your Project ID to your `.env` file**:
   ```sh
   NEXT_PUBLIC_ONCHAINKIT_API_KEY=YOUR_PUBLIC_API_KEY
   NEXT_PUBLIC_CDP_PROJECT_ID=YOUR_CDP_PROJECT_ID
   ```
3. **Start Recieving Funds**: You can start recieving funds on your desired wallet address by modifying `app/components/button.tsx` LINE `24`.
4. **Add Your Wallet Address**: Change the `address` constant to your address `const address = "YOUR_ADDRESS_HERE"` then you can host and start recieving funds from anywhere. 

Next, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Next, visit `app/components/button.tsx`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Customizing the Funding Experience

You can customize the Coinbase Onramp experience by providing your own Onramp URL to the `<FundButton />` component. Use the `getOnrampBuyUrl` utility to generate a tailored Coinbase Onramp URL.

```jsx
import { FundButton, getOnrampBuyUrl } from '@coinbase/onchainkit/fund';
import { useAccount } from 'wagmi';

const projectId = 'YOUR_CDP_PROJECT_ID';
const { address } = useAccount();

const onrampBuyUrl = getOnrampBuyUrl({
  projectId,
  addresses: { address: ['base'] },
  assets: ['USDC'],
  presetFiatAmount: 20,
  fiatCurrency: 'USD'
});

<FundButton fundingUrl={onrampBuyUrl} />
```

You can choose to have the funding URL open in a popup or a new tab using the `openIn` prop.

```jsx
<FundButton openIn={"tab"} />
```

### Customizing the Fund Button

Override the text on the fund button using the `text` prop, and hide the icon with the `hideIcon` prop.

```jsx
<FundButton text="Onramp" hideIcon={true} />
```

Hide the text with the `hideText` prop.

```jsx
<FundButton hideText={true} />
```

See `FundButtonReact` for the full list of customization options.

<br />


## Learn More

To learn more about OnchainKit, see our [documentation](https://docs.onchainkit.com).

To learn more about Next.js, see the [Next.js documentation](https://nextjs.org/docs).

## Need more help?

If you have any questions or need help, feel free to reach out to me on [My Channel](https://t.me/druxambchannel).