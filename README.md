# Express.js Server Unresponsiveness

This repository demonstrates a common issue in Express.js applications where a synchronous operation within a request handler blocks the event loop, causing the server to become unresponsive.  The problem is exacerbated by long-running tasks.

## Bug Description

A POST request to `/data` triggers a computationally intensive loop that runs synchronously. This prevents other requests from being processed until the loop completes, effectively halting the server's responsiveness.

## How to Reproduce

1. Clone this repository.
2. Install dependencies: `npm install express`
3. Run the server: `node bug.js`
4. Send a POST request to `http://localhost:3000/data` using a tool like Postman or curl.  Observe the server's responsiveness to subsequent requests.

## Solution

The solution involves offloading the long-running task to an asynchronous process or using a task queue.  The `bugSolution.js` file demonstrates how to refactor the code to use asynchronous programming using promises or async/await to allow for concurrent request processing.