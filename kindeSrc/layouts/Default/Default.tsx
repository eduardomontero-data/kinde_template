"use server";

import React from "react";

type DefaultLayoutProps = {
  children: React.ReactNode;
};

export const DefaultLayout = ({
  children,
}: DefaultLayoutProps): React.JSX.Element => (
  <div className="auth-shell">
    <main className="auth-page" id="main">
      {children}
    </main>
  </div>
);
