import fs from "node:fs/promises";
import path from "node:path";
import { SpreadsheetFile, Workbook } from "@oai/artifact-tool";

const outputDir = path.resolve("outputs/po-tracker");
await fs.mkdir(outputDir, { recursive: true });

const workbook = Workbook.create();

const flows = [
  ["P0", "Onboarding / Registration", "REVIEW", "EXISTING / UI ONLY", "UI ONLY for current pilot, NEW LOGIC for changed auth rules", "DS ADAPT / DS MISSING", "experiments/app-ui-pilot/docs/onboarding-to-food-tracker-flow.md", "experiments/app-ui-pilot/src/components/recomp-ui.jsx", "App + System Architect", "Review prototype: welcome, role, goal, focus, baseline and guidance sequence"],
  ["P0", "Role Gate / Setup Required", "AS-IS REVIEW", "EXISTING", "UI ONLY / NEW LOGIC for changed role logic", "DS MISSING", "experiments/app-ui-pilot/docs/onboarding-to-food-tracker-flow.md", "Not implemented", "App + System Architect", "Clarify customer/coach/managed-user routing"],
  ["P0", "PreScreening / Baseline Required", "AS-IS REVIEW", "EXISTING", "UI ONLY / NEW LOGIC for changed required fields", "DS MISSING", "experiments/app-ui-pilot/docs/onboarding-to-food-tracker-flow.md", "Not implemented", "App + System Architect", "Validate screening/baseline gates"],
  ["P0", "Home / Daily Overview", "IMPLEMENTED", "UI ONLY in pilot, EXISTING direction from audit", "UI ONLY for current pilot, NEW LOGIC for real recommendation engine", "DS ADAPT", "experiments/app-ui-pilot/docs/home-daily-overview.md", "experiments/app-ui-pilot/src/components/recomp-ui.jsx", "App", "Review against professional guidance priority"],
  ["P0", "Home Nutrition Entry", "BACKLOG", "EXISTING / UI ONLY", "UI ONLY for entry card, NEW LOGIC for computed nutrition insight", "DS ADAPT / DS MISSING", "experiments/app-ui-pilot/docs/onboarding-to-food-tracker-flow.md", "Not implemented", "App", "Define entry from Home to Food Tracker"],
  ["P0", "Food Tracker", "AS-IS REVIEW", "EXISTING", "UI ONLY for redesign, NEW LOGIC for AI/pro review/request", "DS ADAPT / DS MISSING", "experiments/app-ui-pilot/docs/onboarding-to-food-tracker-flow.md", "Not implemented", "System Architect first", "Map old food tracker screens and August scope"],
  ["P0", "Professional Review / Consultation", "BACKLOG", "NEW LOGIC / service context", "NEW LOGIC unless external booking link only", "DS MISSING", "08_workflow/priority-roadmap.md", "Not implemented", "System Architect + Design System", "Decide booking/review behavior"],
  ["P1", "AI Coach", "FLOW MAPPED", "UI ONLY in pilot docs, NEW LOGIC for real AI", "NEW LOGIC for real AI/data access", "DS ADAPT", "experiments/app-ui-pilot/docs/ai-coach.md", "Not implemented", "App", "Reframe with AI + professional distinction"],
  ["P1", "Recovery Detail", "FLOW MAPPED", "UI ONLY in pilot docs", "NEW LOGIC for real recovery computation", "DS ADAPT", "experiments/app-ui-pilot/docs/recovery-detail.md", "Not implemented", "App", "Defer until Home/Food priority stabilizes"],
  ["P1", "Reports / Trends", "BACKLOG", "EXISTING", "UI ONLY for visual redesign, NEW LOGIC for new summaries", "DS ADAPT", "01_analysis/code-audit/critical-screens-matrix.md", "Not implemented", "System Architect", "Map report/trend families"],
  ["P1", "Body Check / Measurements", "BACKLOG", "EXISTING", "UI ONLY for redesign, NEW LOGIC for changed required fields", "DS ADAPT / DS MISSING", "01_analysis/code-audit/critical-screens-matrix.md", "Not implemented", "System Architect", "Map baseline/body check gates"],
  ["P1", "Training Plan", "BACKLOG", "EXISTING", "UI ONLY for redesign, NEW LOGIC for changed plan logic", "DS ADAPT / DS MISSING", "01_analysis/code-audit/critical-screens-matrix.md", "Not implemented", "System Architect", "Map training hierarchy"],
  ["P1", "Nutrition / Diet Plan", "BACKLOG", "EXISTING", "UI ONLY for redesign, NEW LOGIC for changed target logic", "DS ADAPT / DS MISSING", "01_analysis/code-audit/critical-screens-matrix.md", "Not implemented", "System Architect", "Separate diet plan from food tracking"],
  ["P1", "Chat / Human Guidance", "BACKLOG", "EXISTING", "UI ONLY for redesign, NEW LOGIC for AI/pro routing", "DS ADAPT / DS MISSING", "01_analysis/code-audit/critical-screens-matrix.md", "Not implemented", "System Architect", "Distinguish chat, AI coach and professional review"],
];

