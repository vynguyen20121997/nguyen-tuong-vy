interface WalletBalance {
  currency: string;
  amount: number;
}
interface FormattedWalletBalance {
  // this could use extends
  currency: string;
  amount: number;
  formatted: string;
}

interface Props extends BoxProps {
  // Missing properties interface
}

const WalletPage: React.FC<Props> = (props: Props) => {
  // Missing properties interface of children and return value
  const { children, ...rest } = props;
  const balances = useWalletBalances();
  //balances should declare balances type at firstplace
  const prices = usePrices();
  //prices should declare balances type at firstplace

  const getPriority = (blockchain: any): number => {
    //blockchain fail declaire
    switch (blockchain) {
      case "Osmosis":
        return 100;
      case "Ethereum":
        return 50;
      case "Arbitrum":
        return 30;
      case "Zilliqa":
        return 20;
      case "Neo":
        return 20;
      default:
        return -99;
    }
  };

  const sortedBalances = useMemo(() => {
    return balances
      .filter((balance: WalletBalance) => {
        //No need to declaire balance its need to declaire at the top
        const balancePriority = getPriority(balance.blockchain);
        if (lhsPriority > -99) {
          //wrong variable
          if (balance.amount <= 0) {
            return true;
          }
        }
        return false;
      })
      .sort((lhs: WalletBalance, rhs: WalletBalance) => {
        const leftPriority = getPriority(lhs.blockchain);
        const rightPriority = getPriority(rhs.blockchain);
        if (leftPriority > rightPriority) {
          return -1;
        } else if (rightPriority > leftPriority) {
          return 1;
        }
      });
  }, [balances, prices]);

  const formattedBalances = sortedBalances.map((balance: WalletBalance) => {
    //No need to declaire balance its need to declaire at the top
    return {
      ...balance,
      formatted: balance.amount.toFixed(),
    };
  });

  const rows = sortedBalances.map(
    // wrong name of variable
    (balance: FormattedWalletBalance, index: number) => {
      //Wrong balance declaire cause this func use sortedBalances(need to declaire at the first place)
      const usdValue = prices[balance.currency] * balance.amount;
      return (
        <WalletRow
          // should render the components at return statement for a clean separation of concerns between data fetching/processing and UI rendering.

          className={classes.row}
          key={index}
          amount={balance.amount}
          usdValue={usdValue}
          formattedAmount={balance.formatted}
        />
      );
    }
  );

  return <div {...rest}>{rows}</div>;
};
