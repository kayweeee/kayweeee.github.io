function EduCard({ school, major, time, desc }) {
  return (
    <div className="card-base p-5 sm:p-6">
      <div className="flex items-start justify-between mb-2">
        <h4 className="font-bold text-base text-gray-900 leading-tight pr-3">{school}</h4>
        <span className="text-xs font-medium text-orange whitespace-nowrap flex-shrink-0 
                        bg-surface px-2.5 py-1 rounded-full border border-border-subtle">
          {time}
        </span>
      </div>
      <p className="text-sm font-medium text-gray-500 mb-2">{major}</p>
      {desc && (
        <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
      )}
    </div>
  );
}

export default EduCard;
