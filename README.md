## Live Documentation
The deployed documentation is available at:
https://becdeg.com/

# Pear Documentation Project

This project contains a reorganized and structured documentation site for Pear.  
The goal is to provide a clean, developer-friendly reference with clear navigation, simplified learning paths, and faster onboarding for new users.

## Purpose of this Documentation Site

The original documentation was fragmented and difficult to navigate.  
This site was created to reorganize the content into a clear, logical structure so developers can quickly find what they need.  
Information has been separated into sections such as runtime, building blocks, step-by-step guides, tools, troubleshooting, and use cases.  
This reduces confusion, improves maintainability, and makes the documentation suitable for long-term growth.

---

## Installation

```bash
npm install
```
## Run Locally

```bash
npm start
```

This opens the documentation in a local browser with live reload support.

### Build 

```bash
npm run build
```
A production-ready static site will be created inside the build folder.

---
## Documentation Workflow

The workflow is designed to maintain clarity and consistency while allowing the documentation to evolve without disruption. It supports a lightweight authoring experience, continuous improvement, and reliable publishing. By separating writing, review, testing, and deployment, the workflow reduces the risk of broken navigation, formatting errors, and outdated information, which are common issues in SDK environments.

1. Content is created or updated in the docs directory using Markdown. Authors follow the selected style guide and terminology for consistency.
2. The local development server is used to preview the documentation. This step validates navigation, code formatting, headings, and page layout.
3. A production build is generated once the content is reviewed and approved.
4. The static build is deployed to hosting, making the latest version accessible publicly.
5. Feedback is collected from reviewers and users, and improvements are applied in small revision cycles.
6. When major changes or releases occur, documentation can be versioned so developers can reference previous states of the SDK.

This workflow allows fast iteration while ensuring clarity, stability, and long-term maintainability. It aligns with accepted standards for modern SDK documentation.

---

## Justification for the Documentation Structure

The documentation has been reorganized to present information in a clear and task-focused hierarchy. 
The earlier content was fragmented and difficult to navigate, which increased the effort required for new developers to understand the system. 
The revised structure separates topics into logical categories that follow a natural learning progression. 
Introductory material appears first so that users can acquire fundamental understanding before moving on to detailed information about the Pear Runtime, including the command-line interface, the application programming interface, configuration, and troubleshooting. 
This organization allows developers to locate runtime information without searching through unrelated content.

Practical learning is supported by a dedicated Step-by-Step Guide, which allows users to build and test projects in a controlled sequence.
Technical reference material, including storage, networking, encryption, and core modules, is grouped together so that developers can quickly consult the specific components they are working with. 
Workflow instructions are placed in a separate How-To section, and tools are documented independently to make focused tasks easier to locate. Real-world use cases demonstrate how Pear operates in different environments, which supports learning through practical examples and encourages best practices.

This structure improves readability, reduces cognitive load, and supports long-term maintenance. 
Each section has a defined purpose and follows conventions commonly used in professional developer documentation. 
The result is a user-centered information architecture that enhances discoverability and strengthens the overall learning experience.

## Documentation Structure

- Homepage
- What's New
- Introduction to Document
- Getting Started

- Pear Runtime
  - Pear Runtime (Intro)
  - CLI
  - API
  - Application Configuration
  - Migration
  - Troubleshooting

- Step-by-Step Guide
  - Make a Pear App
  - Start a Desktop Project
    - Start a Desktop Project
    - Verification
    - Reload
    - Configuration

- Bare Runtime
  - Overview
  - API
  - Compatibility
  - Troubleshooting

- Building Block for Pear
  - Core
    - Autobase
    - Hyperbee
    - Hypercore
  - Encryption and Protocol
    - Compact Encoding
    - Protomux
    - Secretstream
  - Networking
    - HyperDHT
    - Hyperswarm
  - Storage
    - Corestore
    - Hyperdrive
    - Localdrive
    - Mirrordrive

- How-To
  - Connect Two Pears

- Tools
  - Drives
  - Hyperbeam
  - Hypershell
  - Hyperssh
  - Hypertele

- Use Cases
  - Bare on Mobile
  - React App on Desktop
  
- FAQs

