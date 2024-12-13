import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function SkeletonScreen({ height }) {
  return (
    <div>
      <Skeleton
        height={55}
        width={"100%"}
        baseColor="#2C2F38"
        highlightColor="#3A3D47"
      />
      <Skeleton
        height={height}
        width={"100%"}
        baseColor="#2C2F38"
        highlightColor="#3A3D47"
      />
    </div>
  );
}

SkeletonScreen.propTypes = {
  height: PropTypes.number.isRequired,
};
