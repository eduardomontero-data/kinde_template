"use server";

import {
  getKindeRegisterUrl,
  getKindeSignInUrl,
  getKindeWidget,
} from "@kinde/infrastructure";
import React from "react";
import { DolphBrand } from "../DolphBrand/DolphBrand";

export type AuthFlow = "login" | "register";

type WidgetCardProps = {
  /** Título de la página (p. ej. «Sign in») — suele venir del contenido de Kinde. */
  heading: string;
  flow: AuthFlow;
};

export const WidgetCard: React.FC<WidgetCardProps> = ({ heading, flow }) => {
  const isLogin = flow === "login";

  return (
    <article className="auth-card">
      <header className="auth-card__header">
        <DolphBrand />
        <h1 className="auth-card__title">{heading}</h1>
      </header>

      <div className="auth-widget-host">{getKindeWidget()}</div>

      <footer className="auth-card__footer">
        {isLogin ? (
          <p className="auth-card__footer-text">
            No account?{" "}
            <a className="auth-card__link" href={getKindeRegisterUrl()}>
              Create one
            </a>
          </p>
        ) : (
          <p className="auth-card__footer-text">
            Already have an account?{" "}
            <a className="auth-card__link" href={getKindeSignInUrl()}>
              Sign in
            </a>
          </p>
        )}
      </footer>
    </article>
  );
};
