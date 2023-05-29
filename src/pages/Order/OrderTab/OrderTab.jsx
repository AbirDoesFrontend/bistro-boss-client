import MenuCard from '../../../components/MenuCard/MenuCard';

const OrderTab = ({item}) => {
    return (
        <div className="grid lg:grid-cols-3 my-10 gap-5">
            {item.map((item) => (
              <MenuCard key={item._id} menu={item} />
            ))}
          </div>
    );
};

export default OrderTab;