const columns = [
  "Priority",
  "Flow",
  "Status",
  "Evidence",
  "Backend Impact",
  "Design System",
  "Flow Doc",
  "Prototype / App Link",
  "Owner",
  "Next Step",
  "Approved Date",
  "Frozen Scope",
  "Notes",
];

const tracker = workbook.worksheets.add("Flow Tracker");
tracker.showGridLines = false;
tracker.freezePanes.freezeRows(4);
tracker.freezePanes.freezeColumns(2);

tracker.getRange("A1:M1").merge();
tracker.getRange("A1").values = [["RE-COMP Product Owner - App Flow Tracker"]];
tracker.getRange("A2:M2").merge();
tracker.getRange("A2").values = [["Editable working table for app priorities, status, backend impact, Design System dependency, links and approvals. Markdown source: experiments/app-ui-pilot/docs/app-flow-tracker.md"]];
tracker.getRange("A4:M4").values = [columns];
tracker.getRange(`A5:M${flows.length + 4}`).values = flows.map((row) => [...row, "", "", ""]);

tracker.getRange("A1:M2").format = {
  fill: "#0B0C0F",
  font: { color: "#FFFFFF", bold: true },
};
tracker.getRange("A1").format.font = { color: "#FFFFFF", bold: true, size: 18 };
tracker.getRange("A2").format.font = { color: "#C7CCD6", bold: false, size: 10 };
tracker.getRange("A4:M4").format = {
  fill: "#172033",
  font: { color: "#FFFFFF", bold: true },
  borders: { preset: "bottom", style: "medium", color: "#6EA8FF" },
};
tracker.getRange(`A5:M${flows.length + 4}`).format = {
  borders: { preset: "insideHorizontal", style: "thin", color: "#D8DDE8" },
  wrapText: true,
};
tracker.getRange("A:A").format.columnWidth = 10;
tracker.getRange("B:B").format.columnWidth = 30;
tracker.getRange("C:C").format.columnWidth = 18;
tracker.getRange("D:D").format.columnWidth = 26;
tracker.getRange("E:E").format.columnWidth = 42;
tracker.getRange("F:F").format.columnWidth = 22;
tracker.getRange("G:H").format.columnWidth = 44;
tracker.getRange("I:I").format.columnWidth = 24;
tracker.getRange("J:J").format.columnWidth = 46;
tracker.getRange("K:K").format.columnWidth = 16;
tracker.getRange("L:M").format.columnWidth = 28;
tracker.getRange(`A5:M${flows.length + 4}`).format.rowHeight = 44;

tracker.tables.add(`A4:M${flows.length + 4}`, true, "AppFlowTracker");

tracker.getRange(`A5:A${flows.length + 4}`).dataValidation = { rule: { type: "list", values: ["P0", "P1", "P2"] } };
tracker.getRange(`C5:C${flows.length + 4}`).dataValidation = { rule: { type: "list", values: ["BACKLOG", "AS-IS REVIEW", "FLOW MAPPED", "DESIGNING", "REVIEW", "APPROVED", "IMPLEMENTED", "FROZEN"] } };
tracker.getRange(`K5:K${flows.length + 4}`).setNumberFormat("yyyy-mm-dd");

const dashboard = workbook.worksheets.add("Dashboard");
dashboard.showGridLines = false;
dashboard.getRange("A1:H1").merge();
dashboard.getRange("A1").values = [["RE-COMP PO Dashboard"]];
dashboard.getRange("A2:H2").merge();
dashboard.getRange("A2").values = [["Current focus: preserve existing app logic, clarify onboarding to Food Tracker, and surface professional review as a premium differentiator."]];
dashboard.getRange("A1:H2").format = {
  fill: "#0B0C0F",
  font: { color: "#FFFFFF", bold: true },
};
dashboard.getRange("A4:B12").values = [
  ["Metric", "Value"],
  ["P0 flows", ""],
  ["Backlog", ""],
  ["As-is review", ""],
  ["In review", ""],
  ["Implemented", ""],
  ["Frozen", ""],
  ["August focus", "Food Tracker"],
  ["External deadline", new Date("2026-12-05")],
];
dashboard.getRange("B5").formulas = [[`=COUNTIF('Flow Tracker'!A5:A${flows.length + 4},"P0")`]];
dashboard.getRange("B6").formulas = [[`=COUNTIF('Flow Tracker'!C5:C${flows.length + 4},"BACKLOG")`]];
dashboard.getRange("B7").formulas = [[`=COUNTIF('Flow Tracker'!C5:C${flows.length + 4},"AS-IS REVIEW")`]];
dashboard.getRange("B8").formulas = [[`=COUNTIF('Flow Tracker'!C5:C${flows.length + 4},"REVIEW")`]];
dashboard.getRange("B9").formulas = [[`=COUNTIF('Flow Tracker'!C5:C${flows.length + 4},"IMPLEMENTED")`]];
dashboard.getRange("B10").formulas = [[`=COUNTIF('Flow Tracker'!C5:C${flows.length + 4},"FROZEN")`]];
dashboard.getRange("B12").setNumberFormat("yyyy-mm-dd");
dashboard.getRange("A4:B4").format = { fill: "#172033", font: { color: "#FFFFFF", bold: true } };
dashboard.getRange("A5:B12").format = { borders: { preset: "insideHorizontal", style: "thin", color: "#D8DDE8" } };
dashboard.getRange("A:A").format.columnWidth = 26;
dashboard.getRange("B:B").format.columnWidth = 22;

