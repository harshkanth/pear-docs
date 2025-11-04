---
id: connect-two-peers
title: Connect Two Peers (Updated)
sidebar_label: Connect Two Peers (Updated)
sidebar_position: 1
---

# Connect Two Peers

This guide explains how two Pear applications can communicate directly using public-key addressing. It also demonstrates how to build a basic command-line chat application using the `HyperDHT` networking stack.

## Overview

Pear applications do not rely on centralized servers. Instead, they connect directly to each other over encrypted peer-to-peer channels. To make this possible, Pear uses **HyperDHT**, a distributed, peer-to-peer lookup network.

HyperDHT enables the following:

- Peers are identified by a **public key**, not an IP address.
- A peer’s public key is stored in a **distributed hash table (DHT)**.
- When a client wants to connect to a peer, it looks up that public key in the DHT and retrieves the best available connection route.

This allows connections across different networks and changing IP addresses, including mobile and home Wi-Fi networks.

### NAT traversal and hole-punching

HyperDHT attempts to establish direct connectivity between peers using multiple hole-punching techniques. When successful, communication happens directly between the two peers.

However, if both peers are behind restrictive or randomizing NATs, direct connectivity may not succeed. In this case:

- The connection must be relayed through a third peer.
- HyperDHT does not relay by default.
- Some Pear applications implement their own relay system. For example, in Keet calls, other participants automatically act as relays, improving connectivity as more peers join.

---

## Demo: Connect Two Terminal Applications

This demonstration implements a simple chat system between two terminal applications using HyperDHT:

- A **server application** generates a key pair and listens for connections.
- The **client application** connects to the server using the server’s public key.

After connected, text typed into either terminal flows between both peers.

The `server-app` will create a key pair and then start a server that will listen on the generated key pair. The public key is logged into the console. Copy it for instantiating the client.

1. Create the `server-app` project with the following commands:


```bash
mkdir server-app
cd server-app
pear init -y -t terminal
npm install hyperdht b4a bare-process

 ```

2. Replace the content of the `server-app/index.js` file to the following:

```javascript
import DHT from 'hyperdht'
import b4a from 'b4a'
import process from 'bare-process'

const dht = new DHT()

// This keypair is the peer identifier in the DHT
const keyPair = DHT.keyPair()

const server = dht.createServer(conn => {
  console.log('got connection!')
  process.stdin.pipe(conn).pipe(process.stdout)
})

server.listen(keyPair).then(() => {
  console.log('listening on:', b4a.toString(keyPair.publicKey, 'hex'))
})

// Unnannounce the public key before exiting the process
// (This is not a requirement, but it helps avoid DHT pollution)
Pear.teardown(() => server.close())
```

3. Open and run the `server-app` with `pear run --dev .`.

The terminal The terminal prints a public key. Copy this key for use by the client.

4. In another terminal create the `client-app` project with the following commands:

```bash 
mkdir client-app
cd client-app
pear init -y -t terminal
npm install hyperdht b4a bare-process
```

5. Replace the `client-app/index.js` file with to the following:

```javascript
import DHT from 'hyperdht'
import b4a from 'b4a'
import process from 'bare-process'

const key = Pear.config.args[0]
if (!key) throw new Error('provide a key')

console.log('Connecting to:', key)
const publicKey = b4a.from(key, 'hex')

const dht = new DHT()
const conn = dht.connect(publicKey)
conn.once('open', () => console.log('got connection!'))

process.stdin.pipe(conn).pipe(process.stdout)
```

6. Start the client and provide the server key:

```bash 
pear run --dev . <SUPPLY KEY HERE>
```

The `client-app` will spin up a client, and the public key copied earlier must be supplied as a command line argument for connecting to the server. The client process will log `got connection` into the console when it connects to the server.

After it's connected, try typing in both terminals.
