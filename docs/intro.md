---
sidebar_position: 1
---

# Introduction to Kinetic

## What is Kinetic?

Kinetic is a suite of tools that make it easy to build apps that integrate Solana. 

It provides a consistent and clean abstraction over the Solana SDKs and enhances it with some commonly requested features like paying Solana fees on behalf of the user, tracking and timing the users transactions and send out webhooks.

Kinetic is aimed at developers that want to build crypto-experiences for the users of their app, hiding a lot of the details about the blockchain out of sight for both the developer and the end user.

## Kinetic Platform

The Kinetic platform consists of the following main components:

### [Kinetic API](https://github.com/kin-labs/mogami/tree/dev/apps/api)

The Kinetic API a multi-tenant system managing `Apps` that offer functionality to the SDK and the developer.

An `App` can be configured with a hot wallet used for fee payment, used to pay for the transactions initiated from the SDK.

The Kinetic API tracks account creations and payments, and uses webhooks to verify transactions and notify about events happening in the system. 

### [Kinetic SDK](https://github.com/kin-labs/mogami/tree/dev/libs/sdk)

The Kinetic SDK communicates to the API on behalf of an `App`. 

The SDK handles creating/importing the keypair of the end user and can be used to create an account and initiate transactions sending KIN or other SPL Tokens. 

### [Kinetic Admin](https://github.com/kin-labs/mogami/tree/dev/apps/admin)

The Kinetic Admin is a web-based UI that allows the server admin to create and manage `Apps`.

Features include hot-wallet and user management, and giving insights in the account creations, payments and webhooks.

## Development Tools

For development of the Kinetic platform we built the following components:

### [Kinetic Demo](https://github.com/kin-labs/mogami/tree/dev/apps/demo)

The Kinetic Demo is a web-based UI that is used to develop and test the Kinetic SDK.

### [Kinetic Demo e2e](https://github.com/kin-labs/mogami/tree/dev/apps/demo-e2e)

The end-to-end test of the Kinetic Demo app using Cypress.

### [Kinetic Admin e2e](https://github.com/kin-labs/mogami/tree/dev/apps/admin-e2e)

The end-to-end test of the Kinetic Admin app using Cypress.

### [Kinetic API e2e](https://github.com/kin-labs/mogami/tree/dev/apps/api-e2e)

The end-to-end test of the Kinetic Api app using Jest/Supertest.

### [Kinetic SDK e2e](https://github.com/kin-labs/mogami/tree/dev/apps/sdk-e2e)

The end-to-end test of the Kinetic SDK app using Jest.

### [Kinetic Solana Network](https://github.com/kin-labs/mogami-solana-network)

The Kinetic Solana Network is a Docker-based Solana network that's configured for usage with the Kinetic API in a local or test environment.
