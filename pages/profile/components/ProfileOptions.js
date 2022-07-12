import SignOut from "../../../components/SignOut";
import useComponentVisible from "../../../hooks/useComponentVisible";
export default function ProfileOptions() {
  const { ref, isComponentVisible } = useComponentVisible(true);

  return (
    <div ref={ref}>
      {isComponentVisible && (
        <div className="absolute z-5 w-40 rounded border p-1 bg-white">
          <SignOut />
        </div>
      )}
    </div>
  );
}
