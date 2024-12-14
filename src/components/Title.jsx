export default function Title({ name, children }) {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-3xl font-medium text-white">{name}</h1>
      {children}
    </div>
  );
}
