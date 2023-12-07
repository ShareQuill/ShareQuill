import React, { useState } from 'react';
import { useAuth } from '../../hooks/authRedirectHook';


export default function AppHeader() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const auth = useAuth();

  const handleOffcanvasToggle = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  return (
    <div>
      
    </div>
  );
}
