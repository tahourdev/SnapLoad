import React, { useEffect, useState } from "react";

const ApifyDataFetcher = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.apify.com/v2/datasets/yf8bXjsPeTXbrti3w/items?token=apify_api_FR0wCUol6LFak9qSZY5R1V5N2u3Vx14EjhHo"
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const jsonData = await response.json();
        console.log(jsonData);
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect will only run once, similar to componentDidMount

  if (loading) {
    return <p>Loading...</p>;
  }

  // Render your component using the fetched data
  return (
    <div>
      {/* Render your data here */}
      {/* {data && <pre>{JSON.stringify(data, null, 2)}</pre>} */}
    </div>
  );
};

export default ApifyDataFetcher;
