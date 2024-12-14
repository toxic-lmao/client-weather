import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function SkeletonScreen({ height }) {
  return (
    <div className="flex flex-col gap-3 mt-[-3px]">
      <Skeleton
        height="2.2rem"
        baseColor="#2C2F38"
        highlightColor="#3A3D47"
        className="rounded-none rounded-t-2xl "
      />
      <Skeleton
        height={height}
        baseColor="#2C2F38"
        highlightColor="#3A3D47"
        className="rounded-none rounded-b-2xl"
      />
    </div>
  );
}
