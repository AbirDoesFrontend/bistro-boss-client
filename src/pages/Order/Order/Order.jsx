import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import Cover from "../../shared/Cover/Cover";
import orderImg from "../../../assets/shop/banner2.jpg";
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);

  const [menu] = useMenu();

  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const drink = menu.filter((item) => item.category === "drinks");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order Food</title>
      </Helmet>
      <Cover title={"Order Now"} img={orderImg} />
      <Tabs
        defaultIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
        className={"my-10"}
      >
        <TabList className={"flex justify-center"}>
          <Tab className="inter tab tab-bordered uppercase mr-5">Salad</Tab>
          <Tab className="inter tab tab-bordered uppercase mr-5">Pizza</Tab>
          <Tab className="inter tab tab-bordered uppercase mr-5">Soups</Tab>
          <Tab className="inter tab tab-bordered uppercase mr-5">Desserts</Tab>
          <Tab className="inter tab tab-bordered uppercase mr-5">Drinks</Tab>
        </TabList>
        <TabPanel>
          <OrderTab item={salad} />
        </TabPanel>
        <TabPanel>
          <OrderTab item={pizza} />
        </TabPanel>
        <TabPanel>
          <OrderTab item={soup} />
        </TabPanel>
        <TabPanel>
          <OrderTab item={dessert} />
        </TabPanel>
        <TabPanel>
          <OrderTab item={drink} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
