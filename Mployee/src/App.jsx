import { useState, useEffect } from 'react';
import JobList from './components/JobList';
import JobDetails from './components/JobDetails';
import './App.css';

function App() {
  const [jobs, setJobs] = useState([]);
  const [selectedJobId, setSelectedJobId] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showMobileDetails, setShowMobileDetails] = useState(false);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0); // ✅ missing in your code
  const [searchLocation, setSearchLocation] = useState('');
  const apiBaseUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${apiBaseUrl}/jobs?location=${searchLocation}&page=${page}&limit=20`);

        const data = await res.json();

        const normalizedJobs = data.jobs.map(job => ({
          ...job,
          jobId: job["Job ID (Numeric)"] || job.jobId
        }));

        setJobs(normalizedJobs);
        setTotal(data.total);
        setLoading(false);

        if (normalizedJobs.length > 0) {
          setSelectedJobId(normalizedJobs[0].jobId);
          setSelectedJob(normalizedJobs[0]);
        } else {
          setSelectedJob(null);
          setSelectedJobId(null);
        }
      } catch (err) {
        console.error("Error fetching jobs:", err);
        setLoading(false);
      }
    };

    fetchJobs();
  }, [page, searchLocation]);

  const handleSelectJob = (jobId) => {
    const normalizedId = jobId?.toString();
    setSelectedJobId(normalizedId);

    const job = jobs.find(job => job?.jobId?.toString() === normalizedId);
    setSelectedJob(job);
    setShowMobileDetails(window.innerWidth < 768);
  };

  const handleSearch = (location) => {
    setSearchLocation(location);
    setPage(1); // reset to page 1 when searching
  };
  

  const handleBackToList = () => {
    setShowMobileDetails(false);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-subtext">Loading jobs...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-primary">JobFinder</h1>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 h-[calc(100vh-80px)]">
        <div className="flex flex-col md:flex-row gap-6 h-full">
          {/* Job List */}
          <div className={`md:w-2/5 lg:w-1/3 ${showMobileDetails ? 'hidden md:block' : 'block'} overflow-y-auto border-r border-border`}>
          <JobList
  jobs={jobs}
  onSelectJob={handleSelectJob}
  selectedJobId={selectedJobId}
  page={page}
  setPage={setPage}
  total={total}
  searchLocation={searchLocation}
  setSearchLocation={setSearchLocation}
/>


          </div>

          {/* Job Details */}
          <div className={`md:w-3/5 lg:w-2/3 ${showMobileDetails ? 'block' : 'hidden md:block'} h-full`}>
            <div className="relative flex flex-col h-full bg-white shadow-md rounded-lg border border-border overflow-hidden">
              {/* Back Button for Mobile */}
              <div className="sticky top-0 bg-white z-10 md:hidden border-b border-border p-4">
                <button
                  onClick={handleBackToList}
                  className="text-primary font-medium flex items-center gap-2"
                >
                  ← Back to Jobs
                </button>
              </div>

              {/* Scrollable Job Detail */}
              <div className="flex-1 overflow-y-auto p-6">
                <JobDetails job={selectedJob} />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-subtext text-sm">
            &copy; {new Date().getFullYear()} JobFinder - Find your dream job today
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
