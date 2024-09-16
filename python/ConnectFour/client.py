import asyncio
import websockets

async def connect_to_server():
    uri = "ws://localhost:8001"
    async with websockets.connect(uri) as websocket:
        await websocket.send("Hello from client!")
        response = await websocket.recv()
        print(f"Server says: {response}")

asyncio.run(connect_to_server())