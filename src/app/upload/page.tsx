import UploadForm from '@/components/UploadForm';

// The main UploadPage component that renders the UploadForm.
export default function UploadPage() {
  return (
    <main className="min-h-screen p-8 bg-gray-100 flex flex-col items-center justify-center font-sans">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Upload Video for AI Analysis</h1>
        <p className="text-lg text-gray-700">Upload your video to analyze key moments using AI.</p>
      </div>
      <UploadForm />
    </main>
  );
}