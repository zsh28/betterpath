import { Hono } from "hono";
import { serve } from "@hono/node-server";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

const port = process.env.PORT || 4000;

console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port: Number(port),
});
