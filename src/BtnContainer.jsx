const BtnContainer = (props) => {
  return (
    <div className="btn-container">
      {props.jobs.map((job, index) => {
        return (
          <button
            type="button"
            key={job.id}
            className={props.currentItem === index ? 'job-btn active-btn' : 'job-btn'}
            onClick={() => props.setCurrentItem(index)}
          >
            {job.company}
          </button>
        );
      })}
    </div>
  );
};
export default BtnContainer;
