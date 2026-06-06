import { jsx, jsxs } from "react/jsx-runtime";
import { useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { s as supabase } from "./client-BSEgr35B.js";
import "@supabase/supabase-js";
function AuthCallback() {
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      const {
        data
      } = await supabase.auth.getSession();
      const session = data.session;
      if (!session) {
        toast.error("Sign in failed");
        navigate({
          to: "/login"
        });
        return;
      }
      const providerToken = session.provider_token;
      const userMeta = session.user.user_metadata;
      if (providerToken && session.user.app_metadata?.provider === "github") {
        await supabase.from("github_connections").upsert({
          user_id: session.user.id,
          access_token: providerToken,
          github_username: userMeta?.user_name ?? userMeta?.preferred_username ?? null,
          github_user_id: userMeta?.provider_id ?? null,
          avatar_url: userMeta?.avatar_url ?? null,
          scopes: ["read:user", "user:email", "repo", "workflow"],
          connected_at: (/* @__PURE__ */ new Date()).toISOString()
        }, {
          onConflict: "user_id"
        });
        toast.success("GitHub connected");
      }
      navigate({
        to: "/dashboard"
      });
    })();
  }, [navigate]);
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-muted-foreground", children: [
    /* @__PURE__ */ jsx(Loader2, { className: "h-5 w-5 animate-spin" }),
    "Finishing sign in…"
  ] }) });
}
export {
  AuthCallback as component
};
