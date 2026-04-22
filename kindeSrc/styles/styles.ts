// Tema claro + acentos alineados al diseño Figma (DOLPH CLOUD).
const kindeSettings = {
  baseFontFamily:
    'Inter, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  controlSelectTextBorderRadius: "0.625rem",
  buttonPrimaryBackgroundColor: "#673AB7",
  buttonPrimaryColor: "#ffffff",
  buttonBorderRadius: "0.625rem",
  buttonSecondaryBackgroundColor: "#ffffff",
  buttonSecondaryBorderWidth: "0.0625rem",
  buttonSecondaryBorderColor: "#D1D5DB",
  buttonSecondaryBorderStyle: "solid",
  buttonSecondaryBorderRadius: "0.625rem",
} as const;

export const getStyles = (): string => `
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");

  :root {
    --dolph-bg: #F1F1F2;
    --dolph-card: #ffffff;
    --dolph-text: #111827;
    --dolph-muted: #6b7280;
    --dolph-border: #e5e7eb;
    --dolph-primary: #673AB7;
    --dolph-primary-hover: #522E91;
    --kinde-base-font-family: ${kindeSettings.baseFontFamily};
    --kinde-control-select-text-border-radius: ${kindeSettings.controlSelectTextBorderRadius};
    --kinde-button-primary-background-color: ${kindeSettings.buttonPrimaryBackgroundColor};
    --kinde-button-primary-color: ${kindeSettings.buttonPrimaryColor};
    --kinde-button-border-radius: ${kindeSettings.buttonBorderRadius};
    --kinde-button-secondary-background-color: ${kindeSettings.buttonSecondaryBackgroundColor};
    --kinde-button-secondary-border-width: ${kindeSettings.buttonSecondaryBorderWidth};
    --kinde-button-secondary-border-color: ${kindeSettings.buttonSecondaryBorderColor};
    --kinde-button-secondary-border-style: ${kindeSettings.buttonSecondaryBorderStyle};
    --kinde-button-secondary-border-radius: ${kindeSettings.buttonSecondaryBorderRadius};
    --kinde-control-label-color: #374151;
    --kinde-control-label-font-weight: 500;
    --kinde-button-font-weight: 600;
    --kinde-control-select-text-border-color: #d1d5db;
    --kinde-choice-separator-color: #d1d5db;
    --kinde-base-background-color: #ffffff;
    --kinde-base-text-color: #111827;
    --kinde-base-link-color: var(--dolph-primary);
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    min-height: 100vh;
    background: var(--dolph-bg);
    color: var(--dolph-text);
    font-family: var(--kinde-base-font-family);
    -webkit-font-smoothing: antialiased;
  }

  [data-kinde-root="true"] {
    min-height: 100vh;
  }

  .auth-shell {
    min-height: 100vh;
  }

  .auth-page {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem 1rem;
  }

  .auth-card {
    width: 100%;
    max-width: 30rem;
    background: var(--dolph-card);
    border-radius: 0.5rem;
    padding: 2.25rem 2rem 1.75rem;
    box-shadow:
      0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.06),
      0 1.25rem 2.5rem -1.5rem rgba(15, 23, 42, 0.18);
  }

  .auth-card__header {
    text-align: center;
    margin-bottom: 1.5rem;
  }

  .dolph-brand {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.625rem;
    color: var(--dolph-text);
    margin-bottom: 3.125rem;
  }

  .dolph-brand__logo {
    display: block;
    width: min(100%, 12rem);
    height: auto;
    object-fit: contain;
  }

  .auth-card__title {
    margin: 0;
    font-size: 1.375rem;
    font-weight: 600;
    letter-spacing: -0.02em;
    color: var(--dolph-text);
  }

  .auth-widget-host {
    margin-top: 0.5rem;
  }

  .auth-card__footer {
    margin-top: 1.75rem;
    text-align: center;
  }

  .auth-card__footer-text {
    margin: 0;
    font-size: 0.875rem;
    font-weight: 300;
    color: var(--dolph-muted);
  }

  .auth-card__link {
    color: var(--dolph-primary);
    font-weight: 300;
    text-decoration: none;
  }

  .auth-card__link:hover {
    color: var(--dolph-primary-hover);
    text-decoration: underline;
  }

  /* Social row: tres botones en línea, estilo Figma */
  [data-kinde-layout-auth-buttons] {
    display: flex;
    flex-direction: row;
    gap: 0.75rem;
    justify-content: stretch;
    margin-bottom: 1.25rem;
  }

  [data-kinde-layout-auth-buttons-item] {
    flex: 1;
    min-width: 0;
  }

  [data-kinde-layout-auth-buttons-item] a,
  [data-kinde-layout-auth-buttons-item] button {
    width: 100%;
    min-height: 3rem;
    border-radius: 0.625rem !important;
    border: 0.0625rem solid var(--dolph-border) !important;
    background: #fff !important;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  [data-kinde-layout-auth-buttons] [data-kinde-button-text] {
    block-size: 0.0625rem;
    clip-path: inset(50%);
    inline-size: 0.0625rem;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
  }

  .kinde-branding a {
    color: var(--dolph-primary);
  }

  [data-kinde-fallback-action] {
    block-size: 0.0625rem;
    clip-path: inset(50%);
    inline-size: 0.0625rem;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
  }

  /* Separador «Or» y bloque de formulario dentro del widget */
  [data-kinde-separator-text],
  [data-kinde-choice-separator] {
    color: var(--dolph-muted);
    font-size: 0.8125rem;
  }

  [data-kinde-button-variant="primary"],
  button[type="submit"][data-kinde-button-variant="primary"] {
    width: 100%;
    min-height: 3rem;
    border-radius: 0.625rem !important;
  }

  input[type="email"],
  input[type="text"],
  input[type="password"] {
    border-radius: 0.625rem !important;
    border-color: var(--dolph-border) !important;
    background: #fff !important;
  }
`;
