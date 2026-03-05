declare module '@/components/GridScan' {
  import type { CSSProperties } from 'react';

  export interface GridScanProps {
    enableWebcam?: boolean;
    showPreview?: boolean;
    className?: string;
    style?: CSSProperties;
    [key: string]: unknown;
  }

  export const GridScan: (props: GridScanProps) => JSX.Element;
}
