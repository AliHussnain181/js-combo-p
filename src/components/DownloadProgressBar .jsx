import { useState } from 'react';
import { IoMdDownload } from 'react-icons/io';

const DownloadProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);

  const startDownload = () => {
    setIsDownloading(true);
    const interval = setInterval(() => {
      setProgress(prevProgress => prevProgress + 10);
    }, 1000);

    setTimeout(() => {
      clearInterval(interval);
      setIsDownloading(false);
      setProgress(0);
    }, 10000);
  }

  return (
    <div className="bg-gray-100 p-5 rounded-md shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium">File Name</h3>
        <button className="flex items-center text-blue-500" onClick={startDownload}>
          <IoMdDownload className="mr-1" />
          Download
        </button>
      </div>
      {isDownloading && (
        <div className="h-3 bg-gray-200 rounded-md overflow-hidden">
          <div className="h-full bg-blue-500" style={{ width: `${progress}%` }}></div>
        </div>
      )}
    </div>
  );
}

export default DownloadProgressBar;
