interface SectionTitleProps {
  title: string;
  subTitle: string;
}

const SectionTitle = ({ subTitle, title }: SectionTitleProps) => {
  return (
    <h2 className="text-4xl lg:text-5xl mb-8 text-black/30">
      <span className="text-3xl">{title}</span>
      <br />
      <span className="text-black/60">{subTitle}</span>
    </h2>
  );
};

export default SectionTitle;
