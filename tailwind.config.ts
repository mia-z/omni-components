import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
import plugin from "tailwindcss/plugin";
import typography from "@tailwindcss/typography";

export default {
    content: [
        "src/**/*.svelte"
    ],
    darkMode: "class",
    theme: {
        extend: {
            // colors: {
            //     "primary": {
            //         DEFAULT: colors.indigo[500],
            //         "hover": colors.indigo[400],
            //         "focus": colors.indigo[600],
            //         "active": colors.indigo[600],
            //         "text": colors.gray[100]
            //     },
            //     "secondary": {

            //     },
            //     "tertiary": {

            //     },
            //     "hover": {

            //     },
            //     "success": {

            //     },
            //     "error": {

            //     }
            // },
            spacing: {
                128: "32rem",
                144: "36rem",
                160: "40rem",
                176: "44rem",
                192: "48rem",
                208: "52rem"
            },
            fontFamily: {
                "lobster": ["Lobster", "cursive"],
                "open-sans": ["Open Sans", "sans-serif"],
                "roboto": ["Roboto Flex", "sans-serif"],
                "roboto-monospace": ["Roboto Mono", "monospace"],
                "wix-madefor-text": ["Wix Madefor Text", "sans-serif"],
                "nunito": ["Nunito Sans", "sans-serif"],
                sans: [
                    "-apple-system",
                    "BlinkMacSystemFont",
                    "Segoe UI",
                    "Roboto",
                    "Oxygen",
                    "Ubuntu",
                    "Cantarell",
                    "Fira Sans",
                    "Droid Sans",
                    "Helvetica Neue",
                    "Arial",
                    "sans-serif",
                    "Apple Color Emoji",
                    "Segoe UI Emoji",
                    "Segoe UI Symbol",
                ],
                mono: [
                    "ui-monospace",
                    "SFMono-Regular",
                    "SF Mono",
                    "Menlo",
                    "Consolas",
                    "Liberation Mono",
                    "monospace",
                ],
            },
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        code: {
                            position: "relative",
                            borderRadius: theme("borderRadius.md"),
                        }
                    }
                }
            })
        }
    },
    plugins: [
        typography,
        plugin(function ({ addVariant, matchUtilities, theme }) {
            addVariant("hocus", ["&:hover", "&:focus"]);
            matchUtilities(
                {
                    square: (value) => ({
                        width: value,
                        height: value,
                    }),
                },
                { 
                    values: theme("spacing") 
                }
            );
        }),
    ],
} satisfies Config;
    
    