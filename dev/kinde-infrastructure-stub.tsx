import React from "react";

/** Subset of Kinde types for local preview only. */
export type KindePageEvent = {
  context: {
    widget: {
      content: {
        page_title: string;
        heading: string;
        description: string;
        logo_alt: string;
      };
    };
  };
  request: {
    authUrlParams: {
      orgCode: `org_${string}`;
      state: string;
      clientId: string;
      redirectUri: string;
    };
    locale: { isRtl: boolean; lang: string };
    route: {
      context: string;
      flow: "register" | "login";
      path: "auth" | "account" | "/";
    };
  };
};

export const getKindeWidget = () => (
  <div
    style={{
      minHeight: 200,
      border: "1px dashed #cbd5e1",
      borderRadius: 12,
      display: "grid",
      placeItems: "center",
      padding: 20,
      color: "#64748b",
      fontSize: 13,
      textAlign: "center",
      background: "#f8fafc",
    }}
  >
    En Kinde aparece aquí el widget real (Google / LinkedIn / Microsoft, email y
    Continue). En local solo es un marcador.
  </div>
);

export const getKindeNonce = () => "@nonce@";
export const getKindeRequiredCSS = () => null;
export const getKindeRequiredJS = () => null;
export const getKindeCSRF = () => "local-preview";
export const getKindeRegisterUrl = () => "#register";
export const getKindeSignUpUrl = () => "#register";
export const getKindeLoginUrl = () => "#login";
export const getKindeSignInUrl = () => "#login";

const demoLogo =
  "https://asset.kindedemo.com/orbit/aac433a14500955ae1c8641e71da2076.jpeg";

export const getLogoUrl = () => demoLogo;
export const getDarkModeLogoUrl = () => demoLogo;
export const getSVGFaviconUrl = () =>
  "data:image/svg+xml," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="%23C1AFEF"/><text x="16" y="21" text-anchor="middle" font-size="14" fill="%23000">K</text></svg>`,
  );
export const getFallbackFaviconUrl = () => getSVGFaviconUrl();
