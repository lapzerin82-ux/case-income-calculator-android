import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.bashar.caseincome",
  appName: "Case Income Calculator",
  webDir: "public",
  server: {
    url: "https://case-income-calculator.lapzerin82.chatgpt.site",
    cleartext: false
  },
  android: {
    allowMixedContent: false
  }
};

export default config;
