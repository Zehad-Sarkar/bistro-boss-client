import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import orderCoverImg from "../../assets/shop/banner2.jpg";
import Cover from "../Menu/Cover/Cover";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../hooks/menu/useMenu";
import { Helmet } from "react-helmet-async";
import OrderTab from "./OrderTab/OrderTab";
import { useParams } from "react-router-dom";
const Order = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  const dessert = menu.filter((popular) => popular.category === "dessert");
  const salad = menu.filter((popular) => popular.category === "salad");
  const soup = menu.filter((popular) => popular.category === "soup");
  const pizza = menu.filter((popular) => popular.category === "pizza");
  const drinks = menu.filter((popular) => popular.category === "drinks");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order Food</title>
      </Helmet>
      {/* order cover */}
      <Cover img={orderCoverImg} title={"Our Food"} />
      {/* tab list */}
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>salad</Tab>
          <Tab>pizza</Tab>
          <Tab>soup</Tab>
          <Tab>dessert</Tab>
          <Tab>drinks</Tab>
        </TabList>
        <TabPanel>
          <OrderTab items={salad} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={soup} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={dessert} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinks} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
