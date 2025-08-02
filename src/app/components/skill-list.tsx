export default function SkillList({ items }: { items: string[] }) {
  return (
    <div className="grid grid-cols-3 md:grid-cols-6 text-center gap-3 py-3 pr-3">
      {items.map((name, index) => (
        <div key={index}>
          <div className="text-white text-ss3 border-2 px-3 py-1 rounded-full">
            {name}
          </div>
        </div>
      ))}
    </div>
  );
}
