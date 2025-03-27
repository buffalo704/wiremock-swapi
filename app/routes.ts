import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [index("routes/home.tsx"),
  layout("layouts/nav.tsx", [
    route("authentication", "routes/Authentication/Authentication.tsx"),
    route("character","routes/Characters/Characters.tsx"),
    route("films","routes/Films/Films.tsx"),
  ])

] satisfies RouteConfig;
