import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
// não tenho a necessidade do proxy, porconta de só estar fazendo um método GET
