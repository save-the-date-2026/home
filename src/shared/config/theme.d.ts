import '@emotion/react';
import type { AppTheme } from 'shared/config/theme/theme.ts';

declare module '@emotion/react' {
    export interface Theme extends AppTheme {}
}
