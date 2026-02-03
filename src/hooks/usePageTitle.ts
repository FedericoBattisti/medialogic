import { useEffect } from 'react';

const usePageTitle = (title: string) => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title ? `${title} | MedialogicAI` : 'MedialogicAI - Intelligent Process Automation';
    
    return () => {
      document.title = previousTitle;
    };
  }, [title]);
};

export default usePageTitle;
