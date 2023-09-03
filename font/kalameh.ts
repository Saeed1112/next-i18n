import localFont from "next/font/local";

export const KalamehFont = localFont({
  variable: "--font-kalameh",
  src: [
    {
      path: "fonts/woff2/KalamehWebNoEn-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "fonts/woff2/KalamehWebNoEn-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "fonts/woff2/KalamehWebNoEn-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "fonts/woff2/KalamehWebNoEn-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "fonts/woff2/KalamehWebNoEn-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "fonts/woff2/KalamehWebNoEn-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "fonts/woff2/KalamehWebNoEn-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "fonts/woff2/KalamehWebNoEn-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "fonts/woff2/KalamehWebNoEn-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  display: "swap",
  adjustFontFallback: false,
});
