import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import {theme} from '@/shared/config/theme/theme';
import React from "react";
import {GlobalStyles} from "@/shared/config/theme/GlobalStyles";

type Props = {
    children: React.ReactNode;
};

export const ThemeProvider = ({ children }: Props) => {
    return (
        <EmotionThemeProvider theme={theme}>
            <GlobalStyles/>
            {children}
        </EmotionThemeProvider>
    );
};
