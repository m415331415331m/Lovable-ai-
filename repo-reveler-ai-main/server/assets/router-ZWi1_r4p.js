import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, useRouter, Link, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect, createContext, useContext } from "react";
import { s as supabase } from "./client-BSEgr35B.js";
import { Toaster } from "sonner";
const appCss = "/assets/styles-Busaraq1.css";
const Ctx$1 = createContext({ user: null, session: null, loading: true, signOut: async () => {
} });
function AuthProvider({ children }) {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => {
      setSession(s);
      setLoading(false);
    });
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoading(false);
    });
    return () => sub.subscription.unsubscribe();
  }, []);
  return /* @__PURE__ */ jsx(
    Ctx$1.Provider,
    {
      value: {
        user: session?.user ?? null,
        session,
        loading,
        signOut: async () => {
          await supabase.auth.signOut();
        }
      },
      children
    }
  );
}
const useAuth = () => useContext(Ctx$1);
const dict = {
  ar: {
    "app.name": "محمود برو AI IDE",
    "nav.signin": "تسجيل الدخول",
    "nav.start": "ابدأ الآن",
    "nav.signout": "تسجيل الخروج",
    "lang.toggle": "English",
    "landing.tag": "منصة تطوير AI احترافية حقيقية",
    "landing.title": "محرر أكواد ذكي مع",
    "landing.title.accent": "معاينة حية ونشر فوري",
    "landing.desc": "اربط حساباتك، أضف مفاتيح API، امنح الذكاء الاصطناعي صلاحيات، وابنِ تطبيقاتك من البداية للنشر.",
    "landing.cta.start": "ابدأ مجانًا",
    "landing.cta.email": "الدخول بالبريد",
    "auth.welcome": "مرحبًا بعودتك",
    "auth.subtitle": "سجّل الدخول للوصول إلى مساحة العمل.",
    "auth.google": "المتابعة باستخدام Google",
    "auth.or": "أو",
    "auth.signin": "دخول",
    "auth.signup": "حساب جديد",
    "auth.email": "البريد الإلكتروني",
    "auth.password": "كلمة المرور",
    "auth.create": "إنشاء حساب",
    "dash.workspace": "مساحة العمل",
    "dash.subtitle": "أدر الاتصالات، المفاتيح، وصلاحيات الذكاء الاصطناعي.",
    "dash.open_editor": "فتح المحرر الذكي",
    "dash.accounts": "الحسابات المرتبطة",
    "dash.keys": "مفاتيح API",
    "dash.perms": "صلاحيات الوكيل",
    "keys.add": "إضافة مفتاح مزوّد",
    "keys.scoped": "محفوظ بأمان، مرتبط بحسابك فقط.",
    "keys.provider": "المزوّد",
    "keys.label": "وصف (اختياري)",
    "keys.value": "المفتاح",
    "keys.save": "حفظ المفتاح",
    "keys.saved": "المفاتيح المحفوظة",
    "keys.none": "لا توجد مفاتيح بعد.",
    "keys.get": "احصل على المفتاح",
    "keys.how": "كيف أحصل عليه؟",
    "editor.title": "المحرر الذكي",
    "editor.projects": "المشاريع",
    "editor.files": "الملفات",
    "editor.new_project": "مشروع جديد",
    "editor.new_file": "ملف جديد",
    "editor.create": "إنشاء",
    "editor.save": "حفظ",
    "editor.download": "تنزيل ZIP",
    "editor.publish": "نشر",
    "editor.code": "الكود",
    "editor.preview": "معاينة حية",
    "editor.ai": "مساعد الذكاء الاصطناعي",
    "editor.ai.placeholder": "اكتب ما تريد بناءه أو تعديله... (مثال: أنشئ زر تسجيل دخول مع تحقق)",
    "editor.ai.thinking": "الذكاء الاصطناعي يكتب...",
    "editor.no_file": "اختر أو أنشئ ملفًا",
    "editor.no_project": "أنشئ مشروعًا للبدء",
    "editor.no_projects": "لا توجد مشاريع بعد",
    "common.back": "رجوع",
    "common.delete": "حذف",
    "common.connected": "متصل",
    "common.disconnect": "فصل"
  },
  en: {
    "app.name": "Mahmoud Pro AI IDE",
    "nav.signin": "Sign in",
    "nav.start": "Get started",
    "nav.signout": "Sign out",
    "lang.toggle": "العربية",
    "landing.tag": "Production-ready professional AI platform",
    "landing.title": "Real AI IDE with",
    "landing.title.accent": "live preview & deploy",
    "landing.desc": "Connect accounts, add API keys, grant agent permissions, and ship apps end‑to‑end.",
    "landing.cta.start": "Start free",
    "landing.cta.email": "Email sign in",
    "auth.welcome": "Welcome back",
    "auth.subtitle": "Sign in to access your AI workspace.",
    "auth.google": "Continue with Google",
    "auth.or": "or",
    "auth.signin": "Sign in",
    "auth.signup": "Sign up",
    "auth.email": "Email",
    "auth.password": "Password",
    "auth.create": "Create account",
    "dash.workspace": "Workspace",
    "dash.subtitle": "Manage connections, keys, and agent permissions.",
    "dash.open_editor": "Open AI Editor",
    "dash.accounts": "Connected Accounts",
    "dash.keys": "API Keys",
    "dash.perms": "Agent Permissions",
    "keys.add": "Add provider key",
    "keys.scoped": "Stored securely, scoped to your account.",
    "keys.provider": "Provider",
    "keys.label": "Label (optional)",
    "keys.value": "API Key",
    "keys.save": "Save key",
    "keys.saved": "Saved keys",
    "keys.none": "No keys yet.",
    "keys.get": "Get key",
    "keys.how": "How to get it",
    "editor.title": "AI Editor",
    "editor.projects": "Projects",
    "editor.files": "Files",
    "editor.new_project": "New Project",
    "editor.new_file": "New File",
    "editor.create": "Create",
    "editor.save": "Save",
    "editor.download": "Download ZIP",
    "editor.publish": "Publish",
    "editor.code": "Code",
    "editor.preview": "Live Preview",
    "editor.ai": "AI Assistant",
    "editor.ai.placeholder": "Describe what to build or change... (e.g., create a login form with validation)",
    "editor.ai.thinking": "AI is writing...",
    "editor.no_file": "Select or create a file",
    "editor.no_project": "Create a project to start",
    "editor.no_projects": "No projects yet",
    "common.back": "Back",
    "common.delete": "Delete",
    "common.connected": "Connected",
    "common.disconnect": "Disconnect"
  }
};
const Ctx = createContext({
  lang: "ar",
  dir: "rtl",
  t: (k) => k,
  setLang: () => {
  },
  toggle: () => {
  }
});
function I18nProvider({ children }) {
  const [lang, setLangState] = useState("ar");
  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("lang") : null;
    if (stored === "ar" || stored === "en") setLangState(stored);
  }, []);
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);
  const setLang = (l) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  };
  return /* @__PURE__ */ jsx(
    Ctx.Provider,
    {
      value: {
        lang,
        dir: lang === "ar" ? "rtl" : "ltr",
        t: (k) => dict[lang][k] ?? dict.en[k] ?? k,
        setLang,
        toggle: () => setLang(lang === "ar" ? "en" : "ar")
      },
      children
    }
  );
}
const useI18n = () => useContext(Ctx);
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$5 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Mahmoud Pro AI IDE" },
      { name: "description", content: "Real AI-powered IDE with GitHub, OAuth, API keys, builds and deployments." },
      { name: "author", content: "Mahmoud Al-Maamari" },
      { property: "og:title", content: "Mahmoud Pro AI IDE" },
      { property: "og:description", content: "Real AI-powered IDE with GitHub, OAuth, API keys, builds and deployments." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Mahmoud Pro AI IDE" },
      { name: "twitter:description", content: "Real AI-powered IDE with GitHub, OAuth, API keys, builds and deployments." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/d0091ca1-a6b6-433c-b775-e0c40e11037c/id-preview-f8faeb0a--a115c829-d690-464a-bf6c-f492cde91ed1.lovable.app-1778587759171.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/d0091ca1-a6b6-433c-b775-e0c40e11037c/id-preview-f8faeb0a--a115c829-d690-464a-bf6c-f492cde91ed1.lovable.app-1778587759171.png" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$5.useRouteContext();
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsx(I18nProvider, { children: /* @__PURE__ */ jsxs(AuthProvider, { children: [
    /* @__PURE__ */ jsx(Outlet, {}),
    /* @__PURE__ */ jsx(Toaster, { theme: "light", position: "top-right", richColors: true })
  ] }) }) });
}
const $$splitComponentImporter$4 = () => import("./login-aZGzfSVF.js");
const Route$4 = createFileRoute("/login")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component"),
  head: () => ({
    meta: [{
      title: "Sign in — Mahmoud Pro AI IDE"
    }]
  })
});
const $$splitComponentImporter$3 = () => import("./editor-Cl6W_ZAL.js");
const Route$3 = createFileRoute("/editor")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component"),
  head: () => ({
    meta: [{
      title: "Editor — Mahmoud Pro AI IDE"
    }]
  })
});
const $$splitComponentImporter$2 = () => import("./dashboard-CJUCMKG-.js");
const Route$2 = createFileRoute("/dashboard")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component"),
  head: () => ({
    meta: [{
      title: "Dashboard — Mahmoud Pro AI IDE"
    }]
  })
});
const $$splitComponentImporter$1 = () => import("./index-eOw8z6-w.js");
const Route$1 = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component"),
  head: () => ({
    meta: [{
      title: "Mahmoud Pro AI IDE — Real AI Development Platform"
    }, {
      name: "description",
      content: "AI editor with live preview, secure API keys, publish & download."
    }]
  })
});
const $$splitComponentImporter = () => import("./auth.callback-BYX_4z3x.js");
const Route = createFileRoute("/auth/callback")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const LoginRoute = Route$4.update({
  id: "/login",
  path: "/login",
  getParentRoute: () => Route$5
});
const EditorRoute = Route$3.update({
  id: "/editor",
  path: "/editor",
  getParentRoute: () => Route$5
});
const DashboardRoute = Route$2.update({
  id: "/dashboard",
  path: "/dashboard",
  getParentRoute: () => Route$5
});
const IndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$5
});
const AuthCallbackRoute = Route.update({
  id: "/auth/callback",
  path: "/auth/callback",
  getParentRoute: () => Route$5
});
const rootRouteChildren = {
  IndexRoute,
  DashboardRoute,
  EditorRoute,
  LoginRoute,
  AuthCallbackRoute
};
const routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  useI18n as a,
  router as r,
  useAuth as u
};
