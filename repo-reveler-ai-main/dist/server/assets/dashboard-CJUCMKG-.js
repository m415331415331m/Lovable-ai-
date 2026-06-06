import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useNavigate, Link } from "@tanstack/react-router";
import * as React from "react";
import { useEffect, useState } from "react";
import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query";
import { ChevronDown, Check, ChevronUp, Loader2, LogOut, Plus, KeyRound, ShieldCheck, ExternalLink, Info, CheckCircle2, XCircle, Zap, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { s as supabase } from "./client-BSEgr35B.js";
import { u as useAuth, a as useI18n } from "./router-ZWi1_r4p.js";
import { c as cn, L as LanguageToggle, B as Button } from "./LanguageToggle-DwWay_pW.js";
import { I as Input } from "./input-B15fUO55.js";
import { T as Tabs, b as TabsList, c as TabsTrigger, a as TabsContent, L as Label } from "./tabs-B9XGa8n7.js";
import * as SelectPrimitive from "@radix-ui/react-select";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { cva } from "class-variance-authority";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import "@supabase/supabase-js";
import "@radix-ui/react-slot";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-label";
import "@radix-ui/react-tabs";
const Select = SelectPrimitive.Root;
const SelectValue = SelectPrimitive.Value;
const SelectTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  SelectPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
const SelectScrollUpButton = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.ScrollUpButton,
  {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsx(ChevronUp, { className: "h-4 w-4" })
  }
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
const SelectScrollDownButton = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.ScrollDownButton,
  {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4" })
  }
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;
const SelectContent = React.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsx(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs(
  SelectPrimitive.Content,
  {
    ref,
    className: cn(
      "relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)",
      position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    ),
    position,
    ...props,
    children: [
      /* @__PURE__ */ jsx(SelectScrollUpButton, {}),
      /* @__PURE__ */ jsx(
        SelectPrimitive.Viewport,
        {
          className: cn(
            "p-1",
            position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children
        }
      ),
      /* @__PURE__ */ jsx(SelectScrollDownButton, {})
    ]
  }
) }));
SelectContent.displayName = SelectPrimitive.Content.displayName;
const SelectLabel = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.Label,
  {
    ref,
    className: cn("px-2 py-1.5 text-sm font-semibold", className),
    ...props
  }
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;
const SelectItem = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  SelectPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ jsx(SelectPrimitive.ItemText, { children })
    ]
  }
));
SelectItem.displayName = SelectPrimitive.Item.displayName;
const SelectSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;
const Switch = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SwitchPrimitives.Root,
  {
    className: cn(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className
    ),
    ...props,
    ref,
    children: /* @__PURE__ */ jsx(
      SwitchPrimitives.Thumb,
      {
        className: cn(
          "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
Switch.displayName = SwitchPrimitives.Root.displayName;
const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({ className, variant, ...props }) {
  return /* @__PURE__ */ jsx("div", { className: cn(badgeVariants({ variant }), className), ...props });
}
const Popover = PopoverPrimitive.Root;
const PopoverTrigger = PopoverPrimitive.Trigger;
const PopoverContent = React.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(PopoverPrimitive.Portal, { children: /* @__PURE__ */ jsx(
  PopoverPrimitive.Content,
  {
    ref,
    align,
    sideOffset,
    className: cn(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-popover-content-transform-origin)",
      className
    ),
    ...props
  }
) }));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;
function Dashboard() {
  const {
    user,
    loading,
    signOut
  } = useAuth();
  const navigate = useNavigate();
  const {
    t
  } = useI18n();
  useEffect(() => {
    if (!loading && !user) navigate({
      to: "/login"
    });
  }, [user, loading, navigate]);
  if (loading || !user) {
    return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background", children: /* @__PURE__ */ jsx(Loader2, { className: "h-5 w-5 animate-spin text-muted-foreground" }) });
  }
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsx("header", { className: "border-b border-border bg-card", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-6xl items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("div", { className: "h-7 w-7 rounded-lg", style: {
          background: "var(--gradient-hero)"
        } }),
        /* @__PURE__ */ jsx("span", { className: "font-semibold", children: t("app.name") })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(LanguageToggle, {}),
        /* @__PURE__ */ jsx("span", { className: "hidden text-sm text-muted-foreground sm:inline", children: user.email }),
        /* @__PURE__ */ jsxs(Button, { variant: "ghost", size: "sm", onClick: () => signOut().then(() => navigate({
          to: "/"
        })), children: [
          /* @__PURE__ */ jsx(LogOut, { className: "me-2 h-4 w-4" }),
          " ",
          t("nav.signout")
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("main", { className: "mx-auto max-w-6xl px-6 py-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold", children: t("dash.workspace") }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-muted-foreground", children: t("dash.subtitle") })
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/editor", children: /* @__PURE__ */ jsxs(Button, { size: "lg", className: "gap-2", children: [
          /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4" }),
          " ",
          t("dash.open_editor")
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs(Tabs, { defaultValue: "keys", className: "mt-8", children: [
        /* @__PURE__ */ jsxs(TabsList, { children: [
          /* @__PURE__ */ jsxs(TabsTrigger, { value: "keys", children: [
            /* @__PURE__ */ jsx(KeyRound, { className: "me-2 h-4 w-4" }),
            " ",
            t("dash.keys")
          ] }),
          /* @__PURE__ */ jsxs(TabsTrigger, { value: "permissions", children: [
            /* @__PURE__ */ jsx(ShieldCheck, { className: "me-2 h-4 w-4" }),
            " ",
            t("dash.perms")
          ] })
        ] }),
        /* @__PURE__ */ jsx(TabsContent, { value: "keys", className: "mt-6", children: /* @__PURE__ */ jsx(ApiKeysPanel, { userId: user.id }) }),
        /* @__PURE__ */ jsx(TabsContent, { value: "permissions", className: "mt-6", children: /* @__PURE__ */ jsx(PermissionsPanel, { userId: user.id }) })
      ] })
    ] })
  ] });
}
function Card({
  children
}) {
  return /* @__PURE__ */ jsx("div", { className: "rounded-xl border border-border bg-card p-6", style: {
    boxShadow: "var(--shadow-card)"
  }, children });
}
const PROVIDERS = [{
  id: "openai",
  label: "OpenAI",
  url: "https://platform.openai.com/api-keys",
  steps: {
    ar: ["افتح platform.openai.com/api-keys", "سجّل دخول أو أنشئ حسابًا", "اضغط Create new secret key", "انسخ المفتاح والصقه هنا"],
    en: ["Open platform.openai.com/api-keys", "Sign in or create account", "Click Create new secret key", "Copy the key and paste here"]
  }
}, {
  id: "anthropic",
  label: "Anthropic (Claude)",
  url: "https://console.anthropic.com/settings/keys",
  steps: {
    ar: ["افتح console.anthropic.com", "اذهب إلى Settings → API Keys", "اضغط Create Key", "انسخ المفتاح والصقه هنا"],
    en: ["Open console.anthropic.com", "Go to Settings → API Keys", "Click Create Key", "Copy and paste here"]
  }
}, {
  id: "google",
  label: "Google Gemini",
  url: "https://aistudio.google.com/app/apikey",
  steps: {
    ar: ["افتح aistudio.google.com/app/apikey", "سجّل دخول بحساب Google", "اضغط Create API key", "اختر مشروعًا وانسخ المفتاح"],
    en: ["Open aistudio.google.com/app/apikey", "Sign in with Google", "Click Create API key", "Select a project and copy"]
  }
}, {
  id: "groq",
  label: "Groq",
  url: "https://console.groq.com/keys",
  steps: {
    ar: ["افتح console.groq.com/keys", "أنشئ حسابًا مجانيًا", "اضغط Create API Key", "انسخ المفتاح والصقه هنا"],
    en: ["Open console.groq.com/keys", "Create a free account", "Click Create API Key", "Copy and paste here"]
  }
}, {
  id: "github",
  label: "GitHub Token",
  url: "https://github.com/settings/tokens/new",
  steps: {
    ar: ["افتح github.com/settings/tokens/new", "اختر صلاحيات: repo, workflow", "اضغط Generate token", "انسخ التوكن فورًا (لن يظهر مرة أخرى)"],
    en: ["Open github.com/settings/tokens/new", "Select scopes: repo, workflow", "Click Generate token", "Copy immediately (shown once)"]
  }
}, {
  id: "vercel",
  label: "Vercel",
  url: "https://vercel.com/account/tokens",
  steps: {
    ar: ["افتح vercel.com/account/tokens", "اضغط Create Token", "اختر صلاحية Full Account", "انسخ التوكن"],
    en: ["Open vercel.com/account/tokens", "Click Create Token", "Choose Full Account scope", "Copy the token"]
  }
}];
function ApiKeysPanel({
  userId
}) {
  const qc = useQueryClient();
  const {
    t,
    lang
  } = useI18n();
  const [provider, setProvider] = useState("openai");
  const [label, setLabel] = useState("");
  const [keyValue, setKeyValue] = useState("");
  const [tests, setTests] = useState({});
  const current = PROVIDERS.find((p) => p.id === provider);
  async function testKey(id, prov, value) {
    setTests((s) => ({
      ...s,
      [id]: {
        state: "loading"
      }
    }));
    try {
      const {
        data,
        error
      } = await supabase.functions.invoke("test-api-key", {
        body: {
          provider: prov,
          key: value
        }
      });
      if (error) throw error;
      if (data?.ok) {
        setTests((s) => ({
          ...s,
          [id]: {
            state: "ok",
            info: data.info
          }
        }));
        toast.success(`✓ ${prov}: ${data.info ?? "connected"}`);
      } else {
        setTests((s) => ({
          ...s,
          [id]: {
            state: "fail",
            info: data?.error
          }
        }));
        toast.error(`✗ ${prov}: ${data?.error ?? "failed"}`);
      }
    } catch (e) {
      setTests((s) => ({
        ...s,
        [id]: {
          state: "fail",
          info: e.message
        }
      }));
      toast.error(e.message);
    }
  }
  const {
    data: keys = []
  } = useQuery({
    queryKey: ["keys", userId],
    queryFn: async () => {
      const {
        data
      } = await supabase.from("api_keys").select("*").order("created_at", {
        ascending: false
      });
      return data ?? [];
    }
  });
  const add = useMutation({
    mutationFn: async () => {
      if (!keyValue.trim()) throw new Error("Key required");
      const {
        error
      } = await supabase.from("api_keys").insert({
        user_id: userId,
        provider,
        label: label || null,
        key_value: keyValue.trim()
      });
      if (error) throw error;
    },
    onSuccess: () => {
      setKeyValue("");
      setLabel("");
      qc.invalidateQueries({
        queryKey: ["keys", userId]
      });
      toast.success("✓");
    },
    onError: (e) => toast.error(e.message)
  });
  const remove = useMutation({
    mutationFn: async (id) => {
      const {
        error
      } = await supabase.from("api_keys").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => qc.invalidateQueries({
      queryKey: ["keys", userId]
    })
  });
  return /* @__PURE__ */ jsxs("div", { className: "grid gap-4 lg:grid-cols-[1fr_1.2fr]", children: [
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsx("h3", { className: "font-semibold", children: t("keys.add") }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: t("keys.scoped") }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4 space-y-3", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: t("keys.provider") }),
          /* @__PURE__ */ jsxs(Select, { value: provider, onValueChange: setProvider, children: [
            /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, {}) }),
            /* @__PURE__ */ jsx(SelectContent, { children: PROVIDERS.map((p) => /* @__PURE__ */ jsx(SelectItem, { value: p.id, children: p.label }, p.id)) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-2 flex flex-wrap gap-2", children: [
            /* @__PURE__ */ jsx(Button, { asChild: true, size: "sm", variant: "outline", children: /* @__PURE__ */ jsxs("a", { href: current.url, target: "_blank", rel: "noopener noreferrer", children: [
              /* @__PURE__ */ jsx(ExternalLink, { className: "me-2 h-3 w-3" }),
              " ",
              t("keys.get"),
              " — ",
              current.label
            ] }) }),
            /* @__PURE__ */ jsxs(Popover, { children: [
              /* @__PURE__ */ jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(Button, { size: "sm", variant: "ghost", children: [
                /* @__PURE__ */ jsx(Info, { className: "me-2 h-3 w-3" }),
                " ",
                t("keys.how")
              ] }) }),
              /* @__PURE__ */ jsxs(PopoverContent, { className: "w-80", children: [
                /* @__PURE__ */ jsx("h4", { className: "mb-2 font-semibold", children: current.label }),
                /* @__PURE__ */ jsx("ol", { className: "list-inside list-decimal space-y-1 text-sm text-muted-foreground", children: current.steps[lang].map((s, i) => /* @__PURE__ */ jsx("li", { children: s }, i)) }),
                /* @__PURE__ */ jsx(Button, { asChild: true, size: "sm", className: "mt-3 w-full", children: /* @__PURE__ */ jsxs("a", { href: current.url, target: "_blank", rel: "noopener noreferrer", children: [
                  /* @__PURE__ */ jsx(ExternalLink, { className: "me-2 h-3 w-3" }),
                  " ",
                  t("keys.get")
                ] }) })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: t("keys.label") }),
          /* @__PURE__ */ jsx(Input, { value: label, onChange: (e) => setLabel(e.target.value), placeholder: "Personal" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: t("keys.value") }),
          /* @__PURE__ */ jsx(Input, { type: "password", value: keyValue, onChange: (e) => setKeyValue(e.target.value), placeholder: "sk-..." })
        ] }),
        /* @__PURE__ */ jsxs(Button, { onClick: () => add.mutate(), disabled: add.isPending, className: "w-full", children: [
          /* @__PURE__ */ jsx(Plus, { className: "me-2 h-4 w-4" }),
          " ",
          t("keys.save")
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsx("h3", { className: "font-semibold", children: t("keys.saved") }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4 space-y-2", children: [
        keys.length === 0 && /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: t("keys.none") }),
        keys.map((k) => {
          const tr = tests[k.id];
          return /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-2 rounded-lg border border-border bg-muted/40 p-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm font-medium", children: [
                /* @__PURE__ */ jsx(Badge, { variant: "secondary", children: k.provider }),
                k.label && /* @__PURE__ */ jsx("span", { className: "truncate", children: k.label }),
                tr?.state === "ok" && /* @__PURE__ */ jsxs(Badge, { className: "bg-green-100 text-green-800 border-green-200", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "me-1 h-3 w-3" }),
                  tr.info ?? "OK"
                ] }),
                tr?.state === "fail" && /* @__PURE__ */ jsxs(Badge, { variant: "destructive", children: [
                  /* @__PURE__ */ jsx(XCircle, { className: "me-1 h-3 w-3" }),
                  tr.info ?? "Fail"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mt-1 font-mono text-xs text-muted-foreground truncate", children: [
                k.key_value.slice(0, 6),
                "••••••",
                k.key_value.slice(-4)
              ] })
            ] }),
            /* @__PURE__ */ jsx(Button, { size: "sm", variant: "outline", onClick: () => testKey(k.id, k.provider, k.key_value), disabled: tr?.state === "loading", children: tr?.state === "loading" ? /* @__PURE__ */ jsx(Loader2, { className: "h-3 w-3 animate-spin" }) : /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx(Zap, { className: "me-1 h-3 w-3" }),
              " Test"
            ] }) }),
            /* @__PURE__ */ jsx(Button, { size: "sm", variant: "ghost", onClick: () => remove.mutate(k.id), children: /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4" }) })
          ] }, k.id);
        })
      ] })
    ] })
  ] });
}
const PERMS = [{
  id: "read_files",
  label: "Read Files"
}, {
  id: "write_files",
  label: "Write Files"
}, {
  id: "execute_builds",
  label: "Execute Builds"
}, {
  id: "deploy_projects",
  label: "Deploy Projects"
}, {
  id: "access_github",
  label: "Access GitHub"
}, {
  id: "run_terminal",
  label: "Run Terminal"
}, {
  id: "install_packages",
  label: "Install Packages"
}];
function PermissionsPanel({
  userId
}) {
  const qc = useQueryClient();
  const {
    data
  } = useQuery({
    queryKey: ["perms", userId],
    queryFn: async () => {
      const {
        data: data2
      } = await supabase.from("agent_permissions").select("*").eq("user_id", userId).maybeSingle();
      return data2;
    }
  });
  const save = useMutation({
    mutationFn: async (patch) => {
      const row = {
        user_id: userId,
        ...data,
        ...patch,
        updated_at: (/* @__PURE__ */ new Date()).toISOString()
      };
      const {
        error
      } = await supabase.from("agent_permissions").upsert(row, {
        onConflict: "user_id"
      });
      if (error) throw error;
    },
    onSuccess: () => qc.invalidateQueries({
      queryKey: ["perms", userId]
    })
  });
  return /* @__PURE__ */ jsxs(Card, { children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-primary" }),
      /* @__PURE__ */ jsx("h3", { className: "font-semibold", children: "Agent Permissions" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-6 divide-y divide-border", children: PERMS.map((p) => {
      const value = data?.[p.id] ?? p.id === "read_files";
      return /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between py-3", children: [
        /* @__PURE__ */ jsx("div", { className: "font-medium", children: p.label }),
        /* @__PURE__ */ jsx(Switch, { checked: !!value, onCheckedChange: (v) => save.mutate({
          [p.id]: v
        }) })
      ] }, p.id);
    }) })
  ] });
}
export {
  Dashboard as component
};
