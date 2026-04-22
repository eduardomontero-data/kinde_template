import type { KindePageEvent } from "./kinde-infrastructure-stub";

const baseRequest: KindePageEvent["request"] = {
  authUrlParams: {
    orgCode: "org_localpreview",
    state: "local",
    clientId: "client_local",
    redirectUri: "http://localhost:5173/",
  },
  locale: { isRtl: false, lang: "en" },
  route: {
    context: "login",
    flow: "login",
    path: "auth",
  },
};

export const mockLoginEvent: KindePageEvent = {
  context: {
    widget: {
      content: {
        page_title: "DOLPH CLOUD · Sign in",
        heading: "Sign in",
        description: "",
        logo_alt: "DOLPH CLOUD",
      },
    },
  },
  request: baseRequest,
};

export const mockRegisterEvent: KindePageEvent = {
  context: {
    widget: {
      content: {
        page_title: "DOLPH CLOUD · Sign up",
        heading: "Create account",
        description: "",
        logo_alt: "DOLPH CLOUD",
      },
    },
  },
  request: {
    ...baseRequest,
    route: {
      context: "register",
      flow: "register",
      path: "auth",
    },
  },
};
