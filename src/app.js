import express from "express";

import cookiesParser from "cookies-parser";

import cors from "cors";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    Credential: true,
  })
);
/// accept json of limit
app.use(express.json({ limit: "16kb" }));

/// url limite and make extended mean object inside object eccepted in ulr
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

/// if static data like images etc occur to stor in my server may use latter
// so store in public folder inside server
app.use(express.static("public"));

// to keep secure cookies stor user server which only server can read 
app.use(cookiesParser())
export { app };
