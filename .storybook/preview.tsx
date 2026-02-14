import React, { useEffect } from "react"
import type { Preview } from "@storybook/react-vite"
import { ChakraProvider } from "@chakra-ui/react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { createMemoryHistory, createRootRoute, createRouter, RouterProvider } from "@tanstack/react-router"
import { ThemeModeProvider } from "../src/styles/ThemeModeContext"
import system from "../src/theme/theme"
import { withPalette } from "../src/styles/PaletteContext"
import { useDarkMode } from "@vueless/storybook-dark-mode"
import "../src/styles/tailwind.css"
import "../src/config/i18n"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: false, staleTime: Infinity },
  },
})

/**
 * Syncs the dark mode toolbar toggle with the `class` attribute on <html>,
 * which is what next-themes / Chakra's _dark semantic tokens read.
 */
const DarkModeSync = ({ children }: { children: React.ReactNode }) => {
  const isDark = useDarkMode()

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light")
    document.documentElement.style.colorScheme = isDark ? "dark" : "light"
  }, [isDark])

  return <>{children}</>
}

export const decorators = [
  (Story: any) => {
    const rootRoute = createRootRoute({
        component: Story,
    })
    const router = createRouter({
        routeTree: rootRoute,
        history: createMemoryHistory(),
    })
    return <RouterProvider router={router} />
  },
  (Story: any) => (
    <ChakraProvider value={system}>
      <ThemeModeProvider>
        <QueryClientProvider client={queryClient}>
          <DarkModeSync>
            {withPalette(<Story />)}
          </DarkModeSync>
        </QueryClientProvider>
      </ThemeModeProvider>
    </ChakraProvider>
  ),
]

export const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    darkMode: {
      classTarget: "html",
      stylePreview: true,
    },
  },
  decorators: decorators,
}
