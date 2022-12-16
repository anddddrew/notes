---
title: Diamond - An amateur blockchain
author: Andrew Nijmeh
datetime: 2022-12-16T10:30:25-05:00
slug: diamond-amateur-blockchain
featured: false
draft: false
tags:
  - blockchain
  - school
description: "This is just a small post for what I built for my end of semester computer science project"
---

# Diamond

Yo! This is a simple document regarding what I built for my computer science end of semester project

## Why

I'm already familiar with blockchain, but I wanted to build my own blockchain sometime for fun. I realized this was the perfect opportunity to build this.

## Tech

- Fiber (web server)
   - has api routes for fetching block data, transactions and more
- Go (programming language used)
   - simple and minimal programming language, i have been loving it so far.
- React
   - this is a simple frontend where you can view the transactions, and other data on the blockchain

## How

Here is a small breakdown of the main stuff that consists in this project:

- Block (a block contains a list of transaction data, a timestamp and a cryptographic hash of the previous block (this is encrypted), multiple of these blocks form a `blockchain`)
- Blockchain (the blockchain contains all the blocks in one chain)
- AddBlock (This function adds a block to the `blockchain`
- createGenesisBlock (Each blockchain has a `genesis` block, this means it is the first block to ever be created on the blockchain)

*Note: Any blocks created on the blockchain cannot be deleted or removed from the network of nodes (computers), this is what makes the blockchain decentralized. Additionally, there is no centralized member (eg a banker) that controls the network. It is a peer-to-peer network.*

## Fun fact

In the early days of Bitcoin, a Florida man negotiated to pay 10,000 Bitcoin (Which is now worth over 170 thousand dollars USD) for two Papa John's pizzas.

## Resources

Here are some great resources if you would like to know more about Bitcoin or blockchain.

- [https://bitcoin.org/bitcoin.pdf](https://bitcoin.org/bitcoin.pdf)
- [https://www.bitcoin.com/get-started/what-is-bitcoin/](https://www.bitcoin.com/get-started/what-is-bitcoin/)
- [https://bitcoin.org/en/getting-started](https://bitcoin.org/en/getting-started)
- [https://www.investopedia.com/terms/b/bitcoin.asp](https://www.investopedia.com/terms/b/bitcoin.asp)

## Architecture

----

![image.png](https://res.craft.do/user/full/771e4d25-45f1-1b93-79cf-e5f2ff1b9cf8/doc/8D85F7C8-9BDF-4878-B70F-C80AC6F00D6B/09c9d257-fa0b-436a-8108-4e2c24ef9b52)

*Note: this is not a full fledged blockchain so it is technically not decentralized, im planning to work on this more sometime in the future to include more features (wallet creation, a command line interface and some other stuff).* 
