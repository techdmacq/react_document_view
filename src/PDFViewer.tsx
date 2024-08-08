

import React, { useEffect } from 'react';

const PDFViewer: React.FC = () => {
  useEffect(() => {
    const viewerContainer = document.getElementById('pdf-viewer');
     
    if (viewerContainer) {
      const existingIframe = viewerContainer.querySelector('iframe');
      if (existingIframe) {
          viewerContainer.removeChild(existingIframe);
      }

      const iframe = document.createElement('iframe');

      iframe.src = `${process.env.PUBLIC_URL}/pdfjs/web/viewer.html?file=${process.env.PUBLIC_URL}/pdfs/rfc7540.pdf`;

      iframe.allowFullscreen = true;
      iframe.width = '100%';
      iframe.height = '1000px';

      viewerContainer.appendChild(iframe);

      console.log(`${process.env.PUBLIC_URL}/pdfjs/web/viewer.html?file=${process.env.PUBLIC_URL}/pdfs/rfc7540.pdf`);
  } else {
      console.error('viewerContainer element not found');
  }
  }, []);

  return (
    <div id="pdf-viewer"  style={{ width: '100%', height: '100vh' }} >

    </div>
  );
};

export default PDFViewer;


