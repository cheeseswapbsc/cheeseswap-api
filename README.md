# CheeseSwap REST API  V2



## Event Configuration [TVL: Total Liquidity ]

[https://data.cheeseswap.app/totalliquidity](https://data.cheeseswap.app/totalliquidity)

example

```text

curl --request GET    --url https://data.cheeseswap.app/totalliquidity

```



## Event Configuration [ Summary ]

[https://data.cheeseswap.app/summary](https://data.cheeseswap.app/summary)

example

```text

curl --request GET    --url https://data.cheeseswap.app/summary

```



## Event Configuration [ Tickers ]

[https://data.cheeseswap.app/tickers](https://data.cheeseswap.app/tickers)

example

```text

curl --request GET    --url https://data.cheeseswap.app/tickers

```


## Event Configuration [ Assets ]

[https://data.cheeseswap.app/assets](https://data.cheeseswap.app/assets)

example

```text

curl --request GET   --url https://data.cheeseswap.app/assets

```


## Event Configuration [ Pair ]

[https://data.cheeseswap.app/orderbook/{pair}](https://data.cheeseswap.app/orderbook/{pair})

### Pair name should be: tone0Address0_token1Address format

example: [https://data.cheeseswap.app/orderbook/0x793766efcA4CEF8c55EE950E759AD6FF73D49c09\_0xaDD8A06fd58761A5047426e160B2B88AD3B9D464](https://data.cheeseswap.app/orderbook/0x793766efcA4CEF8c55EE950E759AD6FF73D49c09_0xaDD8A06fd58761A5047426e160B2B88AD3B9D464)

example

```text

curl --request GET    --url https://data.cheeseswap.app/orderbook/{pair}

```


## Event Configuration [ Pair Trade ]

[https://data.cheeseswap.app/trades/{pair}](https://data.cheeseswap.app/trades/{pair})

### Pair name should be: tone0Address0_token1Address format

example: [https://data.cheeseswap.app/trades/0x793766efcA4CEF8c55EE950E759AD6FF73D49c09\_0xaDD8A06fd58761A5047426e160B2B88AD3B9D464](https://data.cheeseswap.app/trades/0x793766efcA4CEF8c55EE950E759AD6FF73D49c09_0xaDD8A06fd58761A5047426e160B2B88AD3B9D464)

example

```text

curl --request GET    --url https://data.cheeseswap.app/trades/{pair}

```

