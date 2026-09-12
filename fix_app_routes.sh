#!/bin/bash
sed -i 's/import { RateEnginePage } from ".\/pages\/RateEnginePage";/import { RateEnginePage } from ".\/pages\/RateEnginePage";\nimport { LogisticsDashboardPage } from ".\/pages\/LogisticsDashboardPage";/' src/App.tsx
sed -i 's/<Route path="\/rates" element={<RateEnginePage \/>} \/>/<Route path="\/rates" element={<RateEnginePage \/>} \/>\n        <Route path="\/dashboard" element={<LogisticsDashboardPage \/>} \/>/' src/App.tsx
