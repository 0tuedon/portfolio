import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    primary: "#539f55",
    secondary: "#13161d",
    "base-bg": "#F5F5F5",
    gray: {
      25: "#FCFCFD",
      100: "#F2F4F7",
      50: "#F9FAFB",
      200: "#C2C6CE",
      300: "#D0D5DD",
      500: "#667085",
      600: "#475467",
      700: "#344054",
      800: "#1D2939",
      900: "#101828",
    },
    error: { 500: "#F04438", 600: "#D92D20" },
  },
  shadows: {
    outline: "0 0 0 1px #539f55",
  },
  fonts: {
    heading: `'Courier Prime', monospace`,
    body: `Khand', monospace;`,
  },
  lineHeight: {
    "leading-box-h": "120%",
  },
  components: {
    Input: {
      defaultProps: {
        focusBorderColor: "#539F55",
      },
      baseStyle: {
        field: {
          _invalid: {
            border: "0.5px solid",
            borderColor: "#FF5100",
            bg: "rgba(255, 81, 0, 0.08)",
          },
        },
      },
      variants: {
        outline: {
          field: {
            borderRadius: "base",
          },
        },
      },
    },
    Select: {
      defaultProps: {
        focusBorderColor: "#539F55",
      },
      variants: {
        outline: {
          field: {
            borderRadius: "base",
          },
        },
      },
    },
    Textarea: {
      defaultProps: {
        focusBorderColor: "#539F55",
      },
    },
    Button: {
      baseStyle: {
        borderRadius: "base",
      },
    },
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
});
