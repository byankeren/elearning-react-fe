import { useEffect, useState } from "react";
import { Payment, columns } from "./columns";
import { DataTable } from "../../components/data-table/data-table";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // Add more sample data as needed
  ];
}

export default function DemoPage() {
  const [data, setData] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      setData(result);
      setLoading(false);
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once when the component mounts.

  if (loading) {
    return <div>Loading...</div>; // You can customize this loading state
  }

  return (
    <div className="">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
