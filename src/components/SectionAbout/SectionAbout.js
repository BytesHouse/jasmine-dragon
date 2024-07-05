import SectionTwo from "../SectionTwo/SectionTwo";

const SectionAbout = () => {
  return (
    <section className="aboutus1 container !gap-[100px]">
      <h4 className="col-span-3">О нас</h4>
      <h4 className="col-span-9 indent-[calc(var(--column)+var(--gutter))]">
        ”Jasmine Dragon” - это история о любви к чаю, которая началась много лет
        назад с искренней страсти к уникальным вкусам и ароматам.
      </h4>
      <SectionTwo />
    </section>
  );
};

export default SectionAbout;
