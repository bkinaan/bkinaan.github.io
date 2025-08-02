type TitleProps = {
  title: string;
};

export default function Title(props: TitleProps) {
  return (
    <div className="text-white text-4xl md:text-6xl text-center pb-10 font-ss3 font-black">
      {props.title}
    </div>
  );
}
