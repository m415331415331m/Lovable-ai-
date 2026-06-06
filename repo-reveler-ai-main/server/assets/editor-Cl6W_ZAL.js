import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useNavigate, Link } from "@tanstack/react-router";
import * as React from "react";
import { useState, useRef, useEffect, useMemo } from "react";
import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query";
import Editor from "@monaco-editor/react";
import JSZip from "jszip";
import { X, Loader2, ArrowLeft, ExternalLink, Rocket, Download, LogOut, Plus, FolderOpen, Trash2, FilePlus, Code2, Eye, MessageSquare, Check, Pencil, Copy, Share2, Send, Sparkles, Square } from "lucide-react";
import { toast } from "sonner";
import { s as supabase } from "./client-BSEgr35B.js";
import { u as useAuth, a as useI18n } from "./router-ZWi1_r4p.js";
import { c as cn, L as LanguageToggle, B as Button } from "./LanguageToggle-DwWay_pW.js";
import { I as Input } from "./input-B15fUO55.js";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import "@supabase/supabase-js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
const Textarea = React.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "textarea",
      {
        className: cn(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";
const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;
const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
const DialogContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxs(
    DialogPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxs(DialogPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = DialogPrimitive.Content.displayName;
const DialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsx("div", { className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className), ...props });
DialogHeader.displayName = "DialogHeader";
const DialogFooter = ({ className, ...props }) => /* @__PURE__ */ jsx(
  "div",
  {
    className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
    ...props
  }
);
DialogFooter.displayName = "DialogFooter";
const DialogTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
const DialogDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;
const SUPABASE_URL = "https://oovmjkjgfuagcgzfklga.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9vdm1qa2pnZnVhZ2NnemZrbGdhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3BgY2ODY4NTMsImV4cCI6MjA5NjI2Mjg1M30.Y5KyUT0jEHmUL8jGJWcYC8nU4lJGMGhtfBvMLCrUPaY";
function langFromPath(p) {
  const ext = p.split(".").pop()?.toLowerCase() ?? "";
  const map = {
    ts: "typescript",
    tsx: "typescript",
    js: "javascript",
    jsx: "javascript",
    json: "json",
    css: "css",
    html: "html",
    md: "markdown"
  };
  return map[ext] ?? "plaintext";
}
function normalizePreviewPath(path, basePath = "") {
  if (!path) return "";
  if (/^(https?:|mailto:|tel:|data:|blob:|#)/i.test(path)) return path;
  const cleanBase = basePath.replace(/^\/+/, "").split("/").slice(0, -1).join("/");
  const joined = path.startsWith("/") ? path : [cleanBase, path].filter(Boolean).join("/");
  const parts = [];
  for (const part of joined.replace(/^\.\//, "").split("/")) {
    if (!part || part === ".") continue;
    if (part === "..") parts.pop();
    else parts.push(part);
  }
  return parts.join("/");
}
function EditorPage() {
  const {
    user,
    loading,
    signOut
  } = useAuth();
  const navigate = useNavigate();
  const qc = useQueryClient();
  const {
    t,
    dir
  } = useI18n();
  const [activeProjectId, setActiveProjectId] = useState(null);
  const [activeFileId, setActiveFileId] = useState(null);
  const [draftContent, setDraftContent] = useState("");
  const [view, setView] = useState("code");
  const [chatOpen, setChatOpen] = useState(true);
  const [chat, setChat] = useState([]);
  const [aiPrompt, setAiPrompt] = useState("");
  const [aiBusy, setAiBusy] = useState(false);
  const [newProjOpen, setNewProjOpen] = useState(false);
  const [newProjName, setNewProjName] = useState("");
  const [newFileOpen, setNewFileOpen] = useState(false);
  const [newFilePath, setNewFilePath] = useState("");
  const [publishing, setPublishing] = useState(false);
  const [publishedUrl, setPublishedUrl] = useState(null);
  const [publishSuccessOpen, setPublishSuccessOpen] = useState(false);
  const [mobilePane, setMobilePane] = useState("chat");
  const [previewPath, setPreviewPath] = useState("index.html");
  const [streamingPaths, setStreamingPaths] = useState([]);
  const [editingMessageIndex, setEditingMessageIndex] = useState(null);
  const [editingMessageText, setEditingMessageText] = useState("");
  const abortRef = useRef(null);
  async function quickNewProject() {
    if (!user) return;
    const {
      data,
      error
    } = await supabase.from("projects").insert({
      name: "محادثة جديدة",
      user_id: user.id
    }).select().single();
    if (error) {
      toast.error(error.message);
      return;
    }
    qc.invalidateQueries({
      queryKey: ["projects"]
    });
    setActiveProjectId(data.id);
    setActiveFileId(null);
    setChat([]);
    setMobilePane("chat");
    toast.success("✓ محادثة جديدة");
  }
  const chatScrollRef = useRef(null);
  useEffect(() => {
    if (!loading && !user) navigate({
      to: "/login"
    });
  }, [user, loading, navigate]);
  useEffect(() => {
    chatScrollRef.current?.scrollTo({
      top: 1e9,
      behavior: "smooth"
    });
  }, [chat]);
  const projectsQ = useQuery({
    queryKey: ["projects", user?.id],
    enabled: !!user,
    queryFn: async () => {
      const {
        data,
        error
      } = await supabase.from("projects").select("*").order("updated_at", {
        ascending: false
      });
      if (error) throw error;
      return data;
    }
  });
  useEffect(() => {
    if (!activeProjectId && projectsQ.data && projectsQ.data.length > 0) setActiveProjectId(projectsQ.data[0].id);
  }, [projectsQ.data, activeProjectId]);
  useEffect(() => {
    if (!activeProjectId) {
      setChat([]);
      setPublishedUrl(null);
      return;
    }
    (async () => {
      const [{
        data: msgs
      }, {
        data: proj
      }] = await Promise.all([supabase.from("chat_messages").select("*").eq("project_id", activeProjectId).order("created_at"), supabase.from("projects").select("published_url").eq("id", activeProjectId).single()]);
      setChat((msgs ?? []).map((m) => ({
        id: m.id,
        role: m.role,
        content: m.content,
        ts: new Date(m.created_at).getTime()
      })));
      setPublishedUrl(proj?.published_url ?? null);
    })();
  }, [activeProjectId]);
  const filesQ = useQuery({
    queryKey: ["files", activeProjectId],
    enabled: !!activeProjectId,
    queryFn: async () => {
      const {
        data,
        error
      } = await supabase.from("project_files").select("*").eq("project_id", activeProjectId).order("path");
      if (error) throw error;
      return data;
    }
  });
  const activeFile = useMemo(() => filesQ.data?.find((f) => f.id === activeFileId) ?? null, [filesQ.data, activeFileId]);
  useEffect(() => {
    if (activeFile) setDraftContent(activeFile.content);
  }, [activeFile?.id]);
  useEffect(() => {
    if (!activeFileId && filesQ.data && filesQ.data.length > 0) setActiveFileId(filesQ.data[0].id);
  }, [filesQ.data, activeFileId]);
  const createProject = useMutation({
    mutationFn: async (name) => {
      const {
        data,
        error
      } = await supabase.from("projects").insert({
        name,
        user_id: user.id
      }).select().single();
      if (error) throw error;
      return data;
    },
    onSuccess: (p) => {
      qc.invalidateQueries({
        queryKey: ["projects"]
      });
      setActiveProjectId(p.id);
      setActiveFileId(null);
      setNewProjOpen(false);
      setNewProjName("");
      toast.success("✓");
    },
    onError: (e) => toast.error(e.message)
  });
  const deleteProject = useMutation({
    mutationFn: async (id) => {
      const {
        error
      } = await supabase.from("projects").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      qc.invalidateQueries({
        queryKey: ["projects"]
      });
      setActiveProjectId(null);
      setActiveFileId(null);
    }
  });
  const createFile = useMutation({
    mutationFn: async (path) => {
      const {
        data,
        error
      } = await supabase.from("project_files").insert({
        project_id: activeProjectId,
        user_id: user.id,
        path,
        content: "",
        language: langFromPath(path)
      }).select().single();
      if (error) throw error;
      return data;
    },
    onSuccess: (f) => {
      qc.invalidateQueries({
        queryKey: ["files", activeProjectId]
      });
      setActiveFileId(f.id);
      setNewFileOpen(false);
      setNewFilePath("");
    },
    onError: (e) => toast.error(e.message)
  });
  const deleteFile = useMutation({
    mutationFn: async (id) => {
      const {
        error
      } = await supabase.from("project_files").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      qc.invalidateQueries({
        queryKey: ["files", activeProjectId]
      });
      setActiveFileId(null);
    }
  });
  const saveFile = useMutation({
    mutationFn: async () => {
      if (!activeFile) return;
      const {
        error
      } = await supabase.from("project_files").update({
        content: draftContent,
        updated_at: (/* @__PURE__ */ new Date()).toISOString()
      }).eq("id", activeFile.id);
      if (error) throw error;
    },
    onSuccess: () => {
      qc.invalidateQueries({
        queryKey: ["files", activeProjectId]
      });
      toast.success("✓");
    },
    onError: (e) => toast.error(e.message)
  });
  async function persistMsg(role, content) {
    if (!activeProjectId || !user) return;
    try {
      await supabase.from("chat_messages").insert({
        project_id: activeProjectId,
        user_id: user.id,
        role,
        content
      });
    } catch {
    }
  }
  async function runAI() {
    if (!aiPrompt.trim() || aiBusy || !user) return;
    setStreamingPaths([]);
    let projectId = activeProjectId;
    if (!projectId) {
      const autoName = aiPrompt.trim().split(/\s+/).slice(0, 5).join(" ").slice(0, 60) || "New Project";
      const {
        data: newProj,
        error: pErr
      } = await supabase.from("projects").insert({
        name: autoName,
        user_id: user.id
      }).select().single();
      if (pErr || !newProj) {
        toast.error(pErr?.message ?? "Couldn't create project");
        return;
      }
      projectId = newProj.id;
      setActiveProjectId(projectId);
      qc.invalidateQueries({
        queryKey: ["projects"]
      });
      toast.success(`✓ ${autoName}`);
    }
    const userMsg = {
      role: "user",
      content: aiPrompt,
      ts: Date.now()
    };
    const prompt = aiPrompt;
    setAiPrompt("");
    setChat((c) => [...c, userMsg, {
      role: "assistant",
      content: "",
      ts: Date.now(),
      streaming: true,
      progress: "🧠 Thinking…"
    }]);
    setAiBusy(true);
    try {
      await supabase.from("chat_messages").insert({
        project_id: projectId,
        user_id: user.id,
        role: "user",
        content: prompt
      });
    } catch {
    }
    const ctrl = new AbortController();
    abortRef.current = ctrl;
    try {
      const {
        data: session
      } = await supabase.auth.getSession();
      const token = session?.session?.access_token ?? SUPABASE_KEY;
      const res = await fetch(`${SUPABASE_URL}/functions/v1/ai-generate-code`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          prompt,
          currentFile: activeFile?.path,
          currentContent: draftContent,
          files: filesQ.data?.map((f) => ({
            path: f.path,
            content: f.id === activeFileId ? draftContent : f.content
          })) ?? []
        }),
        signal: ctrl.signal
      });
      const contentType = res.headers.get("content-type") ?? "";
      if (!res.ok) {
        const t2 = await res.text();
        throw new Error(t2 || `HTTP ${res.status}`);
      }
      if (contentType.includes("application/json")) {
        const payload = await res.json();
        throw new Error(payload?.message ?? payload?.error ?? "AI failed");
      }
      if (!res.body) throw new Error("No stream");
      const reader = res.body.getReader();
      const dec = new TextDecoder();
      let full = "";
      while (true) {
        const {
          done,
          value
        } = await reader.read();
        if (done) break;
        full += dec.decode(value, {
          stream: true
        });
        const splitIdx2 = full.indexOf("===FILES===");
        const visible = splitIdx2 >= 0 ? full.slice(0, splitIdx2).trim() : full;
        let progress = "🧠 Thinking…";
        if (splitIdx2 >= 0) {
          const jsonChunk = full.slice(splitIdx2 + 11);
          const pathMatches = [...jsonChunk.matchAll(/"path"\s*:\s*"([^"]+)"/g)];
          if (pathMatches.length > 0) {
            const last = pathMatches[pathMatches.length - 1][1];
            setStreamingPaths(Array.from(new Set(pathMatches.map((match) => match[1]))));
            progress = `✍️ Writing ${pathMatches.length} file${pathMatches.length > 1 ? "s" : ""} · ${last}`;
          } else progress = "📦 Generating files…";
        }
        setChat((c) => {
          const next = [...c];
          const last = next[next.length - 1];
          if (last && last.role === "assistant") next[next.length - 1] = {
            ...last,
            content: visible,
            progress
          };
          return next;
        });
      }
      const splitIdx = full.indexOf("===FILES===");
      const explanation = splitIdx >= 0 ? full.slice(0, splitIdx).trim() : "";
      let jsonPart = splitIdx >= 0 ? full.slice(splitIdx + 11).trim() : full.trim();
      jsonPart = jsonPart.replace(/^```(?:json)?\s*/i, "").replace(/```\s*$/i, "").trim();
      let generated = [];
      try {
        generated = JSON.parse(jsonPart);
      } catch {
        const m = jsonPart.match(/\[[\s\S]*\]/);
        if (m) {
          try {
            generated = JSON.parse(m[0]);
          } catch {
          }
        }
      }
      let filesMsg = "";
      if (Array.isArray(generated) && generated.length > 0) {
        const {
          data: existingFiles
        } = await supabase.from("project_files").select("id,path").eq("project_id", projectId);
        for (const g of generated) {
          const existing = existingFiles?.find((f) => f.path === g.path);
          if (existing) {
            await supabase.from("project_files").update({
              content: g.content,
              language: g.language ?? langFromPath(g.path)
            }).eq("id", existing.id);
          } else {
            await supabase.from("project_files").insert({
              project_id: projectId,
              user_id: user.id,
              path: g.path,
              content: g.content,
              language: g.language ?? langFromPath(g.path)
            });
          }
        }
        qc.invalidateQueries({
          queryKey: ["files", projectId]
        });
        setStreamingPaths(generated.map((g) => g.path));
        setPreviewPath(generated.some((g) => g.path === "index.html") ? "index.html" : generated.find((g) => g.path.endsWith(".html"))?.path ?? generated[0].path);
        filesMsg = `

📦 ${generated.length} file(s):
` + generated.map((g) => `• ${g.path}`).join("\n");
        setView("preview");
        setMobilePane("main");
        setTimeout(() => publish(true).catch(() => {
        }), 500);
      }
      const finalContent = (explanation || "Done.") + filesMsg;
      setChat((c) => {
        const next = [...c];
        const last = next[next.length - 1];
        if (last && last.role === "assistant") next[next.length - 1] = {
          ...last,
          content: finalContent,
          streaming: false,
          progress: void 0
        };
        return next;
      });
      try {
        await supabase.from("chat_messages").insert({
          project_id: projectId,
          user_id: user.id,
          role: "assistant",
          content: finalContent
        });
      } catch {
      }
    } catch (e) {
      const msg = e?.name === "AbortError" ? "⏹ Stopped" : `❌ ${e.message ?? "AI failed"}`;
      setChat((c) => {
        const next = [...c];
        const last = next[next.length - 1];
        if (last && last.role === "assistant") next[next.length - 1] = {
          ...last,
          content: msg,
          streaming: false,
          progress: void 0
        };
        return next;
      });
      persistMsg("assistant", msg);
    } finally {
      setAiBusy(false);
      abortRef.current = null;
      setTimeout(() => setStreamingPaths([]), 1800);
    }
  }
  function stopAI() {
    abortRef.current?.abort();
  }
  async function copyMsg(text) {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("✓ Copied");
    } catch {
      toast.error("Copy failed");
    }
  }
  async function shareMsg(text) {
    if (navigator.share) {
      try {
        await navigator.share({
          text
        });
      } catch {
      }
    } else {
      await copyMsg(text);
    }
  }
  function startEditMessage(index, content) {
    setEditingMessageIndex(index);
    setEditingMessageText(content);
  }
  async function saveEditedMessage(index) {
    const nextText = editingMessageText.trim();
    if (!nextText) return;
    const target = chat[index];
    setChat((current) => current.map((msg, i) => i === index ? {
      ...msg,
      content: nextText
    } : msg));
    setEditingMessageIndex(null);
    setEditingMessageText("");
    if (target?.id) {
      await supabase.from("chat_messages").update({
        content: nextText
      }).eq("id", target.id);
    }
    if (target?.role === "user") setAiPrompt(nextText);
  }
  const previewDeviceClass = "h-full w-full border-0 bg-background";
  async function exportZip() {
    if (!activeProjectId || !filesQ.data) return;
    const project = projectsQ.data?.find((p) => p.id === activeProjectId);
    const zip = new JSZip();
    for (const f of filesQ.data) zip.file(f.path, f.content);
    const blob = await zip.generateAsync({
      type: "blob"
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${project?.name ?? "project"}.zip`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    toast.success("ZIP ✓");
  }
  function openPreviewInNewTab() {
    if (!previewSrcDoc) return;
    const blob = new Blob([previewSrcDoc], {
      type: "text/html"
    });
    const url = URL.createObjectURL(blob);
    window.open(url, "_blank", "noopener,noreferrer");
    setTimeout(() => URL.revokeObjectURL(url), 3e4);
  }
  async function publish(silent = false) {
    const {
      data: freshFiles
    } = await supabase.from("project_files").select("*").eq("project_id", activeProjectId).order("path");
    const files = freshFiles ?? filesQ.data;
    if (!files || files.length === 0 || !activeProjectId || !user) {
      if (!silent) toast.error("No files");
      return;
    }
    if (!silent) setPublishing(true);
    try {
      const project = projectsQ.data?.find((p) => p.id === activeProjectId);
      const slug = (project?.name ?? "site").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "site";
      const folder = `${user.id}/${slug}-${activeProjectId.slice(0, 8)}`;
      for (const f of files) {
        const path = f.path.replace(/^\/+/, "");
        const contentType = path.endsWith(".html") ? "text/html" : path.endsWith(".css") ? "text/css" : path.endsWith(".js") || path.endsWith(".jsx") ? "application/javascript" : path.endsWith(".json") ? "application/json" : path.endsWith(".svg") ? "image/svg+xml" : "text/plain; charset=utf-8";
        const {
          error
        } = await supabase.storage.from("published").upload(`${folder}/${path}`, new Blob([f.content], {
          type: contentType
        }), {
          upsert: true,
          contentType
        });
        if (error) throw error;
      }
      const hasIndex = files.some((f) => f.path.replace(/^\/+/, "") === "index.html");
      const entry = hasIndex ? "index.html" : files[0].path.replace(/^\/+/, "");
      const {
        data: pub
      } = supabase.storage.from("published").getPublicUrl(`${folder}/${entry}`);
      const url = pub.publicUrl;
      setPublishedUrl(url);
      await supabase.from("projects").update({
        published_url: url
      }).eq("id", activeProjectId);
      if (!silent) {
        await navigator.clipboard.writeText(url).catch(() => {
        });
        setPublishSuccessOpen(true);
        toast.success("✓ Published");
      }
    } catch (e) {
      if (!silent) toast.error(e.message ?? "Publish failed");
    } finally {
      if (!silent) setPublishing(false);
    }
  }
  const sandpackFiles = useMemo(() => {
    const files = {};
    if (filesQ.data) {
      for (const f of filesQ.data) {
        const path = f.path.replace(/^\/+/, "");
        files[path] = f.id === activeFileId ? draftContent : f.content;
      }
    }
    return files;
  }, [filesQ.data, activeFileId, draftContent]);
  const previewPages = useMemo(() => Object.keys(sandpackFiles).filter((path) => path.toLowerCase().endsWith(".html")).sort(), [sandpackFiles]);
  const previewSrcDoc = useMemo(() => {
    const entry = sandpackFiles[previewPath] ? previewPath : previewPages[0];
    const raw = entry ? sandpackFiles[entry] : "";
    if (!raw) return "";
    const withStyles = raw.replace(/<link\b([^>]*?)href=["']([^"']+\.css(?:\?[^"']*)?)["']([^>]*)>/gi, (_match, before, href, after) => {
      const cssPath = normalizePreviewPath(href.split("?")[0], entry);
      const css = sandpackFiles[cssPath];
      return css ? `<style data-preview-source="${cssPath}">
${css}
</style>` : `<link ${before} href="${href}" ${after}>`;
    });
    const withScripts = withStyles.replace(/<script\b([^>]*?)src=["']([^"']+\.js(?:\?[^"']*)?)["']([^>]*)>\s*<\/script>/gi, (_match, before, src, after) => {
      const jsPath = normalizePreviewPath(src.split("?")[0], entry);
      const js = sandpackFiles[jsPath];
      return js ? `<script ${before} ${after}>
${js.replace(/<\/script>/gi, "<\\/script>")}
<\/script>` : `<script ${before} src="${src}" ${after}><\/script>`;
    });
    const bridge = `<script>
      (() => {
        const entry = ${JSON.stringify(entry)};
        document.addEventListener('click', (event) => {
          const anchor = event.target.closest && event.target.closest('a[href]');
          if (!anchor) return;
          const href = anchor.getAttribute('href');
          if (!href || /^(https?:|mailto:|tel:|data:|blob:|#)/i.test(href)) return;
          event.preventDefault();
          window.parent.postMessage({ type: 'preview:navigate', path: href, base: entry }, '*');
        });
      })();
    <\/script>`;
    return withScripts.includes("</body>") ? withScripts.replace("</body>", `${bridge}</body>`) : `${withScripts}${bridge}`;
  }, [previewPages, previewPath, sandpackFiles]);
  useEffect(() => {
    if (previewPages.length > 0 && !sandpackFiles[previewPath]) setPreviewPath(previewPages.includes("index.html") ? "index.html" : previewPages[0]);
  }, [previewPages, previewPath, sandpackFiles]);
  useEffect(() => {
    const handlePreviewMessage = (event) => {
      if (event.data?.type !== "preview:navigate") return;
      const nextPath = normalizePreviewPath(event.data.path, event.data.base);
      if (sandpackFiles[nextPath]) setPreviewPath(nextPath);
    };
    window.addEventListener("message", handlePreviewMessage);
    return () => window.removeEventListener("message", handlePreviewMessage);
  }, [sandpackFiles]);
  if (loading || !user) {
    return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background", children: /* @__PURE__ */ jsx(Loader2, { className: "h-5 w-5 animate-spin text-muted-foreground" }) });
  }
  return /* @__PURE__ */ jsxs("div", { className: "flex h-dvh min-h-0 flex-col overflow-hidden bg-background", dir, children: [
    /* @__PURE__ */ jsxs("header", { className: "shrink-0 flex flex-wrap items-center justify-between gap-2 border-b border-border bg-card px-3 py-2 md:px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(Link, { to: "/dashboard", className: "text-muted-foreground hover:text-foreground", children: /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsx("span", { className: "font-semibold", children: t("editor.title") })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(LanguageToggle, {}),
        publishedUrl && /* @__PURE__ */ jsxs(Button, { size: "sm", variant: "ghost", onClick: () => window.open(publishedUrl, "_blank"), title: publishedUrl, children: [
          /* @__PURE__ */ jsx(ExternalLink, { className: "me-2 h-4 w-4" }),
          " Open"
        ] }),
        /* @__PURE__ */ jsxs(Button, { size: "sm", variant: "outline", onClick: () => publish(false), disabled: !activeProjectId || publishing, children: [
          publishing ? /* @__PURE__ */ jsx(Loader2, { className: "me-2 h-4 w-4 animate-spin" }) : /* @__PURE__ */ jsx(Rocket, { className: "me-2 h-4 w-4" }),
          t("editor.publish")
        ] }),
        /* @__PURE__ */ jsxs(Button, { size: "sm", variant: "outline", onClick: exportZip, disabled: !activeProjectId, children: [
          /* @__PURE__ */ jsx(Download, { className: "me-2 h-4 w-4" }),
          " ",
          t("editor.download")
        ] }),
        /* @__PURE__ */ jsx(Button, { size: "sm", variant: "ghost", onClick: () => signOut().then(() => navigate({
          to: "/"
        })), children: /* @__PURE__ */ jsx(LogOut, { className: "h-4 w-4" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex min-h-0 flex-1 overflow-hidden", children: [
      /* @__PURE__ */ jsxs("aside", { className: `${mobilePane === "files" ? "flex" : "hidden"} md:flex min-h-0 w-full md:w-60 flex-col border-e border-border bg-card`, children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold uppercase text-muted-foreground", children: t("editor.projects") }),
          /* @__PURE__ */ jsxs(Dialog, { open: newProjOpen, onOpenChange: setNewProjOpen, children: [
            /* @__PURE__ */ jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { size: "icon", variant: "ghost", className: "h-6 w-6", children: /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4" }) }) }),
            /* @__PURE__ */ jsxs(DialogContent, { children: [
              /* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsx(DialogTitle, { children: t("editor.new_project") }) }),
              /* @__PURE__ */ jsx(Input, { placeholder: "My App", value: newProjName, onChange: (e) => setNewProjName(e.target.value) }),
              /* @__PURE__ */ jsx(DialogFooter, { children: /* @__PURE__ */ jsx(Button, { onClick: () => createProject.mutate(newProjName), disabled: !newProjName || createProject.isPending, children: t("editor.create") }) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-1 px-2 pb-2", children: [
          projectsQ.data?.map((p) => /* @__PURE__ */ jsxs("div", { className: `group flex items-center justify-between rounded px-2 py-1 text-sm cursor-pointer ${activeProjectId === p.id ? "bg-primary/10 text-foreground" : "text-muted-foreground hover:bg-accent"}`, onClick: () => {
            setActiveProjectId(p.id);
            setActiveFileId(null);
          }, children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 truncate", children: [
              /* @__PURE__ */ jsx(FolderOpen, { className: "h-3 w-3 shrink-0" }),
              /* @__PURE__ */ jsx("span", { className: "truncate", children: p.name })
            ] }),
            /* @__PURE__ */ jsx("button", { className: "opacity-0 group-hover:opacity-100", onClick: (e) => {
              e.stopPropagation();
              if (confirm(`Delete?`)) deleteProject.mutate(p.id);
            }, children: /* @__PURE__ */ jsx(Trash2, { className: "h-3 w-3 text-destructive" }) })
          ] }, p.id)),
          projectsQ.data?.length === 0 && /* @__PURE__ */ jsx("p", { className: "px-2 text-xs text-muted-foreground", children: t("editor.no_projects") })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-2 flex items-center justify-between border-t border-border p-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold uppercase text-muted-foreground", children: t("editor.files") }),
          /* @__PURE__ */ jsxs(Dialog, { open: newFileOpen, onOpenChange: setNewFileOpen, children: [
            /* @__PURE__ */ jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { size: "icon", variant: "ghost", className: "h-6 w-6", disabled: !activeProjectId, children: /* @__PURE__ */ jsx(FilePlus, { className: "h-4 w-4" }) }) }),
            /* @__PURE__ */ jsxs(DialogContent, { children: [
              /* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsx(DialogTitle, { children: t("editor.new_file") }) }),
              /* @__PURE__ */ jsx(Input, { placeholder: "src/index.tsx", value: newFilePath, onChange: (e) => setNewFilePath(e.target.value) }),
              /* @__PURE__ */ jsx(DialogFooter, { children: /* @__PURE__ */ jsx(Button, { onClick: () => createFile.mutate(newFilePath), disabled: !newFilePath || createFile.isPending, children: t("editor.create") }) })
            ] })
          ] })
        ] }),
        streamingPaths.length > 0 && /* @__PURE__ */ jsxs("div", { className: "mx-2 mb-2 rounded-md border border-border bg-accent/60 p-2 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-1 flex items-center gap-1 font-semibold text-foreground", children: [
            /* @__PURE__ */ jsx(Loader2, { className: "h-3 w-3 animate-spin text-primary" }),
            " جاري إنشاء الملفات"
          ] }),
          /* @__PURE__ */ jsx("div", { className: "space-y-1", children: streamingPaths.slice(0, 8).map((path) => /* @__PURE__ */ jsx("div", { className: "truncate font-mono", children: path }, path)) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "min-h-0 flex-1 space-y-1 overflow-auto px-2 pb-2", children: filesQ.data?.map((f) => /* @__PURE__ */ jsxs("div", { className: `group flex items-center justify-between rounded px-2 py-1 text-xs cursor-pointer ${activeFileId === f.id ? "bg-primary/10 text-foreground" : "text-muted-foreground hover:bg-accent"}`, onClick: () => {
          setActiveFileId(f.id);
          if (f.path.endsWith(".html")) {
            setPreviewPath(f.path);
            setView("preview");
            setMobilePane("main");
          }
        }, children: [
          /* @__PURE__ */ jsxs("span", { className: "flex min-w-0 items-center gap-1 truncate font-mono", children: [
            streamingPaths.includes(f.path) && /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-primary" }),
            /* @__PURE__ */ jsx("span", { className: "truncate", children: f.path })
          ] }),
          /* @__PURE__ */ jsx("button", { className: "opacity-0 group-hover:opacity-100", onClick: (e) => {
            e.stopPropagation();
            if (confirm(`Delete?`)) deleteFile.mutate(f.id);
          }, children: /* @__PURE__ */ jsx(Trash2, { className: "h-3 w-3 text-destructive" }) })
        ] }, f.id)) })
      ] }),
      /* @__PURE__ */ jsxs("main", { className: `${mobilePane === "main" ? "flex" : "hidden"} md:flex min-h-0 flex-1 flex-col min-w-0`, children: [
        /* @__PURE__ */ jsxs("div", { className: "flex shrink-0 flex-wrap items-center justify-between gap-2 border-b border-border bg-card px-3 py-1.5", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex min-w-0 flex-wrap items-center gap-1", children: [
            /* @__PURE__ */ jsxs(Button, { size: "sm", variant: view === "code" ? "secondary" : "ghost", onClick: () => setView("code"), children: [
              /* @__PURE__ */ jsx(Code2, { className: "me-2 h-3 w-3" }),
              " ",
              t("editor.code")
            ] }),
            /* @__PURE__ */ jsxs(Button, { size: "sm", variant: view === "preview" ? "secondary" : "ghost", onClick: () => setView("preview"), children: [
              /* @__PURE__ */ jsx(Eye, { className: "me-2 h-3 w-3" }),
              " ",
              t("editor.preview")
            ] }),
            view === "preview" && previewPages.length > 0 ? /* @__PURE__ */ jsx("select", { value: sandpackFiles[previewPath] ? previewPath : previewPages[0], onChange: (event) => setPreviewPath(event.target.value), className: "ms-2 h-8 max-w-44 rounded-md border border-input bg-background px-2 font-mono text-xs outline-none focus:ring-2 focus:ring-ring", children: previewPages.map((page) => /* @__PURE__ */ jsx("option", { value: page, children: page }, page)) }) : /* @__PURE__ */ jsx("span", { className: "ms-3 truncate font-mono text-xs text-muted-foreground", children: activeFile?.path ?? "" })
          ] }),
          activeFile && view === "code" && /* @__PURE__ */ jsx(Button, { size: "sm", variant: "outline", onClick: () => saveFile.mutate(), disabled: saveFile.isPending, children: t("editor.save") }),
          view === "preview" && previewSrcDoc && /* @__PURE__ */ jsxs(Button, { size: "sm", variant: "outline", onClick: openPreviewInNewTab, className: "gap-2", children: [
            /* @__PURE__ */ jsx(ExternalLink, { className: "h-3 w-3" }),
            " فتح"
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex-1 min-h-0", children: view === "code" ? activeFile ? /* @__PURE__ */ jsx(Editor, { height: "100%", theme: "light", language: activeFile.language ?? langFromPath(activeFile.path), value: draftContent, onChange: (v) => setDraftContent(v ?? ""), options: {
          fontSize: 13,
          minimap: {
            enabled: false
          },
          automaticLayout: true
        } }) : /* @__PURE__ */ jsx("div", { className: "flex h-full items-center justify-center text-sm text-muted-foreground", children: activeProjectId ? t("editor.no_file") : t("editor.no_project") }) : previewSrcDoc ? /* @__PURE__ */ jsx("div", { className: "flex h-full min-h-0 flex-col bg-background", children: /* @__PURE__ */ jsx("iframe", { title: "Live site preview", srcDoc: previewSrcDoc, sandbox: "allow-scripts allow-forms allow-popups allow-modals allow-same-origin", className: previewDeviceClass }, `${activeProjectId ?? "project"}:${previewPath}`) }) : /* @__PURE__ */ jsx("div", { className: "flex h-full items-center justify-center text-sm text-muted-foreground", children: t("editor.no_project") }) })
      ] }),
      /* @__PURE__ */ jsxs("aside", { className: `${mobilePane === "chat" ? "flex" : "hidden"} md:flex min-h-0 flex-col border-s border-border bg-card transition-all w-full ${chatOpen ? "md:w-96" : "md:w-12"}`, children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-border px-3 py-2 gap-2", children: [
          /* @__PURE__ */ jsxs("button", { onClick: () => setChatOpen((o) => !o), className: "flex items-center gap-2 text-sm font-semibold", children: [
            /* @__PURE__ */ jsx(MessageSquare, { className: "h-4 w-4 text-primary" }),
            (chatOpen || mobilePane === "chat") && /* @__PURE__ */ jsx("span", { children: t("editor.ai") })
          ] }),
          (chatOpen || mobilePane === "chat") && /* @__PURE__ */ jsxs(Button, { size: "sm", variant: "outline", onClick: quickNewProject, className: "h-7 gap-1 text-xs", children: [
            /* @__PURE__ */ jsx(Plus, { className: "h-3 w-3" }),
            " محادثة جديدة"
          ] })
        ] }),
        (chatOpen || mobilePane === "chat") && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs("div", { ref: chatScrollRef, className: "min-h-0 flex-1 space-y-3 overflow-auto overscroll-contain p-3", children: [
            chat.length === 0 && /* @__PURE__ */ jsx("div", { className: "rounded-lg bg-accent p-3 text-xs text-muted-foreground", children: t("editor.ai.placeholder") }),
            chat.map((m, i) => /* @__PURE__ */ jsxs("div", { className: `group rounded-lg p-3 text-sm ${m.role === "user" ? "bg-primary text-primary-foreground ms-6" : "bg-accent text-accent-foreground me-6"}`, children: [
              editingMessageIndex === i ? /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsx(Textarea, { value: editingMessageText, onChange: (event) => setEditingMessageText(event.target.value), className: "min-h-24 resize-none bg-background text-foreground", autoFocus: true }),
                /* @__PURE__ */ jsxs("div", { className: "flex justify-end gap-1", children: [
                  /* @__PURE__ */ jsx(Button, { size: "icon", variant: "ghost", className: "h-7 w-7", onClick: () => {
                    setEditingMessageIndex(null);
                    setEditingMessageText("");
                  }, children: /* @__PURE__ */ jsx(X, { className: "h-3 w-3" }) }),
                  /* @__PURE__ */ jsx(Button, { size: "icon", variant: "secondary", className: "h-7 w-7", onClick: () => saveEditedMessage(i), children: /* @__PURE__ */ jsx(Check, { className: "h-3 w-3" }) })
                ] })
              ] }) : /* @__PURE__ */ jsxs("pre", { className: "whitespace-pre-wrap break-words font-sans", children: [
                m.content,
                m.streaming && /* @__PURE__ */ jsx("span", { className: "ms-0.5 inline-block h-3 w-1.5 animate-pulse bg-current align-middle" })
              ] }),
              m.streaming && m.progress && /* @__PURE__ */ jsxs("div", { className: "mt-2 text-xs opacity-70 flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsx(Loader2, { className: "h-3 w-3 animate-spin" }),
                " ",
                m.progress
              ] }),
              !m.streaming && m.content && /* @__PURE__ */ jsxs("div", { className: "mt-2 flex gap-1 opacity-0 transition-opacity group-hover:opacity-100", children: [
                /* @__PURE__ */ jsx("button", { onClick: () => startEditMessage(i, m.content), className: "rounded p-1 hover:bg-background/30", title: "Edit", children: /* @__PURE__ */ jsx(Pencil, { className: "h-3 w-3" }) }),
                /* @__PURE__ */ jsx("button", { onClick: () => copyMsg(m.content), className: "rounded p-1 hover:bg-background/30", title: "Copy", children: /* @__PURE__ */ jsx(Copy, { className: "h-3 w-3" }) }),
                /* @__PURE__ */ jsx("button", { onClick: () => shareMsg(m.content), className: "rounded p-1 hover:bg-background/30", title: "Share", children: /* @__PURE__ */ jsx(Share2, { className: "h-3 w-3" }) })
              ] })
            ] }, i))
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border-t border-border p-3", children: [
            /* @__PURE__ */ jsx(Textarea, { rows: 3, placeholder: t("editor.ai.placeholder"), value: aiPrompt, onChange: (e) => setAiPrompt(e.target.value), onKeyDown: (e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                runAI();
              }
            }, className: "resize-none" }),
            /* @__PURE__ */ jsxs("div", { className: "mt-2 flex gap-2", children: [
              /* @__PURE__ */ jsxs(Button, { onClick: runAI, disabled: aiBusy || !aiPrompt.trim(), className: "flex-1 gap-2", children: [
                aiBusy ? /* @__PURE__ */ jsx(Loader2, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ jsx(Send, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsx(Sparkles, { className: "h-3 w-3" })
              ] }),
              aiBusy && /* @__PURE__ */ jsx(Button, { variant: "outline", onClick: stopAI, className: "gap-1", children: /* @__PURE__ */ jsx(Square, { className: "h-3 w-3" }) })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-[10px] text-muted-foreground", children: "Enter ↵ · Shift+Enter = newline" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("nav", { className: "flex md:hidden border-t border-border bg-card", children: [
      /* @__PURE__ */ jsxs("button", { onClick: () => setMobilePane("files"), className: `flex-1 py-2 text-xs flex flex-col items-center gap-0.5 ${mobilePane === "files" ? "text-primary font-semibold" : "text-muted-foreground"}`, children: [
        /* @__PURE__ */ jsx(FolderOpen, { className: "h-4 w-4" }),
        " الملفات"
      ] }),
      /* @__PURE__ */ jsxs("button", { onClick: () => setMobilePane("main"), className: `flex-1 py-2 text-xs flex flex-col items-center gap-0.5 ${mobilePane === "main" ? "text-primary font-semibold" : "text-muted-foreground"}`, children: [
        /* @__PURE__ */ jsx(Eye, { className: "h-4 w-4" }),
        " ",
        view === "preview" ? "معاينة" : "كود"
      ] }),
      /* @__PURE__ */ jsxs("button", { onClick: () => setMobilePane("chat"), className: `flex-1 py-2 text-xs flex flex-col items-center gap-0.5 ${mobilePane === "chat" ? "text-primary font-semibold" : "text-muted-foreground"}`, children: [
        /* @__PURE__ */ jsx(MessageSquare, { className: "h-4 w-4" }),
        " محادثة"
      ] })
    ] }),
    /* @__PURE__ */ jsx(Dialog, { open: publishSuccessOpen, onOpenChange: setPublishSuccessOpen, children: /* @__PURE__ */ jsxs(DialogContent, { className: "sm:max-w-md", children: [
      /* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsxs(DialogTitle, { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(Rocket, { className: "h-5 w-5 text-primary" }),
        " ✓ تم النشر بنجاح"
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "موقعك حي الآن على الإنترنت. انسخ الرابط وشاركه:" }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsx(Input, { readOnly: true, value: publishedUrl ?? "", className: "font-mono text-xs", onFocus: (e) => e.currentTarget.select() }),
          /* @__PURE__ */ jsx(Button, { size: "icon", variant: "outline", onClick: () => {
            if (publishedUrl) {
              navigator.clipboard.writeText(publishedUrl);
              toast.success("✓ نسخ");
            }
          }, title: "نسخ", children: /* @__PURE__ */ jsx(Copy, { className: "h-4 w-4" }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxs(Button, { className: "flex-1 gap-2", onClick: () => publishedUrl && window.open(publishedUrl, "_blank"), children: [
            /* @__PURE__ */ jsx(ExternalLink, { className: "h-4 w-4" }),
            " فتح في تبويب جديد"
          ] }),
          /* @__PURE__ */ jsxs(Button, { variant: "outline", className: "gap-2", onClick: () => {
            if (publishedUrl && navigator.share) navigator.share({
              url: publishedUrl
            }).catch(() => {
            });
          }, children: [
            /* @__PURE__ */ jsx(Share2, { className: "h-4 w-4" }),
            " مشاركة"
          ] })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  EditorPage as component
};
