import DownloadPdf from '@/src/components/pdf/DownloadPdf';
import PdfDocument from '@/src/components/pdf/document/PdfDocument';
import Template1 from '@/src/components/pdf/templates/Template1';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl font-mono text-sm">
        <div>start of doc</div>
        {/* <PdfDocument>
          <Template1 />
        </PdfDocument> */}
        <DownloadPdf document={<Template1 />} />
        <div>end of doc</div>
      </div>
    </main>
  );
}
