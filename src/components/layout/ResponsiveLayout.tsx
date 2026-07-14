import React, { useState, useEffect } from 'react';

interface ResponsiveLayoutProps {
  desktopComponent: React.FC;
  mobileComponent: React.FC;
}

export const ResponsiveLayout: React.FC<ResponsiveLayoutProps> = ({
  desktopComponent: DesktopComponent,
  mobileComponent: MobileComponent,
}) => {
  // Use screen.width (physical pixels, zoom-immune) rather than innerWidth
  // (CSS pixels) so that zooming in/out on a desktop never accidentally
  // triggers the mobile layout. 768px physical is a reliable tablet cutoff.
  const getIsMobile = () => window.screen.width < 768;

  const [isMobile, setIsMobile] = useState(getIsMobile);

  useEffect(() => {
    // screen.width doesn't change on resize (only on display change), but we
    // still listen to resize in case the user moves the window to a different
    // monitor with a different resolution.
    const handleResize = () => setIsMobile(getIsMobile());

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile ? <MobileComponent /> : <DesktopComponent />;
};
