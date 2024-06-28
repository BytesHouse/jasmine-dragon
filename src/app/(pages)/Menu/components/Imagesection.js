import rect from '..//../../assets/Images/Rectangle 21.png';
import table from '..//../../assets/Images/table.png'
import rect2 from '..//../../assets/Images/Rectangle 23.png';
 import rect3 from '..//../../assets/Images/Rectangle 22.png';
const ImageSection = () => {
    return (
        <div className='ml-[40px] w-[1045px] h-[800px]'>
      <img className='absolute w-[500px] h-[632px] my-[85px] mx-[285px]' src={rect} alt="bigphoto"/>
      <img className='absolute w-[293px] h-[274px] mt-[180px] ml-[140px]' src={table} alt="table"/>
      <img className='absolute w-[307px] h-[287px] mt-[29%] ml-[44%]' src={rect2} alt="rect2"/>
      <img className='absolute w-[235px] h-[220px] mt-[38%] ml-[8%]' src={rect3} alt="rect2"/> 
        </div>
    );
};

export default ImageSection;