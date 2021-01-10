import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import fetch from 'node-fetch'

export default new ApolloClient({
  link: new HttpLink({
    fetch,
    uri: 'https://graph.chipsfryer.world/subgraphs/name/blockartist/cheesegraph3'
  }),
  cache: new InMemoryCache()
})
