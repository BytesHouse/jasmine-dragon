import cheainic from '../../../../assets/Images/cheainic.png';
import cheaitar from '../../../../assets/Images/cheaitar.png';
import table from '../../../../assets/Images/table.png';
import cuptea from '../../../../assets/Images/2cuptea.png';

const SectionOne = () => {
    return (
        <section className="section1">
            <img id="img1" src={cheainic} alt="Image 1"/>
            <img id="img2" src={cheaitar} alt="Image 2"/>
            <p id="text1">Наслаждайтесь чаем с пользой: вкус, качество, уют и особенная атмосфера</p>
            <img id="img3" src={table} alt="table"/>
            <img id="img4" src={cuptea} alt="2cup"/>
        </section>
    );
};

export default SectionOne;