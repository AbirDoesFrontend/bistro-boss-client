
const SectionTitle = ({ heading , subHeading }) => {
    return (
        <div className="w-4/12 mx-auto text-center mt-20">
            <p className="text-[#D99904] normal-case section-title mb-3">--- {subHeading} ---</p>
            <h2 className="text-[#fffff] uppercase section-title border-y-4 text-3xl py-4">{heading}</h2>
        </div>
    );
};

export default SectionTitle;