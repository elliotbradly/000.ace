'use client'

import { useState } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from '@mantine/core';

export default function Providers({ children }: { children: React.ReactNode }) {

    const [queryClient] = useState(() => new QueryClient({
        defaultOptions: {
            //       queries:{staleTime:6*1000, refetchInterval:6*1000}
        }
    }))

    return (

        <QueryClientProvider client={queryClient}>
            <MantineProvider>{children}</MantineProvider>
        </QueryClientProvider>
    )


}