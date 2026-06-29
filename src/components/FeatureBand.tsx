type FeatureBandProps = {
  items: Array<{ title: string; copy: string }>;
};

export function FeatureBand({ items }: FeatureBandProps) {
  return (
    <div className="grid border-y border-ink/10 md:grid-cols-3">
      {items.map((item) => (
        <div key={item.title} className="border-ink/10 py-8 md:border-r md:px-8 md:last:border-r-0">
          <p className="display-title text-2xl text-leaf">{item.title}</p>
          <p className="mt-4 text-sm leading-7 text-ink/62">{item.copy}</p>
        </div>
      ))}
    </div>
  );
}
