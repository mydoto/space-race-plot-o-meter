import { blockNumber, blockHash, networkTimestamp, totalIssuance } from '@autonomys/auto-consensus';
import { activate } from '@autonomys/auto-utils';

(async () => {
  const api = await activate({ networkId: 'mainnet' });

  const totalIssued = await totalIssuance(api);


  console.log(`totalIssued: ${totalIssued}`);

  await api.disconnect();
})();