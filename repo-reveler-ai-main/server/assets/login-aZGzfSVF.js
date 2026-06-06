import { jsxs, jsx } from "react/jsx-runtime";
import { useNavigate, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Loader2, Mail } from "lucide-react";
import { toast } from "sonner";
import { s as supabase } from "./client-BSEgr35B.js";
import { createLovableAuth } from "@lovable.dev/cloud-auth-js";
import { u as useAuth, a as useI18n } from "./router-ZWi1_r4p.js";
import { L as LanguageToggle, B as Button } from "./LanguageToggle-DwWay_pW.js";
import { I as Input } from "./input-B15fUO55.js";
import { T as Tabs, b as TabsList, c as TabsTrigger, a as TabsContent, L as Label } from "./tabs-B9XGa8n7.js";
import "@supabase/supabase-js";
import "@tanstack/react-query";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-label";
import "@radix-ui/react-tabs";
const lovableAuth = createLovableAuth();
const lovable = {
  auth: {
    signInWithOAuth: async (provider, opts) => {
      const result = await lovableAuth.signInWithOAuth(provider, {
        redirect_uri: opts?.redirect_uri,
        extraParams: {
          ...opts?.extraParams
        }
      });
      if (result.redirected) {
        return result;
      }
      if (result.error) {
        return result;
      }
      try {
        await supabase.auth.setSession(result.tokens);
      } catch (e) {
        return { error: e instanceof Error ? e : new Error(String(e)) };
      }
      return result;
    }
  }
};
function LoginPage() {
  const {
    user
  } = useAuth();
  const navigate = useNavigate();
  const {
    t
  } = useI18n();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState("signin");
  useEffect(() => {
    if (user) navigate({
      to: "/dashboard"
    });
  }, [user, navigate]);
  const handleEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (mode === "signup") {
        const {
          error
        } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/dashboard`
          }
        });
        if (error) throw error;
        toast.success("Account created. Check your email.");
      } else {
        const {
          error
        } = await supabase.auth.signInWithPassword({
          email,
          password
        });
        if (error) throw error;
        navigate({
          to: "/dashboard"
        });
      }
    } catch (err) {
      toast.error(err.message ?? "Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  const handleGoogle = async () => {
    setLoading(true);
    try {
      const result = await lovable.auth.signInWithOAuth("google", {
        redirect_uri: `${window.location.origin}/dashboard`
      });
      if (result.error) {
        toast.error(result.error.message ?? "Google sign-in failed");
        setLoading(false);
        return;
      }
      if (result.redirected) return;
      navigate({
        to: "/dashboard"
      });
    } catch (err) {
      toast.error(err.message ?? "Google sign-in failed");
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "relative flex min-h-screen items-center justify-center bg-background px-4", children: [
    /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0 -z-10", style: {
      background: "var(--gradient-glow)"
    } }),
    /* @__PURE__ */ jsx("div", { className: "absolute top-4 end-4", children: /* @__PURE__ */ jsx(LanguageToggle, {}) }),
    /* @__PURE__ */ jsxs("div", { className: "w-full max-w-md rounded-2xl border border-border bg-card p-8", style: {
      boxShadow: "var(--shadow-card)"
    }, children: [
      /* @__PURE__ */ jsxs(Link, { to: "/", className: "mb-6 flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("div", { className: "h-7 w-7 rounded-lg", style: {
          background: "var(--gradient-hero)"
        } }),
        /* @__PURE__ */ jsx("span", { className: "font-semibold", children: t("app.name") })
      ] }),
      /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold", children: t("auth.welcome") }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: t("auth.subtitle") }),
      /* @__PURE__ */ jsxs(Button, { onClick: handleGoogle, disabled: loading, className: "mt-6 w-full gap-2", size: "lg", children: [
        /* @__PURE__ */ jsx("svg", { className: "h-4 w-4", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { fill: "currentColor", d: "M21.35 11.1h-9.17v2.92h5.27c-.23 1.46-1.7 4.29-5.27 4.29-3.17 0-5.76-2.62-5.76-5.86s2.59-5.86 5.76-5.86c1.81 0 3.02.77 3.71 1.43l2.53-2.44C16.78 3.93 14.74 3 12.18 3 6.97 3 2.75 7.22 2.75 12.45s4.22 9.45 9.43 9.45c5.45 0 9.06-3.83 9.06-9.22 0-.62-.07-1.09-.15-1.58z" }) }),
        t("auth.google")
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "my-6 flex items-center gap-3", children: [
        /* @__PURE__ */ jsx("div", { className: "h-px flex-1 bg-border" }),
        /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground", children: t("auth.or") }),
        /* @__PURE__ */ jsx("div", { className: "h-px flex-1 bg-border" })
      ] }),
      /* @__PURE__ */ jsxs(Tabs, { value: mode, onValueChange: (v) => setMode(v), children: [
        /* @__PURE__ */ jsxs(TabsList, { className: "grid w-full grid-cols-2", children: [
          /* @__PURE__ */ jsx(TabsTrigger, { value: "signin", children: t("auth.signin") }),
          /* @__PURE__ */ jsx(TabsTrigger, { value: "signup", children: t("auth.signup") })
        ] }),
        /* @__PURE__ */ jsx(TabsContent, { value: mode, children: /* @__PURE__ */ jsxs("form", { onSubmit: handleEmail, className: "mt-4 space-y-3", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "email", children: t("auth.email") }),
            /* @__PURE__ */ jsx(Input, { id: "email", type: "email", required: true, value: email, onChange: (e) => setEmail(e.target.value) })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "password", children: t("auth.password") }),
            /* @__PURE__ */ jsx(Input, { id: "password", type: "password", required: true, minLength: 6, value: password, onChange: (e) => setPassword(e.target.value) })
          ] }),
          /* @__PURE__ */ jsxs(Button, { type: "submit", disabled: loading, className: "w-full gap-2", variant: "secondary", children: [
            loading ? /* @__PURE__ */ jsx(Loader2, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4" }),
            mode === "signup" ? t("auth.create") : t("auth.signin")
          ] })
        ] }) })
      ] })
    ] })
  ] });
}
export {
  LoginPage as component
};
