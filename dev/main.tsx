import React, { useMemo } from "react";
import { createRoot } from "react-dom/client";
import { renderToString } from "react-dom/server.browser";
import { Root } from "../kindeSrc/root";
import { DefaultLayout } from "../kindeSrc/layouts/Default/Default";
import { WidgetCard } from "../kindeSrc/components/WidgetCard/WidgetCard";
import { mockLoginEvent, mockRegisterEvent } from "./mock-events";

type PageMode = "login" | "register";

function PreviewFrame({ mode }: { mode: PageMode }) {
  const event = mode === "register" ? mockRegisterEvent : mockLoginEvent;

  const srcDoc = useMemo(() => {
    const inner = renderToString(
      <Root context={event.context} request={event.request}>
        <DefaultLayout>
          <WidgetCard
            flow={event.request.route.flow}
            heading={event.context.widget.content.heading}
          />
        </DefaultLayout>
      </Root>,
    );
    return `<!DOCTYPE html>${inner}`;
  }, [event, mode]);

  return (
    <iframe
      srcDoc={srcDoc}
      title="Kinde custom UI preview"
      style={{
        width: "100%",
        height: "100vh",
        border: 0,
        display: "block",
        background: "#F1F1F2",
      }}
    />
  );
}

function App() {
  const mode: PageMode =
    new URLSearchParams(window.location.search).get("page") === "register"
      ? "register"
      : "login";

  return <PreviewFrame mode={mode} />;
}

const el = document.getElementById("root");
if (el) {
  createRoot(el).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
