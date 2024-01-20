const Shimmer = () => {
  return Array(10)
    .fill("")
    .map((shimmerCard, index) => (
      <div key={index} className="shimmerCard"></div>
    ));
};
export default Shimmer;
