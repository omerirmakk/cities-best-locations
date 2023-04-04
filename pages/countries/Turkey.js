import Layout from "@/components/Layout";
import MainCard from "@/components/MainCard";
import Country from "../../data.json";
const Turkey = () => {
  return (
    <Layout>
      {Country.turkey.map((turkey) => (
        <MainCard
          source={turkey.countryPhoto}
          mainTitle={turkey.countryTitle}
          mainP={turkey.countryDesc}
        ></MainCard>
      ))}
    </Layout>
  );
};
export default Turkey;
