import { DashboardLayout } from '../../components/layout/DashboardLayout';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface UploadedFile {
  id: string;
  name: string;
  size: number;
  type: string;
}

const formatBytes = (bytes: number) => {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

const fileIcon = (type: string) => {
  if (type.startsWith('image/')) return 'image';
  if (type === 'application/pdf') return 'picture_as_pdf';
  return 'description';
};

export const MobileDocumentUpload: React.FC = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [patient, setPatient] = useState('');
  const [category, setCategory] = useState('lab');
  const [notes, setNotes] = useState('');
  const [uploading, setUploading] = useState(false);

  const addFiles = (newFiles: FileList | null) => {
    if (!newFiles) return;
    const mapped: UploadedFile[] = Array.from(newFiles).map((f) => ({
      id: `${f.name}-${f.size}-${Date.now()}-${Math.random()}`,
      name: f.name,
      size: f.size,
      type: f.type,
    }));
    setFiles((prev) => [...prev, ...mapped]);
  };

  const removeFile = (id: string) => {
    setFiles((prev) => prev.filter((f) => f.id !== id));
  };

  const handleUpload = () => {
    if (files.length === 0) {
      fileInputRef.current?.click();
      return;
    }
    setUploading(true);
    setTimeout(() => {
      setUploading(false);
      navigate('/doctor/records');
    }, 1200);
  };

  return (
    <DashboardLayout title="Upload Document" showSearch={true}>
      <main className="flex-1 p-4 flex flex-col gap-6 max-w-2xl w-full mx-auto">

        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept=".pdf,.jpg,.jpeg,.png"
          className="hidden"
          onChange={(e) => addFiles(e.target.files)}
        />

        <section>
          <div className="mb-2">
            <h2 className="text-lg font-bold text-[#171c20]">Secure File Upload</h2>
            <p className="text-sm text-[#3e4850] mt-1">Select or drag & drop patient records, lab results, or imaging files.</p>
          </div>
          <div
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-[#bec8d2] hover:border-[#0ea5e9] bg-white rounded-xl p-6 flex flex-col items-center justify-center gap-4 transition-all duration-300 cursor-pointer shadow-sm relative overflow-hidden active:scale-95"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#f6faff] to-white opacity-50 z-0" />
            <div className="w-16 h-16 rounded-full bg-[#f0f4fa] flex items-center justify-center z-10">
              <span className="material-symbols-outlined text-[32px] text-[#0EA5E9]">cloud_upload</span>
            </div>
            <div className="text-center z-10">
              <span className="text-base font-semibold text-[#0EA5E9] block mb-1">Tap to browse files</span>
              <span className="text-sm text-[#3e4850]">or drop files here</span>
            </div>
            <div className="flex gap-2 mt-2 z-10">
              <span className="text-[10px] font-semibold text-[#6e7881] bg-[#f0f4fa] px-2 py-1 rounded-md border border-[#bec8d2]/30">PDF, JPG, PNG</span>
              <span className="text-[10px] font-semibold text-[#6e7881] bg-[#f0f4fa] px-2 py-1 rounded-md border border-[#bec8d2]/30">Max 50MB</span>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-sm border border-[#bec8d2]/30 p-4">
          <div className="flex justify-between items-center mb-4 border-b border-[#bec8d2]/30 pb-2">
            <h3 className="text-base font-bold text-[#171c20]">Selected Files</h3>
            <span className="text-xs font-semibold text-[#0ea5e9] bg-[#0ea5e9]/10 px-2 py-1 rounded-full">{files.length} files</span>
          </div>
          {files.length === 0 ? (
            <p className="text-sm text-[#6e7881] text-center py-6">No files selected. Tap the upload zone above.</p>
          ) : (
            <div className="space-y-3">
              {files.map((f) => (
                <div key={f.id} className="flex items-center justify-between p-3 bg-[#f0f4fa] rounded-lg border border-[#bec8d2]/30">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm shrink-0 text-[#0EA5E9]">
                      <span className="material-symbols-outlined text-[20px]">{fileIcon(f.type)}</span>
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-sm font-semibold text-[#171c20] truncate">{f.name}</p>
                      <p className="text-xs text-[#6e7881]">{formatBytes(f.size)}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFile(f.id)}
                    className="text-[#3e4850] hover:text-[#ba1a1a] p-1 shrink-0"
                  >
                    <span className="material-symbols-outlined text-[18px]">close</span>
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>

        <section className="bg-white rounded-xl shadow-sm border border-[#bec8d2]/30 p-4 space-y-4">
          <h3 className="text-base font-bold text-[#171c20]">Details</h3>

          <div>
            <label className="block text-xs font-semibold text-[#171c20] mb-1.5 uppercase tracking-wider">Patient</label>
            <div className="relative">
              <select
                value={patient}
                onChange={(e) => setPatient(e.target.value)}
                className="w-full bg-[#f6faff] border border-[#bec8d2] rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]/50 appearance-none"
              >
                <option value="">Search patient...</option>
                <option value="eleanor">Eleanor Vance (ID: #9842-A)</option>
                <option value="robert">Robert Chen (ID: #3321-B)</option>
              </select>
              <span className="material-symbols-outlined absolute right-3 top-2.5 text-[#6e7881] pointer-events-none">expand_more</span>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#171c20] mb-1.5 uppercase tracking-wider">Category</label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setCategory('lab')}
                className={`flex items-center justify-center border py-2 rounded-lg cursor-pointer text-sm font-semibold transition-colors ${
                  category === 'lab' ? 'border-[#0ea5e9] bg-[#0ea5e9]/10 text-[#0EA5E9]' : 'border-[#bec8d2] bg-white text-[#3e4850]'
                }`}
              >
                Lab Results
              </button>
              <button
                onClick={() => setCategory('imaging')}
                className={`flex items-center justify-center border py-2 rounded-lg cursor-pointer text-sm font-semibold transition-colors ${
                  category === 'imaging' ? 'border-[#0ea5e9] bg-[#0ea5e9]/10 text-[#0EA5E9]' : 'border-[#bec8d2] bg-white text-[#3e4850]'
                }`}
              >
                Imaging
              </button>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#171c20] mb-1.5 uppercase tracking-wider">Notes</label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full bg-[#f6faff] border border-[#bec8d2] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]/50 min-h-[80px]"
              placeholder="Add remarks..."
            />
          </div>
        </section>

        <button
          onClick={handleUpload}
          disabled={uploading}
          className="w-full bg-[#0EA5E9] text-white font-bold py-3.5 rounded-xl shadow-md hover:bg-[#0EA5E9]/90 active:scale-95 transition-all flex items-center justify-center gap-2 mb-4 disabled:opacity-60"
        >
          {uploading ? (
            <>
              <span className="material-symbols-outlined animate-spin">progress_activity</span>
              Uploading...
            </>
          ) : (
            <>
              <span className="material-symbols-outlined">cloud_upload</span>
              Confirm Upload
            </>
          )}
        </button>

      </main>
    </DashboardLayout>
  );
};
