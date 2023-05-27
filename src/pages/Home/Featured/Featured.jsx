import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'

import './Featured.css'

const Featured = () => {
    return (
        <div className="featured px-[250px] py-[130px] text-white mt-20 mb-20 bg-fixed">
            <div>
                <SectionTitle subHeading={'check it out'} heading={'from our menu'}/>
                <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60">
                    <div>
                        <img src={featuredImg} />
                    </div>
                    <div className="ml-5">
                        <h3 className="inter py-2">March 20, 2023</h3>
                        <h3 className="inter">WHERE CAN I GET SOME?</h3>
                        <p className="inter">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className="btn btn-outline text-white featured-btn inter border-0 border-b-4">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;