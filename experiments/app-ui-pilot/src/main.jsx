import React from "react";
import { createRoot } from "react-dom/client";
import { AppPilot } from "./AppPilot.jsx";
import { HomeContrastLab } from "./HomeContrastLab.jsx";
import { HomeOpenGaugeConcept } from "./HomeOpenGaugeConcept.jsx";
import { HomeRecoveryLab } from "./HomeRecoveryLab.jsx";
import "./styles.css";

const params = new URLSearchParams(window.location.search);
const surface = params.get("surface");

createRoot(document.getElementById("root")).render(
  surface === "home-recovery-lab" ? (
    <HomeRecoveryLab />
  ) : surface === "home-card-contrast-lab" ? (
    <HomeContrastLab />
  ) : surface === "home-open-gauge-concept" ? (
    <HomeOpenGaugeConcept />
  ) : (
    <AppPilot />
  ),
);
