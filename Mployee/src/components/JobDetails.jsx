import { FiMapPin, FiBriefcase, FiCalendar, FiUsers, FiExternalLink, FiFlag } from 'react-icons/fi';

const JobDetails = ({ job }) => {
  if (!job) {
    return (
      <div className="flex h-full items-center justify-center">
        <p className="text-subtext text-center">
          Select a job from the list to view details
        </p>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    }).format(date);
  };

  const postedDate = job.postedDateTime ? formatDate(job.postedDateTime) : 'Date unavailable';



  return (
    <div className="h-full flex flex-col animate-fade-in overflow-y-auto px-1">
      <div className="mb-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
          <div>
            <h1 className="text-2xl text-jobtitle md:text-2xl text-left font-bold text-heading mb-2">{job.title}</h1>
            <h2 className="text-lg font-medium text-left text-heading mb-4">{job.company}</h2>
          </div>

          <a
            href={job.job_link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white py-2 px-4 rounded-lg font-medium text-sm hover:bg-opacity-90 transition-all flex items-center whitespace-nowrap w-full sm:w-auto justify-center"
          >
            Apply Now
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="flex items-center">
            <FiMapPin className="mr-2 text-primary" />
            <span className="text-subtext">{job.location || 'N/A'}</span>
          </div>

          <div className="flex items-center">
            <FiBriefcase className="mr-2 text-primary" />
            <span className="text-subtext">{job.employment_type || 'N/A'}</span>
          </div>

          <div className="flex items-center">
            <FiCalendar className="mr-2 text-primary" />
            <span className="text-subtext">Posted: {postedDate}</span>
          </div>

          <div className="flex items-center">
            <FiUsers className="mr-2 text-primary" />
            <span className="text-subtext">Experience: {job.experience || `${job.min_exp || 0}-${job.max_exp || 0} years`}</span>
          </div>

          <div className="flex items-center">
            <FiFlag className="mr-2 text-primary" />
            <span className="text-subtext">Country: {job.country || 'N/A'}</span>
          </div>

          <div className="flex items-center">
            <FiExternalLink className="mr-2 text-primary" />
            <span className="text-subtext">Source: {job.source || 'N/A'}</span>
          </div>
        </div>
      </div>

      <div className="rounded-lg p-6 mb-6">
        <h3 className="text-l font-semibold text-heading text-left mb-4">Job Description</h3>
        <p className="text-subtext text-md text-left leading-relaxed">
          {job.description || "No description available."}
        </p>
      </div>

      <div className="rounded-lg p-6 mb-6">
        <h3 className="text-l font-semibold text-left text-heading mb-4">Qualifications</h3>
        <div className="flex flex-wrap gap-2">
          <span className="bg-highlight text-heading px-3 py-1 rounded-full text-sm">
            {job.min_exp || 0}-{job.max_exp || 0} Years Experience
          </span>
          <span className="bg-highlight text-heading px-3 py-1 rounded-full text-sm">
            {job.employment_type || 'N/A'}
          </span>
        </div>
      </div>

      <div className="mt-auto pt-4">
        <a
          href={job.job_link}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-primary text-white py-3 rounded-lg font-medium text-center hover:bg-opacity-90 transition-all"
        >
          Apply for this position
        </a>
      </div>
    </div>
  );
};

export default JobDetails;
