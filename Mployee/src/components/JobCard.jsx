import { FiMapPin, FiBriefcase, FiClock } from 'react-icons/fi';

const JobCard = ({ job, isSelected, onClick }) => {
  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }).format(date);
  };

  // Use postedDateTime directly (it's a string in your backend)
  const postedDate = job.postedDateTime 
    ? formatDate(job.postedDateTime)
    : 'Date unavailable';

  return (
    <div 
      className={`p-4 rounded-lg mb-3 cursor-pointer transition-all duration-200 ${
        isSelected 
          ? 'bg-highlight border-l-4 border-primary' 
          : 'bg-card hover:bg-highlight/50'
      }`}
      onClick={onClick}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-jobtitle font-semibold text-lg text-left mb-1">{job.title}</h3>
          <p className="text-heading font-medium text-sm text-left mb-2">{job.company}</p>

          <div className="flex flex-wrap gap-y-1">
            <div className="flex items-center text-subtext text-xs mr-4">
              <FiMapPin className="mr-1" />
              <span>{job.location || 'N/A'}</span>
            </div>

            <div className="flex items-center text-subtext text-xs mr-4">
              <FiBriefcase className="mr-1" />
              <span>{job.employment_type || 'N/A'}</span>
            </div>

            <div className="flex items-center text-subtext text-xs">
              <FiClock className="mr-1" />
              <span>{postedDate}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
