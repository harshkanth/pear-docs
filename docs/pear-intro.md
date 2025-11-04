---
id: pear-intro
title: What is Pear?
sidebar_label: Understanding Pear (Updated)
sidebar_position: 1
description: An introduction to Pear, its purpose, architecture, and underlying concepts for building local-first, peer-to-peer applications.
---

# What is Pear?

Pear is a peer-to-peer runtime designed to build local-first desktop and terminal applications without central servers. Each peer communicates directly with other peers over encrypted channels. Application state is stored locally and replicated using append-only logs. This allows applications to operate offline and synchronize changes when connectivity becomes available.

Pear focuses on security, verifiable data replication, and resilience. It allows users to run applications without relying on cloud infrastructure or hosted services.

---

## Overview

Pear allows each device to operate as a peer. Data is stored locally and shared directly with other peers when connectivity exists. Because there is no central authority, applications can continue to function when the internet is unavailable or when service providers are offline.

Pear supports:

- Local-first data storage
- Encrypted peer-to-peer networking
- Deterministic replication of data structures
- Integrity and verifiability of application state
- Portable development and packaging

Pear is designed for autonomy, reliability, and low-infrastructure deployment.

---

## How Pear Works

### Cryptographic Identity
Every peer has a key pair. The public key serves as an identifier. The private key authorizes the peer to publish data and append to logs.

### Peer Discovery
Peers locate each other using a distributed discovery mechanism. No central lookup service is required.

### Encrypted Communication
Peers establish encrypted channels before exchanging data. All network communication is protected from interception or modification.

### Append-Only Replication
Pear uses append-only logs, also called feeds. These logs are signed and hash-linked. Peers exchange missing entries, validate signatures, and update their local state. When a peer reconnects after being offline, it resumes replication and reaches a consistent state with other peers.

### Offline Operation
Because all state is stored locally, applications continue to function without a network connection. When connectivity returns, peers synchronize their updates.

---

## Core Concepts

### Peers
A peer is any device participating in the application network.

### Feeds
A feed is an immutable, append-only sequence of entries. More complex data structures—such as documents or file systems—are built on top of feeds.

### Topics and Discovery Keys
Peers advertise and locate each other using discovery keys derived from identifiers or public keys.

### Replication
Replication is the exchange of new feed entries between peers, with verification of integrity and sequence.

### Security Model
Pear uses cryptographic signing and verification. Only a peer holding the private key for a feed can append new entries.

---

## Architecture

A Pear application includes:

- An application layer containing the user interface or command logic
- A data layer backed by append-only feeds
- A networking layer that handles discovery and encrypted communication
- Runtime tools for development, testing, and packaging

Applications can run on desktop or terminal environments without modification.

---

## When Pear Is Appropriate

Pear is appropriate when:

- The application must continue to function offline
- Users should retain ownership of their data
- Cloud infrastructure is unnecessary or undesirable
- Peer collaboration or direct distribution is required

Pear is not appropriate when an application requires a globally consistent, transactional data store with strong central coordination.

---

## Development Workflow

A typical workflow includes:

- Creating a project using a starter or template
- Running the application locally during development
- Starting multiple instances to verify peer connections
- Building and distributing the application to end users

---

## Data and Replication

Feeds are signed and immutable. Peers exchange only new entries and verify them before applying. Applications may build indexes or compact feeds to improve performance, while maintaining a verifiable history.

---


## Related Documentation

- Installation and environment setup
- Pear Runtime usage and configuration
- Step-by-step desktop application guide
- Connecting two peers
- Hypercore and data structure fundamentals
