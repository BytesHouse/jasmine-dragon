import {
    Filters,
    // Choise,
    Flexrow,
    Pagination,
    Lables,
    Store,
    Hotsales,
    Contacts,
    Feedback
} from "../../../../components";

const SectionThree = () => {
    return (
        <div className="section3">
            <h1 className="h1sec2-1">Меню</h1>
            <Flexrow/>
            <Filters/>
            <Pagination/>
            <Lables/>
            <Store/>
            <Hotsales/>
            <Pagination/>
            <Contacts/>
            <Feedback/>
        </div>
    );
};

export default SectionThree;