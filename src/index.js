import { Router } from "itty-router";

import Absences from "./handlers/absences";
import Conflict from "./handlers/conflicts";

const router = Router();

router
  .get("/api/absences", Absences)
  .get("/api/conflict/:id", Conflict)
  .get("*", () => new Response("Not found", { status: 404 }));

export default {
  async fetch(request, env, ctx) {
    return router.fetch(request);
  },
};
