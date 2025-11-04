---
id: pear-runtime
title: What is Pear Runtime? (Updated)
sidebar_label: What is Pear Runtime? (Updated)
sidebar_position: 1
description: Overview of the Pear Runtime, its responsibilities, and how it enables peer-to-peer, local-first applications.
---

# What is Pear Runtime?

Pear Runtime is the execution layer that enables peer-to-peer, local-first desktop and terminal applications. It provides process management, networking, data replication, and packaging in a single toolchain. Applications built on Pear Runtime operate without central servers. Instead, they communicate directly, synchronize application state through append-only logs, and retain data locally.

Pear Runtime is responsible for:

- Running applications consistently across supported platforms
- Managing peer discovery and encrypted connections
- Replicating application data between peers
- Packaging applications for distribution to end users
- Providing command-line and programmatic interfaces for development

Pear Runtime allows developers to build applications that continue to function without network connectivity. When a peer reconnects, it exchanges new data with other peers and converges to a consistent state.

---

## Runtime Capabilities

Pear Runtime provides the following capabilities:

### Local Execution
Applications run locally on each peer’s device. No hosted servers or central infrastructure are required.

### Peer Discovery and Networking
The runtime discovers peers using a distributed lookup mechanism. Connections use encrypted channels to protect data in transit.

### Data Replication
State is modeled using append-only feeds. Pear Runtime synchronizes missing entries between peers and verifies integrity through cryptographic signatures.

### Packaging and Distribution
Applications can be packaged into reproducible builds. End users can install and run them without additional setup.

### Diagnostics and Logs
Developers can inspect connection status, replication progress, and application events to troubleshoot issues.

---

## Development Flow Using Pear Runtime

A typical development flow includes:

1. Creating a new project or opening an existing one  
2. Running the application locally with development commands  
3. Starting multiple peers to verify replication  
4. Inspecting connections and replication logs  
5. Building and packaging the application for distribution

This workflow ensures that applications behave the same during testing, development, and deployment.

---

## What This Documentation Covers

This section explains how to use the runtime effectively:

- **CLI**  
  Provides commands to create, run, inspect, build, and distribute Pear applications.

- **API**  
  Offers programmatic access to runtime functions for applications that require direct control over feeds, networking, or state.

- **Application Configuration**  
  Describes configuration files, environment settings, permissions, and runtime options.

- **Migration**  
  Explains how to upgrade applications and maintain compatibility across versions.

- **Troubleshooting**  
  Provides guidance for resolving common runtime issues, including connection errors, replication failures, and build problems.

---

## When to Use Pear Runtime

Use Pear Runtime when you need:

- Decentralized applications with no mandatory server requirement
- Local-first data and offline support
- Direct peer-to-peer synchronization
- Verifiable history and deterministic replication
- Portable builds that can be shared without external dependencies

Pear Runtime removes the need to build networking, state synchronization, packaging, and distribution systems manually. It provides a single interface that manages these concerns consistently across platforms.

---

## Next Steps

Continue to the **CLI** section to learn how to create, run, and build applications using the Pear command-line interface.

