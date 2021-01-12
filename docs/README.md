# CheeSwap REST API V2 Documentation



## event configuration
https://cheeseswap.info/dev/v2/tickers

Example

```

curl --request GET --url https://cheeseswap.info/dev/v2/tickers
   
```   
   
## Event Configuration
https://cheeseswap.info/dev/v2/assets

Example

```  

curl --request GET --url https://cheeseswap.info/dev/v2/assets
   
```   
   
## Event Configuration
https://cheeseswap.info/dev/v2/orderbook/{pair}

### Pair name should be: token0Address_token1Address format
likely: https://cheeseswap.info/dev/v2/orderbook/0x793766efcA4CEF8c55EE950E759AD6FF73D49c09_0xaDD8A06fd58761A5047426e160B2B88AD3B9D464

Example

```  

curl --request GET --url https://cheeseswap.info/dev/v2/orderbook/{pair}

```    


## Event Configuration
https://cheeseswap.info/dev/v2/trades/{pair}

### Pair name should be: token0Address_token1Address format
likely: https://cheeseswap.info/dev/v2/trades/0x793766efcA4CEF8c55EE950E759AD6FF73D49c09_0xaDD8A06fd58761A5047426e160B2B88AD3B9D464

Example

```  

curl --request GET --url https://cheeseswap.info/dev/v2/trades/{pair}

```  
   
   