dashboard.getRange("D4:H4").values = [["Next Priority Path", "", "", "", ""]];
dashboard.getRange("D5:H12").values = [
  ["1", "Onboarding / Registration", "Review prototype", "UI ONLY + existing auth evidence", "App"],
  ["2", "Role Gate", "Clarify routing", "Possible NEW LOGIC if roles change", "System Architect"],
  ["3", "PreScreening / Baseline", "Validate gates", "Possible NEW LOGIC if required fields change", "System Architect"],
  ["4", "Home Nutrition Entry", "Connect Home to Food Tracker", "UI ONLY entry card, NEW LOGIC for insight", "App"],
  ["5", "Food Tracker", "Define August scope", "UI redesign plus AI/pro review implications", "System Architect first"],
  ["6", "Professional Review", "Decide booking/review behavior", "NEW LOGIC unless external booking link", "PO + System Architect"],
  ["", "", "", "", ""],
  ["Rule", "Every flow must show evidence, backend impact and DS dependency before design approval.", "", "", ""],
];
dashboard.getRange("D4:H4").format = { fill: "#172033", font: { color: "#FFFFFF", bold: true } };
dashboard.getRange("D5:H12").format = { borders: { preset: "insideHorizontal", style: "thin", color: "#D8DDE8" }, wrapText: true };
dashboard.getRange("D:D").format.columnWidth = 10;
dashboard.getRange("E:E").format.columnWidth = 30;
dashboard.getRange("F:F").format.columnWidth = 28;
dashboard.getRange("G:G").format.columnWidth = 42;
dashboard.getRange("H:H").format.columnWidth = 24;

const legend = workbook.worksheets.add("Legend");
legend.showGridLines = false;
legend.getRange("A1:D1").merge();
legend.getRange("A1").values = [["Tracker Legend"]];
legend.getRange("A1").format = { fill: "#0B0C0F", font: { color: "#FFFFFF", bold: true, size: 16 } };
legend.getRange("A3:D12").values = [
  ["Type", "Label", "Meaning", "Use"],
  ["Status", "BACKLOG", "Identified but not started", "Default for known future flows"],
  ["Status", "AS-IS REVIEW", "Existing app/audit/code is being reviewed", "Before redesign"],
  ["Status", "FLOW MAPPED", "Flow documented but not visually designed", "After mapping"],
  ["Status", "DESIGNING", "UI/prototype work in progress", "During App work"],
  ["Status", "REVIEW", "Ready for user review", "Before approval"],
  ["Status", "APPROVED", "Approved by user", "Before implementation/freeze"],
  ["Status", "IMPLEMENTED", "Present in app pilot", "After coded prototype"],
  ["Status", "FROZEN", "Do not change without UNFREEZE", "After approval lock"],
  ["Evidence", "EXISTING / UI ONLY / NEW LOGIC", "Backend-preserving clarity labels", "Mandatory before design"],
];
legend.getRange("A3:D3").format = { fill: "#172033", font: { color: "#FFFFFF", bold: true } };
legend.getRange("A4:D12").format = { borders: { preset: "insideHorizontal", style: "thin", color: "#D8DDE8" }, wrapText: true };
legend.getRange("A:D").format.columnWidth = 28;

const preview = await workbook.render({ sheetName: "Flow Tracker", autoCrop: "all", scale: 1, format: "png" });
await fs.writeFile(path.join(outputDir, "flow-tracker-preview.png"), new Uint8Array(await preview.arrayBuffer()));

const inspect = await workbook.inspect({
  kind: "table",
  range: "Flow Tracker!A4:M18",
  include: "values,formulas",
  tableMaxRows: 16,
  tableMaxCols: 13,
  maxChars: 4000,
});
console.log(inspect.ndjson);

const errors = await workbook.inspect({
  kind: "match",
  searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",
  options: { useRegex: true, maxResults: 100 },
  summary: "final formula error scan",
});
console.log(errors.ndjson);

const xlsx = await SpreadsheetFile.exportXlsx(workbook);
await xlsx.save(path.join(outputDir, "RE-COMP_App_Flow_Tracker.xlsx"));
