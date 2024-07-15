import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { Header } from "../../components";
import Footer from "../Main/components/Footer/Footer";
import BrewBlock from "./components/BrewBlock/BrewBlock";
import DescriptionBlock from "./components/DescriptionBlock/DescriptionBlock";
import Breadcrumbs from "../../ui-kit/Breadcrumbs/Breadcrumbs";
import { useEffect, useState } from "react";
import InstructionBlock from "./components/InstructionBlock/InstructionBlock";
import LastReview from "./components/LastReview/LastReview";

const Teas = () => {
    const { id } = useParams();
    // const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [product, setProduct] = useState();

    useEffect(() => {
        const getOneProduct = async (id) => {
            setLoading(false);
            const productDoc = doc(db, 'teas', id);
            const snapshot = await getDoc(productDoc);
            if (snapshot.exists()) {
                const tea = snapshot.data();
                setProduct(tea);
                setLoading(true)
            } else {
                console.log('нет такого документа');
                // navigate('/404');
            }
        }
        getOneProduct(id);
    }, []);

    return (
        loading
            ?
            <div className="container">
                <div className="col-span-12">
                    <Header />
                    <Breadcrumbs product={product} />
                </div>
                <main className="flex flex-col gap-[25px] col-span-12 text-[var(--blue-light)] teas-seo">
                    <DescriptionBlock product={product} />
                    <BrewBlock product={product} />
                    <InstructionBlock />
                    <LastReview />
                </main>
                <Footer />
            </div> : <></>
    );
};

export default Teas;