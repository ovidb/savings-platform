export const getSavingsData = (apiToken) => {
  console.log("Fetching data...");

  return Promise.resolve(
    new Array(100)
      .fill([
        {
          name: "Example Bank",
          aer: 4.23,
          aerGross: 4.32,
          type: "Instant Access",
        },
        { name: "ABC Bank", aer: 2.32, aerGross: 2.32, type: "Notice" },
        { name: "BDE Bank", aer: 1.43, aerGross: 1.44, type: "Fixed Term" },
        { name: "DEF Bank", aer: 6.23, aerGross: 6.2, type: "Notice" },
        { name: "BAG Bank", aer: 8.12, aerGross: 8.12, type: "Instant Access" },
        { name: "ZED Bank", aer: 1.43, aerGross: 1.44, type: "Fixed Term" },
        { name: "BHE Bank", aer: 6.23, aerGross: 6.2, type: "Notice" },
        { name: "KDS Bank", aer: 8.12, aerGross: 8.12, type: "Instant Access" },
      ])
      .flatMap((item) => item)
      .map((item, index) => ({ 
        ...item,
        id: index, 
        name: `${item.name} (${index})`, 
       }))
  );
};
