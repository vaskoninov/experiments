"use strict";
import fp from "fastify-plugin";
import { PassThrough } from "node:stream";

// import { promisify } from "node:util";

// // Promisify setTimeout
// const timeout = promisify(setTimeout);

// Mock data
const orders = {
    A1: { total: 3 },
    A2: { total: 7 },
    B1: { total: 101 },
};

// Map category to ID prefix
const catToPrefix = {
    electronics: "A",
    confectionery: "B",
};

// Simulate realtime orders
// async function* realtimeOrdersSimulator() {
//     const ids = Object.keys(orders);
//     while (true) {
//         const delta = Math.floor(Math.random() * 7) + 1;
//         const id = ids[Math.floor(Math.random() * ids.length)];
//         orders[id].total += delta;
//         const { total } = orders[id];
//         yield JSON.stringify({ id, total });
//         await timeout(1500);
//     }
// }

// Create a stream of orders
const orderStream = new PassThrough({ objectMode: true });

// Simulate real-time orders
async function* realtimeOrdersSimulator() {
    for await (const { id, total } of orderStream) {
        yield JSON.stringify({ id, total });
    }
}

// Return current orders
function* currentOrders(category) {
    const idPrefix = catToPrefix[category];
    if (!idPrefix) return;
    const ids = Object.keys(orders).filter((id) => id[0] === idPrefix);
    for (const id of ids) {
        yield JSON.stringify({ id, ...orders[id] });
    }
}

// Calculate next ID
const calculateID = (idPrefix, data) => {
    const sorted = [...new Set(data.map(({ id }) => id))];
    const next = Number(sorted.pop().slice(1)) + 1;
    return `${idPrefix}${next}`;
};

// Add order to stream and update total
function addOrder(id, amount) {
    if (orders.hasOwnProperty(id) === false) {
        const err = new Error(`Order ${id} not found`);
        err.status = 404;
        throw err;
    }
    if (Number.isInteger(amount) === false) {
        const err = new Error("Supplied amount must be an integer");
        err.status = 400;
        throw err;
    }
    orders[id].total += amount;
    const { total } = orders[id];
    console.log("Adding order: %o", { id, total });
    orderStream.write({ id, total });
}

// Plugin
export default fp(async function (fastify, opts) {
    fastify.decorate("currentOrders", currentOrders);
    fastify.decorate("realtimeOrders", realtimeOrdersSimulator);
    fastify.decorate("addOrder", addOrder);
    fastify.decorate("mockDataInsert", function (request, category, data) {
        const idPrefix = catToPrefix[category];
        const id = calculateID(idPrefix, data);
        data.push({ id, ...request.body });
        orders[id] = { total: 0 };
        return data;
    });
});
