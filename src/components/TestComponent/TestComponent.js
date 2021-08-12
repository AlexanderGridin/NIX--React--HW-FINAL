import { useEffect, useState } from "react";

import { getTotalPopultaionData } from "../../lib/datausaIoApi";

const TestComponent = () => {
  const [populationData, setPopulationData] = useState(null);

  useEffect(() => {
    getTotalPopultaionData().then((populationData) => {
      setPopulationData(populationData.data);
      console.log(populationData.data);
    });
  }, []);

  return <div>testComponent</div>;
};

export default TestComponent;
