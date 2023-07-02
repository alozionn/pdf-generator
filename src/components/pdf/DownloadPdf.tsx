'use client';

import { PDFDownloadLink } from '@react-pdf/renderer';

const DownloadPdf = ({ document }: { document: any }) => {
  return (
    <>
      download
      <PDFDownloadLink document={document} />
      {/* <PDFDownloadLink document={<></>} /> */}
    </>
  );
};

export default DownloadPdf;
