import image1 from '../../../../assets/icons/Frame.svg'
import image2 from '../../../../assets/icons/Frame-1.svg'
import image3 from '../../../../assets/icons/Frame-2.svg'
import image4 from '../../../../assets/icons/Frame-3.svg'

const BrewBlock = ({product}) => {
    const {seconds, gramm, temperature, strait} = product;
    return (
        <section className="flex flex-col gap-[25px]">
            <h2>Как правильно заваривать</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 brew gap-[25px]">
                <div className="flex flex-col items-start gap-[15px]">
                    <img src={image1} alt="time"/>
                    <h3>Время заваривания</h3>
                    <p>Время одного пролива {seconds} секунд, постепенное увеличение с каждым проливо</p>
                </div>
                <div className="flex flex-col items-start gap-[15px]">
                    <img src={image2} alt="balance"/>
                    <h3>Размер порции</h3>
                    <p>Рекомендуемая порция сухого чая {gramm} грамм на 0.8-1 литр воды (золотое правило)</p>
                </div>
                <div className="flex flex-col items-start gap-[15px]">
                    <img src={image3} alt="temp"/>
                    <h3>Температура</h3>
                    <p>Заваривать чистой, не содержащей примесей, мягкой водой при температуре {temperature} °С</p>
                </div>
                <div className="flex flex-col items-start gap-[15px]">
                    <img src={image4} alt="reverse"/>
                    <h3>Как много раз</h3>
                    <p>Рекомендуется пить проливами {strait} раз, в зависимости от интервала проливов</p>
                </div>
            </div>
        </section>
    );
};

export default BrewBlock;