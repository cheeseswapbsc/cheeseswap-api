# CheeSwap REST API documentation



## event configuration
https://cheeseswap.info/dev/v2/tickers

example

```

curl --request GET
   --url https://cheeseswap.info/dev/v2/tickers
   
```   
   
## event configuration
https://cheeseswap.info/dev/v2/assets

example

```  

curl --request GET
   --url https://cheeseswap.info/dev/v2/assets
   
```   
   
## event configuration
https://cheeseswap.info/dev/v2/orderbook/{pair}

### Pair name should be: tone0Address_token1Address format
example: https://cheeseswap.info/dev/v2/orderbook/0x793766efcA4CEF8c55EE950E759AD6FF73D49c09_0xaDD8A06fd58761A5047426e160B2B88AD3B9D464

example

```  

curl --request GET
   --url https://cheeseswap.info/dev/v2/orderbook/{pair}

```    


## event configuration
https://cheeseswap.info/dev/v2/trades/{pair}

### Pair name should be: tone0Address_token1Address format
example: https://cheeseswap.info/dev/v2/trades/0x793766efcA4CEF8c55EE950E759AD6FF73D49c09_0xaDD8A06fd58761A5047426e160B2B88AD3B9D464

example

```  

curl --request GET
   --url https://cheeseswap.info/dev/v2/trades/{pair}

```  
   
   
