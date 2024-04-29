interface WalletBalance {
  currency: string;
  amount: number;
  blockchain: string;
  //add missing parameters
}
interface FormattedWalletBalance extends WalletBalance {
  // this could use extends for this interface
  formatted: string;
}

// interface Props extends BoxProps {
// } No need to create Props interface

//getPriority func should outside the main func
function getPriority(blockchain: string): number {
  const priorityMap = {
    Osmosis: 100,
    Ethereum: 50,
    Arbitrum: 30,
    Zilliqa: 20,
    Neo: 20,
  };
  // refactoring logic to look more easy to see
  return priorityMap[blockchain] ?? -99;
}

const WalletPage: React.FC<Props> = (
  props: React.PropsWithChildren<FormattedWalletBalance>
) => {
  // Add properties interface of children and return value
  const { children, ...rest } = props;
  const balances: WalletBalance[] = useWalletBalances();
  // add declare balances type at firstplace
  const prices = usePrices();
  // add prices declare balances type at firstplace

  const sortedBalances = React.useMemo(() => {
    return balances
      .filter((balance) => {
        //No need to declaire balance any more
        const balancePriority = getPriority(balance.blockchain);
        //Property 'blockchain' missing in type 'WalletBalance'
        if (balancePriority > -99) {
          //fix wrong variable
          if (balance.amount <= 0) {
            return true;
          }
        }
        return false;
      })
      .sort((a: WalletBalance, b: WalletBalance) => {
        const leftPriority = getPriority(a.blockchain);
        const rightPriority = getPriority(b.blockchain);
        return rightPriority - leftPriority;
        // Descending order by priority
      })
      .map((balance) => {
        //No need to declaire balance any more
        return {
          ...balance,
          formatted: balance.amount.toFixed(),
        };
      });
  }, [balances, prices]);

  // delete formattedBalances cause its can apply at previous func

  const rows = sortedBalances.map(
    (balance: FormattedWalletBalance, index: number) => {
      //Wrong balance declaire cause this func use sortedBalances(already declaire at the first place)
      const usdValue = prices[balance.currency] * balance.amount;
      return {
        key: index,
        amount: balance.amount,
        usdValue,
        formattedAmount: balance.formatted,
      };
    }
  );
  // should render the components at return statement for a clean separation of concerns between data fetching/processing and UI rendering.
  return (
    <div {...rest}>
      {rows.map((row) => (
        <WalletRow {...row} className={classes.row} key={row.key} />
      ))}
    </div>
  );
};
