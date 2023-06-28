## Turborepo + NextJS apps + Vercel + Reverse Proxy Starterkit

This Turborepo contains 4 NextJS apps - proxy, www, api and route, each responsible for a single route and their subroutes and can be deployed in isolation in Vercel.

These are the projects and the routes they serve.

- www - /
- route - /route
- api - /api
- proxy - Reverse proxy

The proxy is a reverse-proxy responsible for routing the request to the appropriate microservice. The base domain when pointed to this, the routes point to the respective projects.

<img src='https://raw.githubusercontent.com/sreeramofficial/turborepo-starter/main/idea.png'/>

Inspired from: https://medium.sreeram.io/the-toughest-engineering-challenge-i-have-faced-8fc415167e20?sk=a1d9e08957d1f14b26175bd292771ff0
