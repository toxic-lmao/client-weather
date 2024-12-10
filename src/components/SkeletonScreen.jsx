import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function SkeletonScreen({ uiHeight }) {
  return (
    <div>
      <Skeleton
        height={50}
        width={"100%"}
        baseColor="#2C2F38"
        highlightColor="#3A3D47"
      />
      <Skeleton
        height={uiHeight}
        width={"100%"}
        baseColor="#2C2F38"
        highlightColor="#3A3D47"
      />
    </div>
  );
}

SkeletonScreen.propTypes = {
  uiHeight: PropTypes.number.isRequired,
};

export default SkeletonScreen;
