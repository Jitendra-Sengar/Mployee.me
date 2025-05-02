import { useState, useEffect } from 'react';
import JobCard from './JobCard';
import SearchBar from './SearchBar';

const JobList = ({
  jobs,
  onSelectJob,
  selectedJobId,
  page,
  setPage,
  total,
  searchLocation,
  setSearchLocation
}) => {
  const [filteredJobs, setFilteredJobs] = useState(Array.isArray(jobs) ? jobs : []);

  useEffect(() => {
    if (searchLocation.trim() === '') {
      setFilteredJobs(Array.isArray(jobs) ? jobs : []);
    } else {
      const filtered = (Array.isArray(jobs) ? jobs : []).filter(job =>
        job.location?.toLowerCase().includes(searchLocation.toLowerCase())
      );
      setFilteredJobs(filtered);
    }
  }, [searchLocation, jobs]);

  const handleSearch = (location) => {
    setSearchLocation(location);
    setPage(1);
  };

  const totalPages = Math.ceil(total / 10);

  return (
    <div className="h-full flex flex-col">
      <h2 className="text-2xl font-bold text-heading mb-4">Job Listings</h2>
      <SearchBar onSearch={handleSearch} />

      {filteredJobs.length === 0 && searchLocation.trim() !== '' ? (
        <div className="flex-1 flex items-center justify-center bg-card rounded-lg p-8">
          <p className="text-subtext text-center">
            No jobs found matching "{searchLocation}". Try a different location.
          </p>
        </div>
      ) : (
        <div className="flex-1 overflow-y-auto pr-2 md:h-[calc(100vh-300px)]">
          {Array.isArray(filteredJobs) &&
            filteredJobs.map((job) => (
              <JobCard
                key={job._id || job.jobId}
                job={job}
                isSelected={selectedJobId === job.jobId?.toString()}
                onClick={() => onSelectJob(job.jobId?.toString())}
              />
            ))}
        </div>
      )}

      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => setPage(prev => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="px-4 py-2 text-sm font-medium bg-primary text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          Previous
        </button>

        <span className="text-sm text-subtext">
          Page {page} ... {totalPages}
        </span>

        <button
          onClick={() => setPage(prev => prev + 1)}
          disabled={page >= totalPages}
          className="px-4 py-2 text-sm font-medium bg-primary text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          Next
        </button>
      </div>

      <div className="mt-3 text-xs text-subtext text-center">
        Showing {filteredJobs.length} of {total} jobs
      </div>
    </div>
  );
};

export default JobList;
