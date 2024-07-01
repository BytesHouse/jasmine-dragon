
const Breadcrumbs = ({product}) => {
    const {name, type, subtype, weight} = product;
    return (
        <div className="flex items-center gap-[15px] text-[var(--blue)] py-[15px] border-b border-[var(--blue-light)]">
            <span>Главная</span>
            <span> &gt; </span>
            <span>Чёрный чай</span>
            <span> &gt; </span>
            <span className="text-[var(--blue-light)]">{type} «{name}» ({subtype}), {weight}.</span>
        </div>
    );
};

export default Breadcrumbs;