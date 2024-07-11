type Props = {
  title: string;
  description?: string;
};

const PageIntro = ({ title, description }: Props) => {
  return (
    <div className="text-center my-8">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
        {title}
      </h1>
      <p className="text-md sm:text-lg lg:text-xl text-gray-400 max-w-[920px]">
        {description}
      </p>
    </div>
  );
};

export default PageIntro;
