# Node.js Server Unresponsiveness Due to Long-Running Requests

This repository demonstrates a common issue in Node.js servers where long-running requests can cause the server to hang or become unresponsive.  The example shows a simple HTTP server that simulates a 5-second delay in processing a request.  Without proper handling, this can lead to performance problems and unresponsive servers.

## Problem

The `bug.js` file contains a Node.js HTTP server that introduces a 5-second delay in responding to requests.  In a real-world scenario, this delay could be caused by database operations, external API calls, or complex computations.  Without proper handling, this will cause the server to appear unresponsive to subsequent requests.

## Solution

The `bugSolution.js` file demonstrates how to mitigate this issue using request timeouts and asynchronous operations.  This implementation ensures that long-running requests are handled gracefully, preventing the server from becoming unresponsive.

## How to reproduce

1. Clone this repository.
2. Navigate to the repository's directory in your terminal.
3. Run `node bug.js`.
4. Send multiple requests to the server (e.g., using `curl` or a web browser).  You'll observe the server becoming unresponsive.
5. Run `node bugSolution.js`.
6. Repeat step 4. You'll see the server handles requests efficiently, even with the delay, thanks to the implemented timeout mechanism.
