import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { Code2, Eye, KeyRound, ShieldCheck, Rocket, Sparkles } from "lucide-react";
import { L as LanguageToggle, B as Button } from "./LanguageToggle-DwWay_pW.js";
import { a as useI18n } from "./router-ZWi1_r4p.js";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "@tanstack/react-query";
import "./client-BSEgr35B.js";
import "@supabase/supabase-js";
import "sonner";
function Landing() {
  const {
    t
  } = useI18n();
  const features = [{
    icon: Code2,
    title: t("editor.title"),
    desc: t("editor.ai.placeholder")
  }, {
    icon: Eye,
    title: t("editor.preview"),
    desc: t("landing.desc")
  }, {
    icon: KeyRound,
    title: t("dash.keys"),
    desc: t("keys.scoped")
  }, {
    icon: ShieldCheck,
    title: t("dash.perms"),
    desc: t("dash.subtitle")
  }, {
    icon: Rocket,
    title: t("editor.publish"),
    desc: t("landing.desc")
  }, {
    icon: Sparkles,
    title: t("editor.ai"),
    desc: t("editor.ai.placeholder")
  }];
  return /* @__PURE__ */ jsxs("div", { className: "relative min-h-screen overflow-hidden bg-background", children: [
    /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0 -z-10", style: {
      background: "var(--gradient-glow)"
    } }),
    /* @__PURE__ */ jsxs("header", { className: "mx-auto flex max-w-6xl items-center justify-between px-6 py-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("div", { className: "h-8 w-8 rounded-lg", style: {
          background: "var(--gradient-hero)"
        } }),
        /* @__PURE__ */ jsx("span", { className: "text-lg font-semibold tracking-tight", children: t("app.name") })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(LanguageToggle, {}),
        /* @__PURE__ */ jsx(Link, { to: "/login", children: /* @__PURE__ */ jsx(Button, { variant: "ghost", children: t("nav.signin") }) }),
        /* @__PURE__ */ jsx(Link, { to: "/login", children: /* @__PURE__ */ jsx(Button, { children: t("nav.start") }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("main", { className: "mx-auto max-w-6xl px-6 pb-24 pt-12", children: [
      /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-3xl text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary" }),
          t("landing.tag")
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "mt-6 text-5xl font-bold tracking-tight sm:text-6xl", children: [
          t("landing.title"),
          " ",
          /* @__PURE__ */ jsx("span", { className: "bg-clip-text text-transparent", style: {
            backgroundImage: "var(--gradient-hero)"
          }, children: t("landing.title.accent") })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg text-muted-foreground", children: t("landing.desc") }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex justify-center gap-3", children: [
          /* @__PURE__ */ jsx(Link, { to: "/login", children: /* @__PURE__ */ jsx(Button, { size: "lg", children: t("landing.cta.start") }) }),
          /* @__PURE__ */ jsx(Link, { to: "/login", children: /* @__PURE__ */ jsx(Button, { size: "lg", variant: "outline", children: t("landing.cta.email") }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "mt-24 grid gap-4 md:grid-cols-3", children: features.map((f) => /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-border bg-card p-6", style: {
        boxShadow: "var(--shadow-card)"
      }, children: [
        /* @__PURE__ */ jsx(f.icon, { className: "h-6 w-6 text-primary" }),
        /* @__PURE__ */ jsx("h3", { className: "mt-4 font-semibold", children: f.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: f.desc })
      ] }, f.title)) })
    ] })
  ] });
}
export {
  Landing as component
};
