const SectionTitle = ({ subtitle, title, alignment = "center" }) => {
  return (
    <div className={`max-w-2xl mb-12 ${alignment === 'center' ? 'mx-auto text-center' : 'text-left'} reveal`}>
      {subtitle && (
        <span className="font-ui text-xs font-bold text-accent-red uppercase tracking-widest mb-2 inline-block">
          {subtitle}
        </span>
      )}
      <h2 className="font-display text-4xl md:text-6xl text-text-head uppercase leading-tight">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
